import { useEffect, useState } from "react";
import SingleData from "./SingleData";
import bg from '../../assets/13763.jpg'


const Categories = () => {


    const [loadedData, setLoadedData] = useState([])

    useEffect(() => {
        fetch('/product.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setLoadedData(data)
            })
    }, [])

    return (
        <div
        style={{
            backgroundImage : `url(${bg})`
        }}
         className=" bg-fixed bg-cover bg-no-repeat bg-center w-full">
            <h1 className="text-center font-bold md:text-6xl py-10 text-white">Categories</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto pb-4"> 
                {
                    loadedData.map(sdata => <SingleData key={sdata.id} data={sdata}></SingleData>)
                }
            </div>
        </div>
    );
};

export default Categories;