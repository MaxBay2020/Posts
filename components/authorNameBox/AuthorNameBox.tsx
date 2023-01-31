import styles from './authorNameBox.module.scss'

type AuthorNameBox = {
    name: string
}

const AuthorNameBox = ({name}: AuthorNameBox) => {
    return (
        <section className={styles.authorNameContainer}>
            <p className={styles.authorName}>{name}</p>
        </section>
    )
}

export default AuthorNameBox
