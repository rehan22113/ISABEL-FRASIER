import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar';
import EmojiRain from './Components/EmojiRain';
import BottomNavbar from './Components/BottomNavbar';
import { emojiCursor } from 'cursor-effects'


const App = () => {
  const [show,setShow] = useState(false)

  useEffect(() => {
    let cursorInstance = null;

    if (!show) {
      cursorInstance = new emojiCursor({
        element: document.documentElement, // Apply to the entire document
        emoji: ["💗", "💓", "💝", "💕", "💘", "💖"],
      });
    }

    return () => {
      // Cleanup when the component unmounts or when show becomes false
      if (cursorInstance) {
        cursorInstance.destroy();
      }
    };
  }, [show]);


  return <div className='bg min-h-screen' id='emoji'>
    <Navbar change={setShow} show={show}/>
    <EmojiRain/>
   <section className="text-gray-600 body-font overflow-hidden">
  <div className="container mx-auto h-full md:min-h-screen flex md:px-5 py-10 flex-col items-center justify-center">
    <div className=" md:w-full md:pb-10 flex flex-col md:items-start md:text-left md:mb-0 items-center justify-center text-center">
      <h1 className="title-font w-full text-center md:text-8xl text-5xl md:mb-4 md:py-0 py-10 font-extrabold text-white t-shadow">ISABEL FRASIER
      </h1>
      {/* <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p> */}
     
    </div>
    {/* <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
    </div> */}
    <BottomNavbar/>
  </div>
</section>

    {/* <Footer/> */}
  </div>
}

export default App;
