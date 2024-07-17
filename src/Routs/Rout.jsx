import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import AddProduct from "../Pages/AddProduct";
import MyCart from "../Pages/Carts/MyCart";
import Login from "../Pages/Login";
import BrandItems from "../Pages/Brand/BrandItems";
import Update from "../Components/Update";
import View from "../Components/View";
import Register from "../Pages/Register";
import PrivateRout from "./PrivateRout";


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
                loader : ()=> fetch('https://brand-shop-server-nu-three.vercel.app/products')
            },
            {
                path : '/update/:id',
                element : <Update/>,
                loader : ({params})=> fetch(`https://brand-shop-server-nu-three.vercel.app/products/${params.id}`)
            },
            {
                path : '/view/:id',
                element : <PrivateRout><View/></PrivateRout>,
                loader : ({params})=> fetch(`https://brand-shop-server-nu-three.vercel.app/products/${params.id}`)
            },
            {
                path : '/addproduct',
                element : <AddProduct></AddProduct>
            },
            {
                path : '/mycart',
                element : <PrivateRout><MyCart></MyCart></PrivateRout>,
                loader : ()=> fetch('https://brand-shop-server-nu-three.vercel.app/cart')
            },
            {
                path : '/login',
                element : <Login></Login>
            },
            {
                path : '/register',
                element : <Register></Register>
            },
            
        ]
    }
])

export default router;
