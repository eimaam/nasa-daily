import React from 'react'
import { MoonLoader } from 'react-spinners';
import styles from "../styles/loader.module.css"

export const Loader = () => {


  return (
    <div className={styles.loader}>
        <MoonLoader />
    </div>
  )
}
