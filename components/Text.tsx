import React from 'react'

type Props = {
  size?: number
  color?: string
  family?: 'Lexend Deca' | 'Assistant' | 'Prompt'
  weight?: number
  children: React.ReactNode
}

export default function Text(props: Props) {
  return (
    <span
      style={{
        fontSize: props.size && `${props.size}px`,
        color: props.color,
        fontFamily: props.family,
        fontWeight: props.weight,
      }}
    >
      {props.children}
    </span>
  )
}