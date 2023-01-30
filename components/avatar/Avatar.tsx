import styles from './avatar.module.scss'
import AuthorNameBox from "../authorNameBox/AuthorNameBox";
import {useState} from "react";
import { getInitials} from "../../utils/utils";
import Image from 'next/image'
import Author from "../../types/Author";

type AvatarProps = Author & {
    offset: number
}

const Avatar = (props: AvatarProps ) => {
    const { avatar, createdAt, id, name, postId, updatedAt, offset } = props
    const [showAuthorNameBox, setShowAuthorNameBox] = useState(false);
    const [avatarFailed, setAvatarFailed] = useState(false);

    const leftOffset = (offset * 25) + 'px'

    const handleDisplayAuthorInfo = () => {
        setShowAuthorNameBox(prev => !prev)
    }

    const renderInitials = () => (
        <article  className={styles.avatarCircle}
                  onMouseEnter={()=>handleDisplayAuthorInfo()}
                  onMouseLeave={()=>handleDisplayAuthorInfo()}
        >
            <h2 className={styles.authorInitials}>{getInitials(name)}</h2>
            {
                showAuthorNameBox && <AuthorNameBox name={name} />
            }
        </article>
    )

    const handleImage = () => {
        setAvatarFailed(true)
    }

    const renderAvatar = () => (
        <Image
            onError={()=>handleImage()}
            src={avatar}
            // src='https://uploads-ssl.webflow.com/61e71726f2743e17b3bc85d4/62cd80ce4c6e984513721c5b_Group%20(1).svg'
            alt={name}
            width={200}
            height={200}
        />
    )

    return (

        <section className={styles.authorContainerWrapper} style={{left: leftOffset}}>
            {
                avatarFailed ? renderInitials() : renderAvatar()
            }




        </section>
    )
}


export default Avatar
