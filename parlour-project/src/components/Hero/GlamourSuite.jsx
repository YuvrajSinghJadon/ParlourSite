import React from 'react'
import Bridal from '../../assets/Bridal.png'
import Haircut from '../../assets/Haircut.png'
import Treatment from "../../assets/Treatment.png"
import Art from "../../assets/Art.png"

const GlamourSuite = () => {
  return (
    <div className='flex flex-col justify-center items-center  mt-32' >
        <div className='flex flex-col gap-8 justify-center bg-orange-200 w-screen items-center p-28' >
        <h1 className='font-bold text-5xl ' >Signature Glamour Suite</h1>
        <div className='border-b-4 border-red-900 w-[30px] text-center' ></div>
        </div>
        
        <div className='flex flex-row gap-32 items-center w-full  justify-center mt-16' >
            <div className='w-[30%]' >
                <img src={Bridal} alt="Bridal image" className='' />
            </div>

            <div className='w-[70%] flex flex-col gap-12' >
                <p className='text-3xl font-bold'>Bridal Radiance</p>
                <p className='text-xl' >Discover the epitome of bridal beauty at <span className='font-bold text-red-900' >Sonam Makeovers</span>. Our expert makeup artists specialize in creating flawless looks tailored to your unique style, be it timeless elegance or modern chic. With premium products and personalized techniques, we promise a radiant look that withstands the tears and smiles of your special day. Book your unforgettable bridal experience with us, where every glance is captivating, every gaze is held, and your beauty shines as brightly as your love story.</p>
            </div>

        </div>

        <div className='flex flex-row-reverse gap-32 items-center justify-between  bg-orange-200 w-screen  pt-10 pb-10 pr-16 pl-16 mt-16   ' >
            <div className='' >
                <img src={Haircut} alt="Haircut image" className='h-[450px] w-[400px] ' />
            </div>

            <div className='w-[70%] flex flex-col gap-12' >
                <p className='font-bold text-3xl' >Bespoke Hair Artistry</p>
                <p className='text-xl' >Immerse yourself in a world of style and sophistication with our exceptional haircut experiences. At our salon, skilled stylists are dedicated to creating hairstyles that go beyond mere cuts – they're personalized expressions of your unique identity. Whether you're envisioning a timeless classic, a trendy and chic transformation, or a bold, statement-making look, our bespoke haircut services cater to your every whim. With precision techniques and a keen eye for the latest trends, we promise a haircut experience that not only leaves you looking effortlessly stylish but also boosts your confidence with every trim. Elevate your personal style and indulge in the artistry of hair design with us.</p>
            </div>

        </div>

        <div className='flex flex-row gap-32 items-center justify-between   mt-16  ' >
            <div className='' >
                <img src={Art} alt="Artistry image" className=' h-[420px] w-[350px]' />
            </div>

            <div className='w-[70%] flex flex-col gap-12' >
                <p className='font-bold text-3xl' >Skin Care Consultations</p>
                <p className='text-xl' >Indulge in the ultimate luxury of personalized skincare with our exclusive Skin Care Consultations. Our expert skincare specialists are dedicated to understanding your unique skin needs and concerns, crafting a tailored regimen that promotes radiance and vitality. Whether you seek rejuvenation, hydration, or solutions for specific skin challenges, our consultations offer a holistic approach. From in-depth analyses to curated product recommendations, we guide you on a transformative journey to healthier, more radiant skin. Elevate your skincare routine and unveil the best version of your skin with our bespoke consultations – where beauty meets expertise.</p>
            </div>

        </div>

    </div>
  )
}

export default GlamourSuite