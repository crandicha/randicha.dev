import clsx from 'clsx'

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'filled' | 'plain'
}

const Button = ({
  children,
  className,
  variant = 'filled',
  ...props
}: IButtonProps) => {
  const classes = clsx(
    'inline-flex items-center justify-center gap-2 rounded-full font-medium transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/40 active:scale-[0.98]',
    variant === 'filled' &&
      'bg-accent px-6 py-3 text-white hover:bg-[#0077ed] dark:bg-accent-dark dark:hover:bg-[#147ce5]',
    variant === 'plain' &&
      'text-accent hover:underline dark:text-accent-dark',
    className
  )
  return (
    <button className={classes} {...props} type="button">
      {children}
    </button>
  )
}

export default Button
