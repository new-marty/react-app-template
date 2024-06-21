import { type FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Box } from '@mui/material';

import { TopPage } from '@/pages';

const NotFound: FC = () => <Box>Not Found</Box>;

export const AppRoutes = (): React.ReactNode => (
  <Routes>
    <Route path="/" element={<TopPage />} />

    <Route path="*" element={<NotFound />} />
  </Routes>
);
