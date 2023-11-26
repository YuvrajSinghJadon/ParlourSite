import landingImage from "../../public/landingImage.png";
import cropped from "../../public/cropped.png";
import GlamourSuite from "./Hero/GlamourSuite";
import GallerySection from "./Hero/GallerySection";
import PhoneCallButton from "./Hero/PhoneCallButton";


const hero = () => { 

  

  return (
    <div className="w-11/12 mx-auto" >
      <div className="  flex  flex-col  justify-center items-center bg-orange-100  ">
      <div className="flex justify-center items-center ">
        <img className="pr-10 pb-5 transition-transform transform hover:scale-105" src={cropped} alt="" />
        <img className="pl-10 pb-5 transition-transform transform hover:scale-105" src={landingImage} alt="" />
      </div>

      <PhoneCallButton phoneNumber = "7617231365" />
      

    </div>
    {/* Section-2-> Glamour Suite */}
    <div className="" >
        <GlamourSuite/>
      </div>

      <div>
      <GallerySection/>
      </div>

    </div>
  );
};
export default hero;
