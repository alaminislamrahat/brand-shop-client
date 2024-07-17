import { useLoaderData } from "react-router-dom";
import Cart from "./Cart";
import bg from '../../assets/alamin.jpg'
import { useState } from "react";


const MyCart = () => {

    const loadedData = useLoaderData();
   
    const [datas, setDatas] = useState(loadedData)

    return (
        <div
        style={{
            backgroundImage : `url(${bg})`
        }}
         className="py-6 bg-no-repeat bg-cover bg-center bg-fixed">
            <h2 className="md:text-6xl font-bold text-white text-center md:py-8">my cart</h2>

            <div className="grid md:grid-cols-2 gap-5 md:mx-9 ">
                {
                    datas?.map(data => <Cart datas={datas} setDatas={setDatas} key={data._id} data={data}></Cart>)
                }
            </div>
        </div>
    );
};

export default MyCart;