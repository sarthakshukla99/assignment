import React from 'react'
import styles from "./Times.module.css";

function Times() {
  return (
    <div className={`container mt-4 ${styles.timesContainer}`}>
        <div className={`${styles.left}`}>
            <div className="data">
                <div className="img">
                    <img src="https://www.pts.org.tw/HomePage/_images/title_pts.jpg" alt="" />
                </div>
                <div className="time1" style={{color:"blue"}}>22:00 <span style={{color:"grey"}}>Madagascar is n</span></div>
                <div className="time1" style={{color:"blue"}}>23:00 <span style={{color:"grey"}}>Return to the crim</span></div>
            </div>
        </div>
        <div className={`${styles.center}`}>
        <div className="data">
                <div className="img">
                    <img src="https://www.pts.org.tw/HomePage/_images/title_pts2.jpg" alt="" />
                </div>
                <div className="time1" style={{color:"orange"}}>22:00 <span style={{color:"grey"}}>Madagascar is n</span></div>
                <div className="time1" style={{color:"orange"}}>23:00 <span style={{color:"grey"}}>Return to the crim</span></div>
            </div>
        </div>
        <div className={`${styles.right}`}>
        <div className="data">
                <div className="img">
                    <img src="https://www.pts.org.tw/HomePage/_images/title_pts3.jpg" alt="" />
                </div>
                <div className="time1" style={{color:"red"}}>22:00 <span style={{color:"grey"}}>Madagascar is n</span></div>
                <div className="time1" style={{color:"red"}}>23:00 <span style={{color:"grey"}}>Return to the crim</span></div>
            </div>
        </div>
    </div>
  )
}

export default Times