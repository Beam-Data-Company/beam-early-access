import { useSpring } from 'react-spring'

export function useFadeIn({
  entering,
  delayTime,
}: {
  entering: boolean
  delayTime: number
}) {
  const fadeIn = useSpring({
    to: { opacity: entering ? 1 : 0 },
    from: { opacity: entering ? 0 : 1 },
    config: { tension: entering ? 120 : 200 },
    delay: entering ? delayTime : 0,
  })

  return fadeIn
}
