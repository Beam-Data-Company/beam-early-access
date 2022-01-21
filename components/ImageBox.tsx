import Image from 'next/image'

type Props = {
  src: StaticImageData
  width: number | undefined
  alt?: string
}

export default function ImageBox(props: Props) {
  return (
    <div style={{ width: props.width }}>
      <Image src={props.src} alt={props.alt} priority />
    </div>
  )
}
