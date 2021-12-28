import { createContext, useContext } from 'react';

export const ColorModeContext = createContext({ toggleColorMode: () => {} });
const useCodeMode = () => {
  const colorMode = useContext(ColorModeContext);
  return colorMode;
};

export default useCodeMode;
