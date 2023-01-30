import React from 'react';
import {ThemeContext} from '../context/ThemeContext';

export const withTheme =
  Component =>
  ({...props}) => {
    const theme = React.useContext(ThemeContext);
    return <Component theme={theme} {...props} />;
  };
