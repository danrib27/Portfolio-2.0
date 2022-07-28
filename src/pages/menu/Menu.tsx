import orbital from '../../assets/svg/orbital_icons.svg'
import styles from './index.module.scss'

export function Menu() {
    return(
        <div>
            <img id={styles.orbital} src={orbital} />
            <p id={styles.codeApresentation}>
                <a className={`${styles.textRegular} ${styles.textRegularPink}`}>const </a><a className={`${styles.textBold} ${styles.textBoldPurple}`}>DanielDuarte</a><a className={`${styles.textRegular} ${styles.textRegularPink}`}>:</a><a className={`${styles.textBold} ${styles.textBoldCian}`}> Developer </a><a className={`${styles.textRegular} ${styles.textRegularPink}`}>=</a> <a className={styles.textRegular}>&#123;</a><br /><a className={styles.textRegular}>&emsp;type:</a><a className={styles.textBold}> "Full-Stack"</a><a className={styles.textRegular}>,</a><br /><a className={styles.textRegular}>&emsp;language:</a><a className={styles.textBold}> "Typescript"</a><br /><a className={styles.textRegular}>&#125;</a>
            </p>
      </div>
    )
}