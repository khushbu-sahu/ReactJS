import React from 'react'
import styles from './PassingData.module.css'

function PassingData(props) {
  return (
    <>
    <div className={styles.box}>
        {props.children}

    </div>
    </>
  )
}

export default PassingData
