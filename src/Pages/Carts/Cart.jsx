import Swal from "sweetalert2";


const Cart = ({ data, setDatas,datas  }) => {

    const { brandName, image, name, price, rating, type, _id } = data;

    const handleDelete = (id) => {
        console.log(id)
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

                
                fetch(`https://brand-shop-server-nu-three.vercel.app/cart/${id}`,{
                    method : 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if(data.deletedCount > 0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    }
                    const remainning = datas.filter(data => data._id !== id);
                    setDatas(remainning)
                })
                
            }
        });
    }

    return (
        <div className="card card-side bg-[rgba(255,255,255,.2)]">
            <figure>
                <img
                    src={image}
                    alt="Movie" />
            </figure>
            <div className="card-body">
                <h2 className="card-title md:text-5xl font-bold text-sky-600">{name}</h2>
                <p className="text-white md:font-bold md:text-3xl">{brandName}</p>
                <p className="md:text-xl md:font-bold text-pink-500">Type : {type}</p>
                <p className="md:text-xl md:font-bold text-teal-500">Price : {price}</p>

                <div className="rating gap-1">
                    <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" />
                    <input type="radio" name="rating-3" className="mask mask-heart bg-orange-400" defaultChecked />
                    <input type="radio" name="rating-3" className="mask mask-heart bg-yellow-400" />
                    <input type="radio" name="rating-3" className="mask mask-heart bg-lime-400" />
                    <input type="radio" name="rating-3" className="mask mask-heart bg-green-400" />
                </div>


                <div className="card-actions justify-end">
                    <button
                        onClick={() => handleDelete(_id)}
                        className="btn btn-outline btn-info">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;