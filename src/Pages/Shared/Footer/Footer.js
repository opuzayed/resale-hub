import React from "react";
import laptop from '../../../assets/Images/laptop.png'
const Footer = () => {
  return (
    <section>
      <footer className="footer footer-center p-10 bg-black text-primary-content">
        <div>
        <img width="50" height="50" viewBox="0 0 24 24" className='rounded-full' src={laptop} alt=" "/>
          <p className="font-bold">
          Resale Hub Ltd. <br/>Providing reliable services since 2022
          </p>
          <p>Copyright © 2023 - All right reserved</p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
