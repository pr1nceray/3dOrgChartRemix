
import "../globals.css";
import { useState } from 'react';
import styles from "../styles.module.css";

export function Header(){
    return (
            <div className={styles.header}>
                <h1 className={styles.headerTextLarger}>
                    Triviz
                    </h1>
                <h1 className={styles.headerText}> About us </h1>
                <h1 className={styles.headerText}> Sample </h1>
                <a className={styles.headerText}
                href="https://github.com/pr1nceray/3dOrgChartRemix"
                target="_blank">
                     Github </a>
            </div>
    );
}

export function BoxDiv({namebox} : {namebox:string}) {
    const [inputValue, setInputValue] = useState('');
    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

      
    return (
    <div style={{width: '22vw', margin: '10px'}} >
    
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
