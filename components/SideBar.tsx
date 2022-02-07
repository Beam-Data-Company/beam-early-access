import styles from './SideBar.module.css'
import Text from './Text'
import Spacer from './Spacer'
import { useMediaQuery } from 'react-responsive'

type Props = {
  contentTitle: string
  contentList: any[]
}

export function generateAnchorID(title: string) {
  // Note: Replace whitespace with `-`
  return title ? title.replace(/\s/g, '-') : title
}

export default function SideBar(props: Props) {
  const isPhonePortrait = useMediaQuery({ maxWidth: 450 })

  return (
    <aside className={styles.container}>
      <Text size={18} weight={600}>
        {props.contentTitle}
      </Text>
      <Spacer height={6} />
      <ul className={styles.content_list}>
        {props.contentList.map((child) => (
          <li key={child.title}>
            <a href={`#${generateAnchorID(child.title)}`}>
              <Text size={14} weight={400}>
                {child.title}
              </Text>
            </a>
            <Spacer height={isPhonePortrait ? 10 : 18} />
          </li>
        ))}
      </ul>
    </aside>
  )
}
