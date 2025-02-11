// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
// import pages that group is working on
import App from './App.tsx';
import Landingpage from './pages/Landingpage.tsx';
// import WatchList from './pages/WatchList.tsx';
// import SeenIt from './pages/SeenIt.tsx';
// import ErrorPage from './pages/ErrorPage.tsx';

// Update key words with actual page names
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Landingpage />,
      },
      // {
      //   path: '/WatchList',
      //   element: <WatchList />,
      // },
      // {
      //   path: '/SeenIt',
      //   element: <SeenIt />,
      // },
    ],
  },
]);

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}