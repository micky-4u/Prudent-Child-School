import React, { Component } from 'react';
import './css/App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/login'
import Dashboard from './pages/dashboard'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  }
]);

class App extends Component {
  render() {
    return (
       <RouterProvider router={router}/>
    
    );
  }
}

export default App;
