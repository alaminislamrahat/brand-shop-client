import { useState } from "react";
import { Link } from "react-router-dom";
// import Rating from "react-rating";
import Swal from "sweetalert2";



const BrandItem = ({ brand, info, setInfo }) => {
    const { brandName, image, name, price, type, _id } = brand;

    // const [loadedData, setLoadedData] = useState(brand);

    function onChange(newValue) {
        console.log(newValue);
        setRating(newValue);
    }

    const handleDelete = (id) => {
        console.log(id);


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://brand-shop-server-nu-three.vercel.app/products/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
                const remailnnig = info.filter(data => data._id !== id)
                setInfo(remailnnig);

            }
        });



    }

    return (
        <div>
            <div className="relative flex flex-col text-white bg-[rgba(255,255,255,.1)] rounded-xl ">
                <div className="relative mx-4 mt-4 overflow-hidden text-gray-700   rounded-xl h-80">
                    <img src={image} alt="profile-picture" />
                </div>
                <div className="p-6 ">
                    <h4 className="text-center md:text-3xl font-bold block mb-2 font-sans  antialiased leading-snug tracking-normal text-blue-gray-900 overflow-hidden">
                        {name.slice(0, 15)}
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
                        <Link to={`/view/${_id}`}>
                            <button className="btn  btn-outline  hover:text-white btn-info">View</button>
                        </Link>
                        <Link to={`/update/${_id}`}>
                            <button className="btn  btn-outline hover:text-white btn-success">Update</button>
                        </Link>
                        <button
                            onClick={() => handleDelete(_id)}
                            className="btn  btn-outline hover:text-white btn-error">Delete</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BrandItem;