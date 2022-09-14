import { dehydrate, QueryClient, useQuery } from 'react-query'
import axios from 'axios'
import PostCard from "../../components/postCard/PostCard";
import styles from './Posts.module.scss'
import {useSelector} from "react-redux";
import {sortPostsByCreatedTime} from "../../utils/utils";
import Pagination from "../../components/pagination/Pagination";

type PostData = {
    title: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    id: string;
    authors: [
        {
            createdAt: string;
            name: string;
            avatar: string;
            updateAt: string;
            id: string;
            postId: string;
        }
    ],
    comments: [
        {
            createdAt: string;
            title: string;
            description: string;
            updatedAt: string;
            id: string;
            postId: string;
        }
    ]
}

const getPostsData = async () => {
    try {
        const res = await axios.get('https://6144e843411c860017d256f0.mockapi.io/api/v1/posts')
        if(res.status === 200)
            return res.data
    }catch (e){
        console.log(e)
    }
}

const Posts = () => {
    const { data:posts, isLoading, isFetching } = useQuery<PostData>('posts', getPostsData)
    const pageSelector = useSelector(state => state.page)

    const { currentPage, maximumPostsPerPage } = pageSelector

    // console.log(currentPage)
    if(!posts)
        return (<h2>No data!</h2>)

    return (
        <section className={styles.postsContainerWrapper}>
            <section className={styles.postsContainer}>
                {
                    sortPostsByCreatedTime(posts).slice((currentPage - 1) * maximumPostsPerPage, (currentPage - 1) * maximumPostsPerPage + maximumPostsPerPage).map(post => (
                        <PostCard key={post.id} {...post} />
                    ))
                }
            </section>

            <section className={styles.pagination}>
                <Pagination currentPage={currentPage} totalPage={Math.ceil(posts.length / maximumPostsPerPage)} maximumPostsPerPage={maximumPostsPerPage}  />
            </section>
        </section>
    )
}

export const getStaticProps = async () => {
    const queryClient = new QueryClient()

    await queryClient.prefetchQuery<PostData>('posts', getPostsData)

    return {
        props: {
            dehydratedState: dehydrate(queryClient)
        }
    }
}

export default Posts
