import React,{useEffect} from 'react';

const Footer = () => {
  useEffect(() => {
    window.scroll(0,0)
  }, []);
  return (
    <>

      <section className="text-skin-secondary bg-skin-primary body-font flex flex-col items-center md:pt-16">
      <div className='flex flex-col items-center md:pt-16 rounded-t-xl backdrop-blur-md pb-8 md:w-[80%]'>
<div className="">
  {/* <img className='w-56' src="/devzox.png" />											 */}
</div>

<div>
  
<ul className="flex justify-center space-x-8 pt-8 flex-wrap text-white ">
  
  <li className=" text-skin-secondary font-medium text-sm">
    <a href="/About">
      <span className="leading-relaxed">About Us</span>
    </a>
  </li>
  <li className=" text-skin-secondary leading-relaxed font-medium text-sm">
    <a href="/Service">
      <span className="leading-relaxed">Services</span>
    </a>
  </li>
  <li className=" text-skin-secondary font-medium text-sm">
    <a href="/PrivacyPolicy">

      <span className="leading-relaxed">Our Privacy</span>
    </a>
    
  </li>
  <li className=" text-skin-secondary font-medium text-sm">
    <a href="/">
      <span className="leading-relaxed">Blogs</span>
    </a>
  </li>
  <li className=" text-skin-secondary md:mt-0 mt-5 font-medium text-sm">
    <a href="/Contact" className='p-2 rounded-sm bg-skin-primaryBtn text-skin-secondary'>
      <span className="leading-relaxed text-skin-secondary">Contact Us</span>
    </a>
  </li>
</ul>

</div>


  <div className="container px-5 pt-8 mx-auto">
    <div className="text-center">
     <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
     Get in touch with us today to learn more about how we can help your business succeed in the digital age.
     </p>
    </div>
  </div>
  
  <div>
<ul className="flex justify-center gap-5 mt-4 ">
  <li className=" text-skin-primary font-medium ">
    <a href="https://web.facebook.com/devzox" target='_blank' >
    <svg className='w-6' fill='currentColor' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" /></svg>

    </a>
  </li>
  <li className=" text-skin-primary font-medium ">
    <a href="https://linkedin.com/company/devzox/" target='_blank' >
   <svg xmlns="http://www.w3.org/2000/svg" className='w-6' fill='currentColor' viewBox="0 0 448 512">{/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}<path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>


    </a>
  </li>
  </ul>
</div>
<div className='px-10 text-center md:text-left'>
<h3 className=" mt-10">Copyright 2023 © Devzox.com. All Right Reserved By Devzox SMC (pvt).</h3>
</div>
</div>
</section>

    </>
  );
}

export default Footer;
