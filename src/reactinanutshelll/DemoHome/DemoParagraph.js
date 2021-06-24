import React from 'react'

const DemoParagraph = (props) => {
  console.log('DemoParagraph run')
  return (
    <p>{props.show ? 'Paragraph is ON' : ''}</p>
  )
}

export default React.memo(DemoParagraph)
