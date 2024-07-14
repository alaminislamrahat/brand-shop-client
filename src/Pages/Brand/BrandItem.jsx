import { useState } from "react";
import Rating from "react-rating";



const BrandItem = ({ brand }) => {
    const { brandName, image, name, price, type, id } = brand;

    const [rating, setRating] = useState(1);

    function onChange(newValue) {
        console.log(newValue);
        setRating(newValue);
    }

    return (
        <div>
            <div className="relative flex flex-col text-white bg-[rgba(255,255,255,.1)] rounded-xl ">
                <div className="relative mx-4 mt-4 overflow-hidden text-gray-700   rounded-xl h-80">
                    <img src={image} alt="profile-picture" />
                </div>
                <div className="p-6 ">
                    <h4 className="text-center text-3xl font-bold block mb-2 font-sans  antialiased leading-snug tracking-normal text-blue-gray-900 overflow-hidden">
                        {name.slice(0,15)}
                    </h4>
                    <h2 className="text-xl font-bold">{brandName}</h2>
                    
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input
                            type="radio"
                            name="rating-2"
                            className="mask mask-star-2 bg-orange-400"
                            defaultChecked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <p>Type : {type}</p>
                    <p className="font-semibold text-yellow-700">Price : {price} Taka</p>
                    <div className="flex items-center gap-5 justify-center py-3">
                        <button className="btn  btn-outline  hover:text-white btn-info">View</button>
                        <button className="btn  btn-outline hover:text-white btn-success">Update</button>
                        <button className="btn  btn-outline hover:text-white btn-error">Delete</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BrandItem;