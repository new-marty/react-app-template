import { AppProvider } from '@/AppProvider';
import { AppRoutes } from '@/AppRoutes';

export const App = (): React.ReactNode => (
  <AppProvider>
    <AppRoutes />
  </AppProvider>
);
