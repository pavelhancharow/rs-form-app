import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router';
import Loader from './components/Loader/Loader.tsx';
import RootLayout from './components/RootLayout/RootLayout.tsx';

const MainPage = lazy(() => import('./pages/MainPage.tsx'));
const UncontrolledFormPage = lazy(
  () => import('./pages/UncontrolledFormPage.tsx')
);
const HookFormPage = lazy(() => import('./pages/HookFormPage.tsx'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage.tsx'));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Navigate to="/forms" />} />

        <Route path="forms" element={<RootLayout />}>
          <Route index element={<MainPage />} />
          <Route path="uncontrolled-form" element={<UncontrolledFormPage />} />
          <Route path="hook-form" element={<HookFormPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
