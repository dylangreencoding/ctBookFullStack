import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import './style.css'
//
import { NavRoot, ErrorPage, Home, Table } from './components';
//
import { Provider } from 'react-redux';
import { store } from './redux/store'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavRoot />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "home",
        element: <Home title={`This is the home page prop from the createbrowserrouter call`}/>
      },
      {
        path: "form",
        element: <Table />
      }
    ]
  },
])

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router ={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
