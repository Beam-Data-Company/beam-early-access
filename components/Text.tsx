import React from 'react'

type Props = {
  size?: number
  color?: string
  family?: 'Lexend Deca' | 'Assistant' | 'Prompt'
  children: React.ReactNode
}

export default function Text(props: Props) {
  return (
    <span
      style={{
        fontSize: `${props.size}px`,
        color: props.color,
        fontFamily: props.family,
      }}
    >
      {props.children}
    </span>
  )
}
