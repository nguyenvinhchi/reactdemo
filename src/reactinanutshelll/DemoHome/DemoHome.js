import React, { useCallback, useState } from 'react'
import DemoParagraph from './DemoParagraph'
import Button from '../UI/Button'

const DemoHome = () => {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log('DemoHome run')

  const toggleHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  }

  return (
    <div>
      <h1>Demo react DOM</h1>
      <DemoParagraph show={showParagraph} />
      <Button onClick={allowToggleHandler}>Allow Toggle</Button>
      <Button onClick={toggleHandler}>Toggle Paragraph!</Button>
    </div>
  )
}

export default DemoHome
