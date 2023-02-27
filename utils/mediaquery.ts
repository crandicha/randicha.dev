import { useMediaQuery } from 'react-responsive'

type ScreenKeysType = 'sm' | 'md' | 'lg' | 'xl' | '2xl'

export type useGetMediaQueryReturnType = ScreenKeysType | 'default'

const screens = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
}
export const useGetMediaQuery: () => useGetMediaQueryReturnType = () => {
  const currentMediaQuery = Object.keys(screens).reduce((acc, key) => {
    const minWidth = screens[key as ScreenKeysType]
    acc = useMediaQuery({ query: `(min-width: ${minWidth})` }) ? key : acc
    return acc
  }, 'default') as useGetMediaQueryReturnType
  return currentMediaQuery
}
