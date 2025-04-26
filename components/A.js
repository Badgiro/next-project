import styles from '../styles/A.module.css'
import Link from 'next/link'

const A = ({text, href}) => {
  return (
    <Link className={styles.link} href={href}>{text}</Link>
  )
}

export default A