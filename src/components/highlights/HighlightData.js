import React from 'react'
import styles from "./Highlights.module.css";

function HighlightData() {
  return (
    <div className='d-flex mt-5 container-fluid'>
        <div className={styles.highlights}>
            <div className={styles.left}>
                <div className="leftImg">
                    <img src="https://www.pts.org.tw/HomePage/home_images/event/1663120421f.gif" alt=""
                    className={styles.img} />
                </div>
            </div>
            <div className={styles.right}>
                <h5>Sponsors non-Profit</h5>
                <p>We invite you to support reporters to record the truth</p>
            </div>
        </div>
    </div>
  )
}

export default HighlightData