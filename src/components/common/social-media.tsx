import React from 'react'
import { Flex } from '../layouts'
import { Link } from '../ui'
import { LINKEDIN, TWITTER } from '@/assets/images'
import Image from 'next/image'

const SocialMedia: React.FC = () => {
  const links = [
    { icon: LINKEDIN, url: '#' },
    { icon: TWITTER, url: '#' },
  ]

  return (
    <Flex justify='center' className='space-x-0 lg:justify-start'>
      {links.map((link, idx) => (
        <Link
          key={idx}
          to={link.url}
          target='_self'
          className='btn btn-circle'
        >
          <Image
            src={link.icon}
            alt={`image-${idx}`}
            width={20}
            height={20}
          />
        </Link>
      ))}
    </Flex>
  )
}

export { SocialMedia }
