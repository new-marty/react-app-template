import { BrowserRouter } from 'react-router-dom';

import { AppThemeProvider } from '@/providers/AppThemeProvider';

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({
  children,
}): React.ReactNode => (
  <BrowserRouter>
    <AppThemeProvider>{children}</AppThemeProvider>
  </BrowserRouter>
);
