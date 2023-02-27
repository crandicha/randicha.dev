import React from 'react'
import { Icon } from '@material-ui/core'
import clsx from 'clsx'
import { scrollToView } from '../../../utils/window'

const MENUS: { icon: string; target: string }[] = [
  {
    icon: 'home',
    target: 'home',
  },
  {
    icon: 'account_circle',
    target: 'about',
  },
  {
    icon: 'work',
    target: 'work',
  },
  {
    icon: 'phone',
    target: 'contact',
  },
]

interface IMenuProps extends React.HTMLProps<HTMLDivElement> {}

const Menu = ({ children, ...props }: IMenuProps) => {
  return (
    <div className="flex flex-1 items-center justify-center" {...props}>
      <div className="flex w-min cursor-pointer items-center justify-center rounded-full p-2 font-semibold leading-4 text-white hover:scale-110 hover:bg-white hover:text-black active:scale-90 active:bg-opacity-70">
        {children}
      </div>
    </div>
  )
}

const NavButton = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const leftMenu = MENUS?.slice(0, Math.max((MENUS?.length + 1) / 2))
  const rightMenu = MENUS?.slice(Math.max((MENUS?.length + 1) / 2))

  const onClick = (target: string) => {
    scrollToView(target)
    setIsOpen(false)
  }

  return (
    <div
      className={clsx(
        'fixed bottom-5 left-[50%] flex h-[80px] translate-x-[-50%] cursor-pointer items-center justify-center  rounded-full bg-tertiary px-6 py-4 text-black duration-75 ease-in-out',
        isOpen ? 'w-[380px]' : 'w-[80px]'
      )}
    >
      {isOpen &&
        leftMenu?.map(({ icon, target }) => (
          <Menu onClick={() => onClick(target)}>
            <Icon>{icon}</Icon>
          </Menu>
        ))}
      <div
        onClick={() => setIsOpen((val) => !val)}
        className="flex flex-1 items-center justify-center"
      >
        <div
          className={clsx(
            'flex w-min items-center justify-center rounded-full p-2 text-white hover:scale-110 hover:bg-white hover:text-black active:scale-90 active:bg-opacity-70',
            isOpen ? 'bg-secondary text-white' : 'block'
          )}
        >
          <Icon>{isOpen ? 'close' : 'menu'}</Icon>
        </div>
      </div>
      {isOpen &&
        rightMenu?.map(({ icon, target }) => (
          <Menu onClick={() => onClick(target)}>
            <Icon>{icon}</Icon>
          </Menu>
        ))}
    </div>
  )
}

export default NavButton
