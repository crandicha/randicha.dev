export function scrollToView(targetElement: string, offset = 0) {
  const element = document.getElementById(targetElement)
  const elementPosition = element?.getBoundingClientRect?.()?.top

  if (elementPosition) {
    const offsetPosition = elementPosition + window.pageYOffset - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    })
  }
}
