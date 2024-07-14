import Spline from '@splinetool/react-spline';


const Banner = () => {
    return (
        <div>


            <div className='absolute  top-10 md:top-52 md:left-52 '>
                <h2 className=' md:text-6xl font-bold text-center text-purple-200 '>We have our best products</h2>
                <h1 className='text-white font-bold text-center my-5 text-2xl'>Buy anything</h1>
            </div>

         
            <Spline className='' scene="https://prod.spline.design/sSWsL4yLNpNqEgJA/scene.splinecode" />

            
        </div>
    );
};

export default Banner;