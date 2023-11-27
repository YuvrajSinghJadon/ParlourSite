// Footer.jsx
import React from "react";
import logo from "/Logo.png";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import footerImage from '../assets/footerImage.png'

const Footer = () => {
  const gradient = "linear-gradient(135deg, #FFA07A, #FF6347)";

  const handleWhatsAppClick = () => {
    window.open(`https://api.whatsapp.com/send?phone=${"7617231365"}`, '_blank');
  };

  const handleMakePhoneCall = () => {
    window.open(`tel:+91${"7617231365"}`)
}

  return (
    <div className="flex flex-row justify-between items-center w-11/12 sm:p-2 lg:p-8 sm:mt-6 lg:mt-10" >
      <div>
        <img src={footerImage} alt="footer Image" width={350} className="" />
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold ">Address</h2>
        <p className="w-[70%] text-lg" >Sonam Makeovers, Sadhguru Kirana Store ke paas, Patri road</p>
        <p className="text-lg">Gwalior, Madhya Pradesh 474005 </p>
      </div>

      <div className="flex flex-col gap-2" >
        <p className="text-2xl font-bold" >Social Icons</p>
        <div className="flex gap-3">
          <a href='' >{<FaWhatsapp size={28} onClick={handleWhatsAppClick} />}</a>
          <a href="https://www.instagram.com/sonam_makeovers.academy/" target="_blank" >{<FaInstagram size={28}/>}</a>
          <a href="">{<CiFacebook size={28} />}</a>
          <a href="">{<MdOutlineEmail size={28} />}</a>
          <a href="">{<IoIosCall size={28} onClick={handleMakePhoneCall}/>}</a>
        </div>
      </div>



      
      
    </div>

    

    
  );
};

export default Footer;
