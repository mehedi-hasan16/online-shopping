import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './components/Shop/Shop';
import Order from './components/Order/Order';
import cartProductLoader from './loader/cartProductLoader';
import ManageInverntory from './components/ManageInverntory/ManageInverntory';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import AuthProvider from './providers/AuthProvider';
import PrivateRoute from './routes/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: '/',
        element: <Shop/>,
      },
      {
        path: '/order',
        element: <Order/>,
        loader: cartProductLoader
      },
      {
        path:'/manageInventory',
        element: <PrivateRoute><ManageInverntory></ManageInverntory></PrivateRoute>,
      },
      {
        path:'/login',
        element: <Login></Login>,
      },
      {
        path:'/signup',
        element: <SignUp></SignUp>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router}/>
    </AuthProvider>
  </React.StrictMode>,
)
