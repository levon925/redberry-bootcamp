import React from 'react'

function Header() {
  return (
    <header className='flex justify-between h-[100px]'>
        <div className="flex text-center items-center gap-[4px]">
            <div className="font-fredoka font-bold text-[32px] text-purple">Momentum</div>
            <img className='h-[38px]' src={require('../img/Hourglass.png')} alt="" srcset="" width={38} height={38}/>
        </div>
        <div className="flex items-center gap-[40px]">
            <button className='border-[1px] border-purple rounded-[5px] py-[10px] px-[20px] font-firago text-[16px]'>თანამშრომლის შექმნა</button>
            <button className='border-[1px] border-purple rounded-[5px] py-[10px] px-[20px] bg-purple text-[#fff] flex items-center gap-[4px] font-firago'>
            <img className='h-[20px]' src={require('../img/add.png')} alt="" srcset="" width={20} height={20}/>
            შექმენი ახალი დავალება
            </button>
        </div>
    </header>
  )
}

export default Header