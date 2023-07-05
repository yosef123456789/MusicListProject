import React from 'react'
import styles from './style.module.css';

function Grid({ header, body, lb }) {
  return (
    <div className={styles.container_grid}>
      <div className={styles.h}>
        {header}
      </div>
      <div className={styles.b}>
        {body}
      </div>
      <div className={styles.lb}>
        {lb}
      </div>
    </div>
  )
}

export default Grid