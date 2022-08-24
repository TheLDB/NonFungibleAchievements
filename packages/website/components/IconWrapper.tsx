import styles from '../styles/IconWrapper.module.css'

const IconWrapper = () => {
    return (
        <div className={styles.root}>
            <img className={styles.cube} src="/cube.png" />
            <img className={styles.rectangle} src="/rectangle.png" />
            <img className={styles.pill} src="/pill.png" />
        </div>
    )
}

export default IconWrapper;