
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Header/Blog/Blog';
import Categories from './components/Header/Categories/Categories';
import CategoryDetails from './components/Header/Categories/Category/CategoryDetails/CategoryDetails';
import Statistics from './components/Header/Statistics/Statistics';
import Main from './components/Main/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>,
      children: [
        { path: '/', loader: () => fetch('https://openapi.programming-hero.com/api/quiz'), element: <Categories></Categories> },
        { path: '/statistics', element: <Statistics></Statistics> },
        { path: 'blog', element: <Blog></Blog> }, { path: '/quiz/:quizId', loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`), element: <CategoryDetails></CategoryDetails> }
      ]

    }, { path: '*', element: <h2>This Router Not Found</h2> }
  ])
  return (
    <div className='bg-dark'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
