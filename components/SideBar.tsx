import styles from './SideBar.module.css'
import Text from './Text'
import Spacer from './Spacer'
import { useMediaQuery } from 'react-responsive'

type Props = {
  title: string
  contentTitle: any[] 
}
export default function SideBar(props: Props) {
  const isPhonePortrait = useMediaQuery({ maxWidth: 450 })

  return (
    <aside className={styles.container}>
      <Text size={18} weight={600}>
        {props.title}
      </Text>
      <Spacer height={24} />
      <ul className={styles.content_list}>
      {props.contentTitle.map((obj) => (
        <li key={obj.title}>
          <a href={`#${obj.title}`}>
            <Text size={14} weight={400}>
              {obj.title}
            </Text>
          </a>
          <Spacer height={isPhonePortrait ? 10 : 18} />
        </li>
        ))
      }
      </ul>
    </aside>
  )
}
