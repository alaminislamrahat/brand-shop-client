import { useLoaderData } from "react-router-dom";
import bg from '../assets/view.jpg'
import Swal from "sweetalert2";
const View = () => {

    const loadedData = useLoaderData();
    const { brandName, image, name, price, rating, type, _id } = loadedData;


    const handleAddToCart = (loadedData) => {
        // Swal.fire({
        //     icon: "error",
        //     title: "Oops...",
        //     text: "Something went wrong!",
        //     footer: '<a href="#">Why do I have this issue?</a>'
        //   });

        fetch('https://brand-shop-server-nu-three.vercel.app/cart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loadedData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged = true){
                    Swal.fire({
                        icon: "success",
                        title: "success...",
                        text: "successfully added!",
                        
                      });
                }
                else{
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!",
                        footer: '<a href="#">Why do I have this issue?</a>'
                      });
                }
            })
    }

    return (
        <div
            style={{
                backgroundImage: `url(${bg})`
            }}
            className="bg-fixed bg-no-repeat bg-cover bg-center py-7">
            <h1 className="text-6xl font-bold pt-28 text-center text-white mb-5">Add to Cart</h1>
            <div className="card bg-[rgba(255,255,255,.2)] w-2/3 mx-auto ">
                <figure>
                    <img
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-4xl font-bold text-white">{name}</h2>
                    <p className="text-2xl font-semibold text-white">{brandName}</p>
                    <p className="text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore suscipit quis eligendi tempora, ipsam atque voluptatem asperiores excepturi exercitationem beatae amet dolor possimus ipsum, nam consequuntur veritatis vitae numquam culpa!</p>
                    <div className="rating rating-lg">
                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                        <input
                            type="radio"
                            name="rating-8"
                            className="mask mask-star-2 bg-orange-400"
                            defaultChecked />
                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <p className="text-white">Type : {type}</p>
                    <p className="text-xl font-bold text-yellow-700">Price : {price}</p>
                    <div className="card-actions justify-end">
                        <button
                            onClick={() => handleAddToCart(loadedData)}
                            className="btn btn-outline btn-warning ">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default View;