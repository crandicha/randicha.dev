import React from 'react'
import { toast } from 'react-toastify'
import Button from '../Button'
import { downloadResume } from '../../../utils/resume'

const SavePdfResume = () => {
  const [isGenerating, setIsGenerating] = React.useState(false)

  const onSavePdf = async () => {
    if (isGenerating) return
    setIsGenerating(true)
    try {
      await downloadResume()
    } catch {
      toast("Couldn't generate the PDF. Please try again.", {
        closeButton: false,
      })
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <Button
      variant="plain"
      type="button"
      disabled={isGenerating}
      aria-busy={isGenerating}
      className="disabled:cursor-wait disabled:opacity-50"
      onClick={onSavePdf}
    >
      Download résumé ›
    </Button>
  )
}

export default SavePdfResume
