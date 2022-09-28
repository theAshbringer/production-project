import { routerConfig } from 'app/config';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from 'widgets/PageLoader';

export function AppRouter() {
  return (
    <Routes>
      {Object.values(routerConfig).map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={(
            <Suspense fallback={<PageLoader />}>
              <div className="page-wrapper">
                {element}
              </div>
            </Suspense>
                )}
        />
      ))}
    </Routes>
  );
}
