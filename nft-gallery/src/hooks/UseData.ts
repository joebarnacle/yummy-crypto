import { useEffect, useState } from 'react';
import { unstable_batchedUpdates } from 'react-dom';

type TraitCount = Record<string, number>;
interface Index {
  traits: Record<string, TraitCount>[];
}

interface Attribute {
  trait_type: string;
  value: string;
}

export interface Metadata {
  name: string;
  external_url: string;
  description: string;
  attributes: Attribute[];
  image: string;
  owner: string;
  id: string;
}

const useData = () => {
  const [loading, setLoading] = useState(true);
  const [indexedData, setIndexedData] = useState<Index>({ traits: [] });
  const [data, setData] = useState<Metadata[]>([]);

  useEffect(() => {
    const buildIndex = (metadata: Metadata[]) => {
      const traits: any = {};
      metadata.forEach(datum => {
        for (const attr of datum.attributes) {
          const trait = attr['trait_type'];
          const value = attr.value;

          if (!traits[trait]) {
            traits[trait] = {};
          }

          if (!traits[trait][value]) {
            traits[trait][value] = 0;
          }

          traits[trait][value]++;
        }
      });

      return { traits };
    };

    const fetchMetadata = async () => {
      const metadata = await fetch('/data.json').then(response => response.json());
      const index = buildIndex(metadata);

      unstable_batchedUpdates(() => {
        setIndexedData(index);
        setData(metadata);
        setLoading(false);
      });
    };

    setLoading(true);
    fetchMetadata();
  }, []);

  return { indexedData, loading, data };
};

// TODO: Use reducer
export const useWallet = (owner?: string) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Metadata[]>([]);

  useEffect(() => {
    const fetchMetadata = async () => {
      const metadata = await fetch('/data.json').then(response => response.json());

      unstable_batchedUpdates(() => {
        setData(metadata);
        setLoading(false);
      });
    };

    setLoading(true);
    fetchMetadata();
  }, []);

  return { data: owner ? data.filter(item => item.owner === owner) : [], loading };
};

export const useToken = (tokenId?: string) => {
  console.log(tokenId);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Metadata[]>([]);

  useEffect(() => {
    const fetchMetadata = async () => {
      const metadata = await fetch('/data.json').then(response => response.json());

      unstable_batchedUpdates(() => {
        setData(metadata);
        setLoading(false);
      });
    };

    setLoading(true);
    fetchMetadata();
  }, []);

  return { metadata: tokenId ? data.find(item => item.id == tokenId) : null, loading };
};

export default useData;
