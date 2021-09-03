import { useMediaQuery } from 'react-responsive'

type Props = {
  height: number
  heightPhoneResponsive?: number
}

export default function Spacer(props: Props) {
  const isPhonePortrait = useMediaQuery({ maxWidth: 450 })

  return (
    <div
      style={{
        height:
          isPhonePortrait && props.heightPhoneResponsive
            ? `${props.heightPhoneResponsive}px`
            : `${props.height}px`,
      }}
    ></div>
  )
}
