export interface IOpenWhatsappProps {
  number: string
  text?: string
}

export const getWhatsappUrl = ({ number, text }: IOpenWhatsappProps) => {
  const urlEncodedText = encodeURIComponent(text || '')
  return `https://wa.me/${number}${text ? `?text=${urlEncodedText}` : ''}`
}
