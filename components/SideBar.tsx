import styles from './SideBar.module.css'
import Text from './Text'
import Spacer from './Spacer'
import { useMediaQuery } from 'react-responsive'
import classNames from 'classnames'

type Props = {
  contentTitle: string
  contentList: any[]
  isFaq?: boolean
  isThai?: boolean
}

export function generateAnchorID(title: string) {
  // Note: Replace whitespace with `-`
  return title ? title.replace(/\s/g, '-') : title
}

export default function SideBar(props: Props) {
  const isPhonePortrait = useMediaQuery({ maxWidth: 450 })

  return (
    <aside
      className={classNames(styles.container, props.isFaq && styles.sticky)}
    >
      <Text
        size={18}
        weight={600}
        family={props.isThai ? 'IBM Plex Sans Thai' : 'Assistant'}
      >
        {props.contentTitle}
      </Text>
      <Spacer height={props.isFaq ? 24 : 6} />
      <ul className={styles.content_list}>
        {props.contentList.map((child) => (
          <li key={child.title}>
            <a href={`#${generateAnchorID(child.title)}`}>
              <Text
                size={14}
                weight={400}
                family={props.isThai ? 'IBM Plex Sans Thai' : 'Assistant'}
              >
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
