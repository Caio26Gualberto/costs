import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer() {

  function redirectForMyLinkdIn() {
    window.open('https://www.linkedin.com/in/caio-faria-gualberto-50706019a/')
  }

  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li><FaFacebook onClick={redirectForMyLinkdIn} /></li>
        <li><FaInstagram onClick={redirectForMyLinkdIn} /></li>
        <li><FaLinkedin onClick={redirectForMyLinkdIn} /></li>
      </ul>
      <p className={styles.copy_right}><span>Costs</span> &copy; 2023</p>
    </footer>
  )
}

export default Footer