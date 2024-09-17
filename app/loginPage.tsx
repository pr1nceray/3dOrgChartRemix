'use client'

import "./globals.css";
import { useState } from 'react';
import styles from "./styles.module.css";


function BoxDiv({namebox} : {namebox:string}) {
    const [inputValue, setInputValue] = useState('');
    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

      
    return (
    <div>
    
    <div className={styles.textContainer}>
        <h1 className={styles.text}> {namebox}</h1>
    </div>
    
    <input className={styles.inputField}
        value={inputValue}
        onChange={handleChange}
        placeholder={`Enter a ${namebox}`}> 
    </input>
    
    </div>
    
)
}

function Signup(){
    return (
    <div className={styles.smallContainer}>
        <div>

        </div>
        <button className={styles.button}>
        <h1 className={styles.text}>Sign Up</h1>
        </button>
    </div>
    );
};


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
        <h1  className={styles.blueUnderLineText}>Here </h1>
        </div>
    
    </div>
    );
};


export function loginPage(){
    return (
        <div className={styles.gridContainer}> 
            <main>
                <div className={styles.header}></div>
                <div className={styles.mainBody}>

                <Login />;
                </div>
            </main>
        </div>
    )
}