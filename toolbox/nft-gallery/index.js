const fs = require('fs');
const fetch = require('node-fetch');
const Web3 = require('web3');
const path = require('path');
const sharp = require('sharp');

const { ROOT_DIR, TMP_DIR, CONTRACT_RPC, CONTRACT_ADDRESS } = require('./constants');
const contractABI = require('./contract.sol.json');

const NFT_GALLERY_ROOT_DIR = path.join(ROOT_DIR, 'nft-gallery');
const NFT_GALLERY_IMAGES_DIR = path.join(NFT_GALLERY_ROOT_DIR, 'public', 'images', 'token');
const NFT_GALLERY_DATA_JSON_PATH = path.join(NFT_GALLERY_ROOT_DIR, 'public', 'data.json');

const data = require(NFT_GALLERY_DATA_JSON_PATH);

function getYummyDogContract() {
  const web3 = new Web3(CONTRACT_RPC);
  return new web3.eth.Contract(contractABI, CONTRACT_ADDRESS);
}

function getTokenUri() {
  return 'http://yummydog.yummy-crypto.com/meta';
}

/**
 * Creates a tmp directory to store full images before resizing
 */
function initTmpDir() {
  if (fs.existsSync(TMP_DIR)) {
    fs.rmSync(TMP_DIR, { recursive: true, force: true });
  }

  fs.mkdirSync(TMP_DIR);
}

/**
 * Compares the latest NFT id in our data json file to the current mint count
 * @returns List of NFT ids that has not be scraped yet
 */
async function getUnscrapedNftIds() {
  const lastNftId = data[data.length - 1].id;
  const totalMinted = await getYummyDogContract().methods.totalMinted().call();
  return [...Array(totalMinted - lastNftId)].map((_, index) => index + lastNftId + 1);
}

/**
 * 1. Get a list of newly minted nfts that we haven't scraped yet
 * 2. Scrape meta data
 * 3. Scrape contract data
 * 4. Download and resize images
 * 5. Update nft-gallery assets
 */
(async () => {
  console.log('----Welcome to Yummy Dog scraper----\n');
  const startInMs = new Date();
  console.log('👷 Initialising');
  initTmpDir();
  console.log('    ✅ Created tmp directory');

  const unscrapedQueue = await getUnscrapedNftIds();
  const tmpData = [...data];

  const totalCount = unscrapedQueue.length;
  let counter = 0;

  console.log('🚂 Processing');
  while (unscrapedQueue.length > 0) {
    const nftId = unscrapedQueue.pop();
    if (tmpData.find(obj => obj.id === nftId)) {
      console.log(`    ℹ️ Skipping Yummy dog #${nftId} - NFT already scrapped`, `(${++counter}/${totalCount})`);
      continue;
    }

    const metadata = await fetch(`${getTokenUri()}/${nftId}`).then(response => response.json());

    if (metadata.attributes.length === 0) {
      // NFT has been minted but image has not been generated yet. Typically 48 hours after minting.
      console.log(`    ℹ️ Skipping Yummy dog #${nftId} - No Attributes`, `(${++counter}/${totalCount})`);
      continue;
    }

    const owner = await getYummyDogContract().methods.ownerOf(nftId).call();
    await fetch(`${getTokenUri()}/image/${nftId}`)
      .then(response => response.buffer())
      .then(buffer => sharp(buffer).resize(384).webp().toBuffer())
      .then(buffer => fs.writeFileSync(path.join(TMP_DIR, `${nftId}.webp`), buffer));

    metadata.id = nftId;
    metadata.owner = owner;
    tmpData.push(metadata);

    console.log(`    ✅ Yummy Dog #${nftId}`, `(${++counter}/${totalCount})`);
  }

  if (tmpData.length > data.length) {
    console.log('✏️ Writing results to nft-gallery module');

    fs.readdirSync(TMP_DIR).map(filename =>
      fs.copyFileSync(path.join(TMP_DIR, filename), path.join(NFT_GALLERY_IMAGES_DIR, filename))
    );
    fs.writeFileSync(
      NFT_GALLERY_DATA_JSON_PATH,
      JSON.stringify(
        tmpData.sort((a, b) => a.id - b.id),
        null,
        2
      )
    );

    console.log(`    ✅ ${tmpData.length - data.length} nfts added\n`);
  }

  console.log('🍻 Completed in %dms', new Date() - startInMs);
})();
