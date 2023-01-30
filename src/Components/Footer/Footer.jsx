import React from 'react'
import styles from './Footer.module.css'
import {ReactComponent as Dogs} from '../../Assets/dogs-footer.svg'
function Footer() {
  return (
    <footer className={styles.footer}>
      <Dogs/>
      <p>Dogs. alguns diretiros reservados</p>
    </footer>
  )
}

export default Footer