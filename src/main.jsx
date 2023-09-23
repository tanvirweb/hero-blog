import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Blogs from './components/Blogs/Blogs.jsx';
import BlogDetails from './components/Blogs/BlogDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/blogs",
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
        element: <Blogs></Blogs>
      },
      {
        path: "/blogs/:blogId",
        element: <BlogDetails></BlogDetails>,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.blogId}`)
      },
      {
        path: "/about",
        element: <About></About>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
