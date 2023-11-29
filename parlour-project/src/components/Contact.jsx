import React from "react";
import contactImage from "../assets/contactImage.png"
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import girlWalking from '../assets/girlWalking.png'
import group from '../assets/group.png'

const Contact = () => {

  const handleWhatsAppClick = () => {
    window.open(`https://api.whatsapp.com/send?phone=${"7617231365"}`, '_blank');
  };

  const handleMakePhoneCall = () => {
    window.open(`tel:+91${"7617231365"}`)
}

  return (
    // <div className=" mx-auto my-8 p-8 pt-5 bg-primary rounded-lg ">

    //   <div className="mb-8">
    //     <h2 className="text-5xl font-caveat mb-4 text-center text-gray-800">
    //       Get In Touch
    //     </h2>
    //   </div>

    //   <div className="flex gap-12 w-[100%] justify-center items-center" >
    //     <div className="w-[50%]">
    //       <img src={contactImage} alt="telephone booth" loading="lazy" width={400} />
    //     </div>

    //     <div className="absolute left-32 -bottom-32 "  >
    //       <img src={group} alt="group of peoples" />
    //     </div>

    //     <div className="" >
    //       <img src={girlWalking} alt="girl walking" className="absolute right-4 -bottom-40 " />
    //     </div>
        

    //     <div className="w-[50%] flex flex-col gap-10 " >
    //       <p className="text-2xl " >Thank you for visiting our page. We appreciate your interest and look forward to providing you with excellent service. Feel free to reach out with any questions. We value your trust and are excited about the opportunity to connect with you further.</p>
    //       <div className="flex flex-col gap-4">
    //         <h2 className="text-2xl font-caveat" >Connect with us</h2>
    //         <div className="flex gap-3">
    //         <a href='' >{<FaWhatsapp size={28} onClick={handleWhatsAppClick} />}</a>
    //         <a href="https://www.instagram.com/sonam_makeovers.academy/" target="_blank" >{<FaInstagram size={28}/>}</a>
    //         <a href="">{<CiFacebook size={28} />}</a>
    //         <a href="">{<MdOutlineEmail size={28} />}</a>
    //         <a href="">{<IoIosCall size={28} onClick={handleMakePhoneCall}/>}</a>
    //       </div>
    //     </div>
    //     </div>

    //   </div>




    //   {/* Testimonials Section */}
 
      
    // </div>

    // **********************RESPONSIVE CODE***********************

    <div className="mx-auto my-8 p-8 pt-5 bg-primary rounded-lg">

  <div className="mb-8">
    <h2 className="text-5xl font-caveat mb-4 text-center text-gray-800">
      Get In Touch
    </h2>
  </div>

  <div className="flex flex-col md:flex-row gap-12 justify-center items-center">
    <div className="w-[50%]">
      {/* Show the contactImage image with responsive width */}
      <img src={contactImage} alt="telephone booth" loading="lazy" className="w-full md:w-auto" />
    </div>

    <div className="md:relative">
      {/* Show the group image with responsive positioning */}
      <img src={group} alt="group of peoples" className="md:absolute md:left-32 md:-bottom-32" />

      {/* Hide the girlWalking image on smaller screens */}
      <img src={girlWalking} alt="girl walking" className="hidden md:block absolute right-4 -bottom-40" />
    </div>

    <div className="w-[50%] flex flex-col gap-10">
      <p className="text-lg md:text-2xl">Thank you for visiting our page. We appreciate your interest and look forward to providing you with excellent service. Feel free to reach out with any questions. We value your trust and are excited about the opportunity to connect with you further.</p>
      <div className="flex flex-col gap-4">
        <h2 className="text-lg md:text-2xl font-caveat">Connect with us</h2>
        <div className="flex gap-3">
          <a href=''>{<FaWhatsapp size={28} onClick={handleWhatsAppClick} />}</a>
          <a href="https://www.instagram.com/sonam_makeovers.academy/" target="_blank">{<FaInstagram size={28} />}</a>
          <a href="">{<CiFacebook size={28} />}</a>
          <a href="">{<MdOutlineEmail size={28} />}</a>
          <a href="">{<IoIosCall size={28} onClick={handleMakePhoneCall} />}</a>
        </div>
      </div>
    </div>

  </div>

  {/* Testimonials Section */}
</div>




  );
};

export default Contact;
