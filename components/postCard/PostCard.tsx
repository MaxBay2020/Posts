import styles from './PostCard.module.scss'
import {formatDate} from '../../utils/utils'
import Avatar from "../avatar/Avatar";

const PostCard = (props: { id: string; title: string; authors: string; comments: string; createdAt: string; description: string; updatedAt: string; }) => {
    const { id, title, authors, comments, createdAt, description, updatedAt } = props

    return (
        <article className={styles.cardContainer}>
            <section className={styles.titleAndUpdatedTime}>
                <h1 className={styles.cardTitle}>{title}</h1>
                <p className={styles.updatedTime}>{formatDate(createdAt)}</p>
            </section>

            <section className={styles.avatarContainer}>
                {
                    authors.map((author, index) => (
                        <Avatar index={index} key={author.id} {...author} authorsNumber={authors.length} />
                    ))
                }
            </section>

            <p className={styles.cardDesc}>{description}</p>
        </article>
    )
}

export default PostCard
