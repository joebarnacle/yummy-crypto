import { useEffect, useState } from 'react';
import { unstable_batchedUpdates } from 'react-dom';

const TOKEN_ADDRESS = '0xb003c68917bab76812797d1b8056822f48e2e4fe';
const API_URL = 'https://api.pancakeswap.info/api/v2/tokens/';
const FETCH_TOKEN_URL = `${API_URL}${TOKEN_ADDRESS}`;

interface Data {
  name: string;
  symbol: string;
  price: string;
  price_BNB: string;
}

interface FetchTokenResponse {
  updated_at: number;
  data: Data;
}

type UsePancakeSwap = () => Data | undefined;

const usePancakeSwap: UsePancakeSwap = () => {
  const [data, setData] = useState<Data>();

  useEffect(() => {
    const fetchToken = async () => {
      const response = await fetch(FETCH_TOKEN_URL).then(response => response.json());
      setData((response as FetchTokenResponse).data);
    };

    fetchToken();
  }, []);

  return data;
};

export default usePancakeSwap;
