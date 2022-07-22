import { createTheme } from '@mui/material/styles';

const theme = {
  palette: {
    mode: 'dark',
    primary: {
      lighter: '#C8FACD',
      light: '#5BE584',
      main: '#00AB55',
      dark: '#007B55',
      darker: '#005249',
    },
    primary2Color: '#47A4E8',
  },
  appBar: {
    height: 50,
  },
  textField: {},
};

export default createTheme(theme);
