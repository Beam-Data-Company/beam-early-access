import React from 'react'
import { useMediaQuery } from 'react-responsive'

type Props = {
  size?: number
  color?: string
  family?: 'Lexend Deca' | 'Assistant' | 'Prompt'
  weight?: number
  lineHeight?: number
  sizePhoneResponsive?: number
  children: React.ReactNode
}

export default function Text(props: Props) {
  const isPhonePortrait = useMediaQuery({ maxWidth: 450 })

  return (
    <span
      style={{
        fontSize:
          isPhonePortrait && props.sizePhoneResponsive
            ? `${props.sizePhoneResponsive}px`
            : props.size && `${props.size}px`,
        color: props.color,
        fontFamily: props.family,
        fontWeight: props.weight,
        lineHeight: props.lineHeight && `${props.lineHeight}px`,
      }}
    >
      {props.children}
    </span>
  )
}
