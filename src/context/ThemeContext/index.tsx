import {theme} from '@styles/theme';
import {Colors} from '@styles/colors';
import React, {useState} from 'react';

export interface Context {
  theme: typeof Colors;
  setTheme: (args: typeof Colors) => void;
}

export const ThemeContext = React.createContext({
  theme: theme(),
  setTheme: (args: typeof Colors) => {},
});

export const useTheme = (): Context => React.useContext(ThemeContext);

export function ThemeProvider({children}): JSX.Element {
  const [currentTheme, setCurrentTheme] = useState<typeof Colors>(theme());
  const setTheme = (args: typeof Colors): void => {
    setCurrentTheme(args);
  };
  return (
    <ThemeContext.Provider value={{theme: currentTheme, setTheme: setTheme}}>
      {children}
    </ThemeContext.Provider>
  );
}
