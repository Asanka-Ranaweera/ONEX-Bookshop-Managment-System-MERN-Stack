import React from "react";
import bg from "../assets/Image.png";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Header from "./common/Header";
function Home () {
  const { user } = useSelector((state) => ({ ...state }));
  

  return (
    <>
        <Header />
{/* {
  user ? (<></>) : (<>Pleaselogin</>)
} */}
      <div
        style={{ backgroundImage: `url(${bg})` }}
        name="home"
        className="snap-start bg-cover bg-center h-screen w-full"
      >
        <div className="max-w-[1200px] pl-[600px] mx-auto px-8 flex flex-col justify-center h-full">
          <p className="text-2xl font-po pl-2 text-secondary">
          </p>
          <h1 className="text-[50px] font-semibold text-secondary">
          Welcome to Onex Bookshop
          </h1>
          <h2 className="pt-4 pl-2 text-l sm:text-l w-[500px] font-bold text-text">
          Step into a world of endless imagination, knowledge, and literary delights. We are thrilled to have you here, where the love for books and the joy of reading converge in a digital haven. 
          </h2>
          <div className="pt-6">
            <button className="rounded-full bg-primary text-white group border-2 bg-[#001233]  px-6 py-3 my-2 flex items-center  hover:border-[#000]">
              <Link to="/login" smooth={true} duration={500}>
              Get Started
              </Link>
            </button>
          </div>
        </div>
      </div>

     
    </>
  );
};

export default Home;
