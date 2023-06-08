import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './layouts/Main';
import Home from './components/Home';
import SinglePhone from './components/SinglePhone';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          loader:()=>fetch(`http://localhost:5000/phones`),
          element:<Home></Home>
        },
        {
          path:'phones/:id',
          loader:({params})=>fetch(`http://localhost:5000/phones/${params.id}`),
          element:<SinglePhone></SinglePhone>

        }
      ]
    }])
  return (
    <div className="App">
    <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
