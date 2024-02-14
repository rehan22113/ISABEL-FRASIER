import React, { useState } from 'react'

const Navbar = () => {
  const [heart,setHeart] = useState(false)
  return (
    <header class="text-gray-600 body-font nav-bg backdrop-blur-md shadow-md drop-shadow-lg">
  <div class="container mx-auto flex flex-wrap p-5 flex-row items-center justify-around">
    <button onClick={()=>setHeart((prev)=>!prev)} class="flex title-font font-medium items-center text-white z-50">
    <span className='text-4xl'>{heart?"💔":"❤️"}</span>
      {/* <span class="ml-3 text-xl"> '💕', '🪐', '💘', '💝', '💋', '🎀', '🍦', '💫', '❤️‍🔥', '💞'</span> */}
    </button>
    {/* <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a target='_blank' href='https://www.genesismodelmgmt.co.uk/womens/isabel-f' class="mr-5 text-black scale-100 hover:scale-105 transition-all font-bold list-none bg-[#FFD2D2] shadow-md py-2 px-3 rounded cursor-pointer">GENESIS</a>
      <a target='_blank' href='Www.Graphenecorner.com' class="mr-5 text-black scale-100 hover:scale-105 transition-all font-bold bg-[#FFD2D2] shadow-md py-2 px-3 rounded cursor-pointer">GRAPHENE CORNER</a>
      <a target='_blank' href='https://Cirkel.ai' class="mr-5 text-black scale-100 hover:scale-105 transition-all font-bold bg-[#FFD2D2] shadow-md py-2 px-3 rounded cursor-pointer">CIRKEL AI</a>
      <a target='_blank' href='https://Www.bdblockchain.com' class="mr-5 text-black scale-100 hover:scale-105 transition-all font-bold bg-[#FFD2D2] shadow-md py-2 px-3 rounded cursor-pointer">BD BLOCKCHAIN LONDON</a>
      <a target='_blank' href='https://Www.lanadelpayme.com' class="mr-5 text-black scale-100 hover:scale-105 transition-all font-bold bg-[#FFD2D2] shadow-md py-2 px-3 rounded cursor-pointer">LANADELPAYME</a>
    </nav> */}
    <a href='mailto://isabelfrasier@isabelfrasier.com' class=" btn shadow-md border inline-flex items-center bg-gray-200 backdrop-blur-lg py-2 px-3 focus:outline-none hover:bg-gray-200 font-bold rounded text-base">Contact
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </a>
  </div>
</header>
    

  )
}

export default Navbar