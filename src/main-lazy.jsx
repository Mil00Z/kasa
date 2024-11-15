import { StrictMode, Suspense,lazy} from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from '@pages/root.jsx';
import Home from '@pages/home/index.jsx';
// import About from '@pages/about/index.jsx';
import Surprise from '@pages/surprise/index.jsx';
import Annonce from '@pages/annonce/index.jsx';
import PageNotFound from '@pages/notfound/index.jsx';

const LazyAbout = lazy(() => import('@pages/about/index.jsx'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <Suspense fallback={<div>Loading...</div>}><LazyAbout /></Suspense>},
        {
          path: "/annonce/:id",
          element: <Annonce />},
        {
        path: "/benji",
        element: <Surprise />},
        {
          path: "*",
          element: <PageNotFound />}
    ],
  }
   
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
