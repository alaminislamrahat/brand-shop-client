import { useLoaderData, useParams } from "react-router-dom";
import BrandItem from "./BrandItem";
import { useEffect, useState } from "react";
import BrandBanner from "../../Components/Banner/BrandBanner";
import bg from '../../assets/bg2.jpg'


const BrandItems = () => {

    const data = useLoaderData();
    const { id } = useParams();

    const idLow = id.toLowerCase()

    const brands = data.filter(brand => brand.brandName.toLowerCase() === idLow);
    console.log(brands)
    const [action, setAction] = useState(true)
    const [info, setInfo] = useState(brands.slice(0, 6))


    useEffect(() => {
        if (action) {
            setInfo(brands.slice(0, 6))
        }
        else {
            setInfo(brands)
        }
    }, [action])

    return (
        <div
        style={{
            backgroundImage : `url(${bg})`
        }}
         className="bg-no-repeat bg-cover bg-center bg-fixed">
            <BrandBanner />
            <div>
                <h2 className="md:text-6xl font-bold text-center py-12 text-white">{id} Items </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:mx-16 py-12">
                    {
                        info.map(brand => <BrandItem info={info} setInfo={setInfo} brand={brand} key={brand}></BrandItem>)
                    }


                </div>
                <div className=" py-10 flex justify-center items-center">
                    <button onClick={() => setAction(!action)} className="btn glass text-white">{action ? "See more" : "See less"}</button>
                </div>
            </div>
        </div>
    );
};

export default BrandItems;