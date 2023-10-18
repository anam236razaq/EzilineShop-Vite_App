import { useEffect } from "react"
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import SingleProduct from "./Pages/SingleProduct";
import { useDispatch } from "react-redux";
import { dataFailed, dataReceived } from "./ReducersSlice/FetchingSlice";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import ForgotPassword from "./Pages/ForgotPassword";


const router=createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/shop",
    element: <Shop />
  },
  {
    path: "/products/:productId",
    element: <SingleProduct />
  },
  {
    path: "/cart",
    element: <Cart />
  },
  {
   path: "/checkout",
   element: <Checkout />
  },
  {
    path: "/forgotPassword",
    element: <ForgotPassword />
  }
])

function App() {
  const dispatch=useDispatch();

  useEffect(function(){
    async function fetchingData(){
      try{
      const res= await fetch("http://localhost:9000/products");
      const data=await res.json();
      dispatch(dataReceived(data));
      }catch(err){
       dispatch(dataFailed);
      }
    }
    fetchingData();
  }, [dispatch])

  return <RouterProvider router={router} />
}

export default App
