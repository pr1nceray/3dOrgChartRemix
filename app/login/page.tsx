'use client'

import { BoxDiv, Header } from "../shared/helpers";
import styles from "../styles.module.css";


function Login(){
    return (
    <div className={styles.smallContainer}>

        <div className ={styles.textContainer}>
            <h1 className={styles.boldText} >
            Login To TriViz
            </h1>
        </div>

        <BoxDiv namebox="Username/Email"/>
        <BoxDiv namebox="Password"/>

        <div>
        <button className={styles.button}>
        <h1 className={styles.text}>Login</h1>
        </button>
        </div>

        <div className={styles.textContainer}>
        <h1 className={styles.text}>Dont Have an Account? Sign up</h1>
        <a  
            className={styles.blueUnderLineText}
            href={"/signup/"}> 
            
            Here
             </a>
        </div>
    
    </div>
    );
};


export default function loginPage(){
    return (
        <div>
            <main>
                <Header />
                <div className={styles.mainBody}>

                <Login />;
                </div>
            </main>
        </div>
    )
}