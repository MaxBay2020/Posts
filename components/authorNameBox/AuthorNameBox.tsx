import styles from './authorNameBox.module.scss'


const AuthorNameBox = ({name}) => {
    return (
        <section className={styles.authorNameContainer}>
            <p className={styles.authorName}>{name}</p>
        </section>
    )
}

export default AuthorNameBox
