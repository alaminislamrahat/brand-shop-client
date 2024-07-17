import Spline from '@splinetool/react-spline';


const Banner = () => {
    return (
        <div>


            <div className='absolute  top-16 md:top-52 md:left-52  left-20'>
                <h2 className=' md:text-6xl font-bold text-center text-purple-200 '>We have our best products</h2>
                <h1 className='text-white font-bold text-center md:my-5 md:text-2xl'>Buy anything</h1>
            </div>

         
            <Spline className='' scene="https://prod.spline.design/sSWsL4yLNpNqEgJA/scene.splinecode" />

            
        </div>
    );
};

export default Banner;