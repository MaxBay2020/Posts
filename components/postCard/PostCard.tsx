import styles from './PostCard.module.scss'
import {formatDate} from '../../utils/utils'
import Avatar from "../avatar/Avatar";
import Post from "../../types/Post";

const PostCard = (props: Post) => {
    const { id, title, authors, comments, createdAt, description, updatedAt } = props

    return (
        <article className={styles.cardContainer}>
            <section className={styles.titleAndUpdatedTime}>
                <h1 className={styles.cardTitle}>{title}</h1>
                <p data-testid='updatedTime' className={styles.updatedTime}>{formatDate(createdAt)}</p>
            </section>

            <section className={styles.avatarContainer}>
                {
                    authors.map((author, index) => (
                        <Avatar offset={index} key={author.id} {...author} />
                    ))
                }
            </section>

            <p data-testid='description' className={styles.cardDesc}>{description}</p>
        </article>
    )
}

export default PostCard
