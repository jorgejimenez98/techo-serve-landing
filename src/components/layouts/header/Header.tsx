import React from 'react'

import { LOGO } from '@/assets/images'
import Image from 'next/image'

const Header: React.FC = () => {
  return (
    <div>
      <Image src={LOGO} alt='logo' />
      Header
    </div>
  )
}

export default Header
