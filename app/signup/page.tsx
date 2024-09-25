'use client'

import { BoxDiv, Header } from "../shared/helpers";
import styles  from "../styles.module.css"


function Signup(){
    return (
        <div className={styles.smallContainer} style={{height: '23vw'}}>
    
            <div className ={styles.textContainer}>
                <h1 className={styles.boldText} >
                Login To TriViz
                </h1>
            </div>
    
            <BoxDiv namebox="Username/Email"/>
            <BoxDiv namebox="Password"/>
            <BoxDiv namebox="Confirm Password"/>
    
            <div>
            <button className={styles.button}>
            <h1 className={styles.text}>Login</h1>
            </button>
            </div>
    
            <div className={styles.textContainer}>
            <h1 className={styles.text}>Encounter any Issues? Email me at </h1>
            <h1  className={styles.blueUnderLineText}> amrhuss@umich.edu. </h1>
            </div>
        
        </div>
        );
};


export default function signUpPage(){
    return (
        <div className={styles.gridContainer}> 
            <main>
                
                <Header/>
                <div className={styles.mainBody}>

                <Signup />;
                </div>
            </main>
        </div>
    )
}