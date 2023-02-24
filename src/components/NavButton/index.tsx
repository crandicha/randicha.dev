import clsx from 'clsx'
import React from 'react'
import { Icon } from '@material-ui/core'

interface NavButtonProps {}

const NavButton = (props: NavButtonProps) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const onClick = () => {
    document.body.dataset.nav = isOpen ? 'false' : 'true'
    setIsOpen(!isOpen)
  }
  return (
    <div
      className={clsx(
        'fixed bottom-10 left-[50%] flex h-12 w-12 translate-x-[-50%] cursor-pointer items-center justify-center rounded-full text-white transition hover:scale-110 active:scale-90',
        isOpen ? 'bg-primary' : 'bg-secondary'
      )}
      onClick={onClick}
    >
      <Icon className="text-white">{isOpen ? 'close' : 'menu'}</Icon>
    </div>
  )
}

export default NavButton
