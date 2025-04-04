// import React from 'react'

type Props = {
    title:string;
}

function Title({title}: Props) {
  return (
    <h4 className="text-primary-foreground mb-4">
    {title}
  </h4>
  )
}

export default Title