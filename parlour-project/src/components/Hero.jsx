import landingImage from "../../public/landingImage.png";
import cropped from "../../public/cropped.png";
const hero = () => {
  return (
    <main className="flex  flex-col  justify-center items-center bg-slate-400 h-screen">
      <div className="flex ">
        <img className="pr-10 pb-5" src={cropped} alt="" />
        <img className="pl-10 pb-5" src={landingImage} alt="" />
      </div>
      <button className=" shadow-2xl p-2 rounded-md bg-red-950 w-20 text-white justify-center">
        Call Now
      </button>
    </main>
  );
};
export default hero;
