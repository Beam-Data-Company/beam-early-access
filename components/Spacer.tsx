type Props = {
  height: number
}

export default function Spacer(props: Props) {
 
  return (
    <div
      style={{
        height: `${props.height}px`,
      }}
    ></div>
  )
}
