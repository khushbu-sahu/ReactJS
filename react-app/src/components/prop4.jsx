import React from 'react'
import styles from './prop4.module.css'

function Prop4({ Shopitem, buybtn, handleBuyBtn }) {
  // let {Shopitem} = props

  const BuyBtn = (event) => {
    console.log(event);

    console.log(`${Shopitem} buy`);

  }

  return (
    <>
      <div className={styles.divv}>
        <li className={` list-group-item ${buybtn && "list-group-item list-group-item-warning"}`}>
         {Shopitem}

          <button onClick={handleBuyBtn} className={styles.btn}>Buy</button>

        </li>
      </div>
    </>
  )
}

export default Prop4
