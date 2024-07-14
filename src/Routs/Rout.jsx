import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import AddProduct from "../Pages/AddProduct";
import MyCart from "../Pages/MyCart";
import Login from "../Pages/Login";
import BrandItems from "../Pages/Brand/BrandItems";


const router = createBrowserRouter([
    {
        path : '/',
        element : <Root></Root>,
        children : [
            {
                path : '/',
                element : <Home></Home> 
            },
            {
                path : '/category/:id',
                element : <BrandItems/>,
                loader : ()=> fetch('http://localhost:5000/products')
            },
            {
                path : '/addproduct',
                element : <AddProduct></AddProduct>
            },
            {
                path : '/mycart',
                element : <MyCart></MyCart>
            },
            {
                path : '/login',
                element : <Login></Login>
            },
            
        ]
    }
])

export default router;
