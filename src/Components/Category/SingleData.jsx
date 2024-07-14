import React from 'react';
import { Link } from 'react-router-dom';

const SingleData = ({ data }) => {
    const { brandName, image } = data;
    return (
        <div className="card image-full bg-[rgba(255,255,255,.1)] ">
        <figure>
          <img
            src={image}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <Link to={`/category/${brandName}`}><h2 className="card-title text-xl font-bold btn btn-outline w-24 hover:bg-purple-700 border-purple-700 text-purple-700">{brandName}</h2></Link>
          {/* <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div> */}
        </div>
      </div>
    );
};

export default SingleData;