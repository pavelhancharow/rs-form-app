import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router';
import { Loader, RootLayout } from './components';

const MainPage = lazy(() => import('./pages/MainPage.tsx'));
const UncontrolledFormPage = lazy(
  () => import('./pages/UncontrolledFormPage.tsx')
);
const HookFormPage = lazy(() => import('./pages/HookFormPage.tsx'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage.tsx'));

function App() {
  return (
    <RootLayout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/">
            <Route index element={<MainPage />} />
            <Route
              path="uncontrolled-form"
              element={<UncontrolledFormPage />}
            />
            <Route path="hook-form" element={<HookFormPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </RootLayout>
  );
}

export default App;
