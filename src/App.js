
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Header/Blog/Blog';
import Categories from './components/Header/Categories/Categories';
import Statistics from './components/Header/Statistics/Statistics';
import Main from './components/Main/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>,
      children: [
        { path: '/', element: <Categories></Categories> },
        { path: '/statistics', element: <Statistics></Statistics> },
        { path: 'blog', element: <Blog></Blog> }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
