"use client"
import React from 'react'
import { ConnectWallet,darkTheme,} from "@thirdweb-dev/react"

function Header() {
  return (
    <div className='absolute h-[100px] w-full flex justify-end  items-center'>
      <div className='mr-10'>
   
        <ConnectWallet
        theme={darkTheme({
          colors: {
            accentButtonText: "#ededef",
            primaryButtonBg: "#7ab89d",
            primaryButtonText: "#ededef",
          },
        })}
        modalSize={"wide"} />
        </div>
   </div>
  )
}

export default Header