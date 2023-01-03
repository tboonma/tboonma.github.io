import React from 'react'

interface ReadMoreProp {
  children: string
  className: string
}

const ReadMore = ({ children, className }: ReadMoreProp) => {
  return <div className={className}>{children}</div>
}

export default ReadMore
