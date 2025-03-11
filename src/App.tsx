import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router';
import Loader from './components/Loader/Loader.tsx';
import RootLayout from './components/RootLayout/RootLayout.tsx';

const MainPage = lazy(() => import('./pages/MainPage.tsx'));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Navigate to="/forms" />} />

        <Route path="forms" element={<RootLayout />}>
          <Route index element={<MainPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
