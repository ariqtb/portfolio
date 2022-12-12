import React from 'react'

import styles from '../styles'

export default function Container(props) {
    return (
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                {props.children}
            </div>
        </div>
    )
}
