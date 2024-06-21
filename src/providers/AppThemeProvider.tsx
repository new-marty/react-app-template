import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

interface AppThemeProviderProps {
  children: React.ReactNode;
}

const theme = createTheme({
  palette: {
    info: { contrastText: '#fff', main: '#E0DB3F' },
    primary: { contrastText: '#fff', main: '#5E9FF2' },
    secondary: { contrastText: '#fff', main: '#89ABD9' },
    success: { contrastText: '#fff', main: '#6CE03F' },
    warning: { contrastText: '#fff', main: '#E08D53' },
  },
  typography: {
    fontFamily: [
      '"Noto Sans JP"',
      'Roboto',
      '"Helvetica"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
});

export const AppThemeProvider: React.FC<AppThemeProviderProps> = ({
  children,
}): React.ReactNode => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);
