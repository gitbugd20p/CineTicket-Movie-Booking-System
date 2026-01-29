import React from "react";
import { assets } from "../assets/assets";
import { ArrowRight, CalendarIcon, ClockIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen flex-col items-start justify-center gap-4 bg-[url('backgroundImage.png')] bg-cover bg-center px-6 md:px-16 lg:px-36">
      <img src={assets.marvelLogo} alt="" className="mt-20 max-h-11 lg:h-11" />

      <h1 className="max-w-110 text-5xl font-semibold md:text-[70px] md:leading-18">
        Iron Man <br />
      </h1>

      <div className="flex items-center gap-4 text-gray-300">
        <span>Action | Adventure | Sci-Fi</span>

        <div className="flex items-center gap-1">
          <CalendarIcon className="h-4.5 w-4.5" /> 2018
        </div>
        <div className="flex items-center gap-1">
          <ClockIcon className="h-4.5 w-4.5" /> 2h 8m
        </div>
      </div>

      <p className="max-w-md text-gray-300">
        A billionaire industrialist and genius inventor, Tony Stark, builds a
        high-tech suit of armor to escape captivity and vows to protect the
        world as the armored Avenger.
      </p>
      <button
        className="bg-primary hover:bg-primary-dull flex cursor-pointer items-center gap-1 rounded-full px-6 py-3 text-sm font-medium transition"
        onClick={() => {
          navigate("/movies");
        }}
      >
        Explore Movies
        <ArrowRight className="h-5 w-5" />
      </button>
    </div>
  );
};

export default HeroSection;
