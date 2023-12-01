import React from 'react'

import { LOGO, SECTION_BACKGROUND } from '@/assets/images'
import Image from 'next/image'
import Link from 'next/link'

const Header: React.FC = () => {

  const sectionBackgroundStyle: React.CSSProperties = {
    background: `url(${SECTION_BACKGROUND})`,
  }
  return (
    <div>
      <nav className='navbar main-container' style={sectionBackgroundStyle}>
        <div className='navbar-start'>
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost lg:hidden'>
              <Image
                src={LOGO}
                alt='Menu Icon'
              />
            </label>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
            >
              <li>Contact</li>
            </ul>
          </div>
          <Link href={'/'}>
            <Image
              src={LOGO}
              alt='Menu Icon'
            />
          </Link>
        </div>

        <div className='navbar-end'>
          <div className='hidden lg:flex'>
            <ul className='menu menu-horizontal px-1'>
              <li>Contact</li>
            </ul>
          </div>

          <li>Contact</li>
        </div>
      </nav>

    </div>
  )
}

export default Header
