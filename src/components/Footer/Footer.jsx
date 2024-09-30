import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import logoImg from "../../assets/image 9 (2).png";

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section - About */}
        <div>
          <h3 className="text-3xl font-ptSerif font-w400 mb-4">RAZER CUTS</h3>
          <p className="mb-4 font-ptSerif font-w400">
            Mollis rhoncus sem nisl dictumst mauris. At faucibus arcu,
            scelerisque ultricies accumsan arcu, molestie. Sed ac elit varius
            enim venenatis ac, id. Ullamcorper non interdum posuere sit nibh id
            metus.
          </p>
          <p>
            A Dui Aliquam Ultrices Eros Lorem Nibh Vivamus. Quis Aliquam Duis
            Pharetra Faucibus Ultrices Volutpat Quisque. Convallis Nec Lectus Mi
            Nec Eget Odio Ac Tempor. Nunc Egestas Sed.
          </p>
          <div className="  flex  ">
            <div className="flex justify-between space-x-10 mt-10 ">
              <span className="text-white text-xl  w-6	h-5 hover:text-gray-400">
                <FaFacebookF />
              </span>
              <span className="text-white text-xl w-6	h-5 hover:text-gray-400">
                <FaTwitter />
              </span>
              <span className="text-white text-xl w-6	h-5 hover:text-gray-400">
                <FaYoutube />
              </span>
              <span className="text-white text-xl w-6	h-5 hover:text-gray-400">
                <FaInstagram />
              </span>
            </div>
            <div className=" ms-14 mt-2 text-center  ">
              <img src={logoImg} alt="Barber Logo" className="h-16	w-20" />
            </div>
          </div>
        </div>

        {/* Center Section - Products */}
        <div>
          <h3 className="text-xl font-bold mb-4">PRODUCTS</h3>
          <ul>
            <li className="mb-2">Hair Care</li>
            <li className="mb-2">Shave</li>
            <li className="mb-2">Skin Care</li>
            <li className="mb-2">Body Care</li>
            <li className="mb-2">Lifestyle</li>
          </ul>
        </div>

        {/* Right Section - Subscribe */}
        <div>
          <h3 className="text-xl font-bold mb-16">SUBSCRIBE OUR NEWSLETTER</h3>
          <form className="flex mb-16 justify-between ">
            <input
              type="email"
              placeholder="Your Email Address"
              className="p-3 m-1 w-full bg-black broder-white text-white rounded-l-md"
            />
            <button
              type="submit"
              className="bg-subRed text-white px-5 rounded-r-md"
            >
              SUBSCRIBE
            </button>
          </form>
          <p>
            Join Our Newsletter And Get 15% Discount And Become A Member Of Our
            Community.
          </p>
        </div>
      </div>
    </footer>
  );
};
