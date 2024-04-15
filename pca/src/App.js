import React, { Component } from 'react';
import './css/App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/login'
import Dashboard from './pages/dashboard'
import Admission from './pages/admission';
import ClassRooms from './pages/classRooms';
import Academics from './pages/academics';
import Classes from './pages/classes';
import Graduations from './pages/graduation';
import Staff from './pages/staff'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  },
  {
    path: "/students",
    element: <Admission />
  },
  {
    path: "/staff",
    element: <Staff />
  },

  {
    path: "/classes",
    element: <Classes />
  },
  {
    path: "/academics",
    element: <Academics />
  },
  {
    path : "/classrooms",
    element: <ClassRooms />
  },
  {
    path: "/graduations",
    element: <Graduations />
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
