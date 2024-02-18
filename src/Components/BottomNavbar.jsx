import React from 'react'

const BottomNavbar = () => {
  return (
    <nav class="md:ml-auto w-full md:mr-auto flex flex-wrap justify-center items-center text-base">
    <div className='grid grid-cols-1 md:w-[50%] gap-5 text-lg font-bold'>

      <a target='_blank' href='https://www.genesismodelmgmt.co.uk/womens/isabel-f' class="text-white scale-100 hover:scale-105 transition-all font-bold list-none btn shadow-[0px_0px_2px_0px] shadow-black backdrop-blur-sm py-2 px-3 text-center rounded-full cursor-pointer">GENESIS</a>
    
    
      <a target='_blank' href='Www.Graphenecorner.com' class="text-white scale-100 hover:scale-105 transition-all font-bold list-none btn shadow-[0px_0px_2px_0px] shadow-black backdrop-blur-sm py-2 px-3 text-center rounded-full cursor-pointer">GRAPHENE CORNER</a>
    
    
      <a target='_blank' href='https://Cirkel.ai' class="text-white scale-100 hover:scale-105 transition-all font-bold list-none btn shadow-[0px_0px_2px_0px] shadow-black backdrop-blur-sm py-2 px-3 text-center rounded-full cursor-pointer">CIRKEL AI</a>
    
    
      <a target='_blank' href='https://Www.bdblockchain.com' class="text-white scale-100 hover:scale-105 transition-all font-bold list-none btn shadow-[0px_0px_2px_0px] shadow-black backdrop-blur-sm py-2 px-3 text-center rounded-full cursor-pointer">BD BLOCKCHAIN LONDON</a>
    
    
      <a target='_blank' href='https://Www.lanadelpayme.com' class="text-white scale-100 hover:scale-105 transition-all font-bold list-none btn shadow-[0px_0px_2px_0px] shadow-black backdrop-blur-sm py-2 px-3 text-center rounded-full cursor-pointer">LANADELPAYME</a>
    
    </div>
    </nav>
  )
}

export default BottomNavbar