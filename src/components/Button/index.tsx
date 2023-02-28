import clsx from 'clsx'

import styles from './index.module.css'

interface IButtonProps extends React.HTMLProps<HTMLButtonElement> {
  color?: 'primary' | 'secondary' | 'tertiary' | 'white'
  variant?: 'fill' | 'ghost'
  fullWidth?: boolean
}

const Button = ({
  children,
  className,
  color = 'white',
  variant = 'fill',
  fullWidth,
  ...props
}: IButtonProps) => {
  const classes = clsx(
    styles.button,
    styles[color],
    styles[variant],
    fullWidth ? styles.fullWidth : '',
    className
  )
  return (
    <button className={classes} {...props} type="button">
      {children}
    </button>
  )
}

export default Button
