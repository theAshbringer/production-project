import { routerConfig } from 'app/config'
import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

export function AppRouter() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {Object.values(routerConfig).map(({ path, element }) =>
        (<Route
          key={path}
          path={path}
          element={element}
        />))}
      </Routes>
    </Suspense>
  )
}