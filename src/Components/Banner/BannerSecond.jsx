
import img from '../../assets/bg.jpg'
import Spline from '@splinetool/react-spline';

const BannerSecond = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${img})`,
                backgroundColor : 'black'
            }}
            className='bg-no-repeat bg-cover bg-center w-full bg-fixed h-screen flex columns-1'
        >
            <div className='md:flex   md:justify-center md:items-center md:gap-3 md:mx-24'>
                <div className='space-y-5 ml-7'>
                    <h1 className='md:text-5xl font-bold text-white'>Dicound 50% on all watch</h1>
                    <p className='text-white'>free shipping <span>$100</span></p>
                    <button className='btn btn-outline btn-warning'>Buy Now</button>
                </div>
                <Spline className='' scene="https://prod.spline.design/zzjAzduJSy2Mpzqx/scene.splinecode" />
            </div>


        </div>
    );
};

export default BannerSecond;