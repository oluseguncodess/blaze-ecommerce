import Home from "./pages/Home"
import Header from './components/Header'
import Footer from "./components/Footer"
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration
} from 'react-router-dom';
import Cart from "./pages/Cart";
import { productsData } from "./api/Api";
import ViewProduct from "./components/ViewProduct";

const Layout = () => {
  return(
    <div>
      <Header/>
      <ScrollRestoration/>
      <Outlet/>
      <Footer/>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>,
        loader: productsData,
      },
      {
        path: '/product/:id',
        element: <ViewProduct/>
      },
      {
        path: '/cart',
        element: <Cart/>
      }
    ]
  }
])

function App() {
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
