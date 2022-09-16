import React from 'react'
import TeslaLogo from '../assets/teslaLogoSmall.svg'
import Image from 'next/image'

function Header() {
  return (
    <div>
        <div>
            <Image src={TeslaLogo} alt = "tesla logo" height="15" width ="80"/>
        </div>
    </div>
  )
}

export default Header