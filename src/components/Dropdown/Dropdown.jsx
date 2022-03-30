import { useState } from 'react';
import styles from "./Dropdown.module.css";

const Dropdown = ({children, cta}) => {

    const [isOpen, setIsOpen] = useState(false);
    console.log(isOpen);

    const toggleVisibility = () => {
        setIsOpen((prev)=>!prev);
    }

  return (
    <div className={`${styles.dropdownCta}`} onClick={toggleVisibility}>
        <span>{cta}</span>
        {isOpen && 
        <div className={`${styles.dropdownChildren}`}>
            {children}
        </div> 
        }
        
    </div>
  )
}

export default Dropdown