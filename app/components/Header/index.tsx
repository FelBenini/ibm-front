import Link from 'next/link'
import styles from './styles.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/"><h1>Livros</h1></Link>
      <p>por Felipe Benini</p>
    </header>
  )
}

export default Header