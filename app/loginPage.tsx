import "./globals.css";
import styles from "./styles.module.css";

export function loginPage(){
    return (
        <div className={styles.gridContainer}> 
            <main>
                <div className={styles.header}></div>
                <div className={styles.mainBody}>

                <div className={styles.smallContainer}>
                    <button className={styles.button}>
                        <h1 className={styles.text}>Sign Up</h1>
                        </button>
                </div>
                </div>
            </main>
        </div>
    )
}