import React, { useState, useEffect } from 'react'
import { Button, Icon } from '../ui'

const ScrollUpButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  const toggleVisibility = () => {
    setIsVisible(window?.scrollY > 100)
  }

  const scrollToTop = () => {
    window?.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return isVisible && (
    <Button
      onClick={scrollToTop}
      size='icon'
      className='fixed bottom-4 right-5 animate-up z-50'
    >
      <Icon name='arrow_upward' />
    </Button>
  )
}

export { ScrollUpButton }
