// import  styles  from "Hero.module.css"
import hero from "../../assets/hero.jpg";

import { FaStar } from "react-icons/fa";

export default function Hero() {
  return (
    <>
      <section
        className={`h-screen bg-no-repeat bg-cover bg-center bg `}
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7)), url(${hero})`,
        }}
        id="#home"
      >
        <div className="container h-full flex items-center ">
          <div className="caption">
            {/* main-header */}
            <div className="main-header flex items-center gap-5 ">
              <span className="w-10 h-0.5 bg-primary"></span>
              <span className="text-primary">Signature Japan Collection</span>
            </div>
            <h1>
              Japan, <span className="text-primary italic">discovered</span>{" "}
              <br /> slowly.
            </h1>
            <p className="text-third mt-4">
              Eight days across Tokyo, Hakone, Kyoto and Nara — cherry blossoms
              at <br />
              dawn, private teahouses, bullet trains, and the quiet rooms behind{" "}
              <br />
              Japan's most photographed places.
            </p>
            <div className="end-caption flex items-baseline gap-5 lg:gap-35  flex-col lg:flex-row">
              <button className="btn-primary mt-6">Reserve your place</button>
              <div className="content flex items-center flex-wrap">
                <FaStar size={25} color="rgba(233, 183, 81, 1)" />
                <FaStar size={25} color="rgba(233, 183, 81, 1)" />
                <FaStar size={25} color="rgba(233, 183, 81, 1)" />
                <FaStar size={25} color="rgba(233, 183, 81, 1)" />
                <FaStar size={25} color="rgba(233, 183, 81, 1)" />

                <span className="text-third text-lg ms-4">4.98 </span>
                <span className="h-4 w-0.5 bg-third mx-3 "></span>
                <span className="text-third text-lg">214 reviews</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
