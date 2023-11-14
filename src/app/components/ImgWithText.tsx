'use client'

import { useEffect, useState } from 'react';

import styles from '../page.module.css';

const ImgWithText = () => {
  const [active, setActive] = useState(false)
  return (
    <div className={styles.imgTxtWraped}>
      {active ? <a href='#' className={styles.imgTxtActive} onMouseLeave={() => setActive(false)}>View more</a> : <h2 className={styles.imgTxt}>ala ma kota i psa i coś tammmm</h2>}
      <img onMouseEnter={()=>setActive(true)} src='./soapLanding.jpg' alt='soap' className={active ? styles.imageZoom : styles.image}></img>
    </div>
  )
}

export default ImgWithText
