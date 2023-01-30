import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import PostCard from "../../components/postCard/PostCard";
import styles from './Posts.module.scss'
import Pagination from "../../components/pagination/Pagination";
import Post from "../../types/Post";
import useFetchPosts from "../../hooks/useFetchPost";
import {useState} from "react";
import {pageLimit} from "../../utils/consts";

// const fetchPosts = async () => {
//     try {
//         const res = await axios.get('/api/post?page=3&limit=5')
//         return res.data
//     }catch (e){
//         console.log(e)
//     }
// }

const Posts = () => {
    const [page, setPage] = useState<number>(1)
    const [limit, setLimit] = useState<number>(pageLimit)
    // const { data: posts, isLoading, isFetching } = useQuery<Post[]>({
    //     queryKey: ['posts'],
    //     queryFn: () => fetchPosts()
    // })

    const { data, isLoading, isFetching} = useFetchPosts(['posts', page, limit], page, limit)

    // const pageSelector = useAppSelector(state => state.page)
    //
    // const { currentPage, maximumPostsPerPage } = pageSelector

    // console.log(currentPage)
    if(isLoading)
        return (
            <section className={styles.postsContainerWrapper}>
                <section className="loading"><img src="/loading.gif" alt="Loading..."/></section>
            </section>
        )
    if(!data.posts)
        return (<h2>Error...</h2>)

    return (
        <section className={styles.postsContainerWrapper}>
            <section className={styles.postsContainer}>
                {
                    data.posts.map((post: Post) => (
                        <PostCard key={post.id} {...post} />
                    ))
                }
            </section>

            <section className={styles.pagination}>
                <Pagination
                    page={page}
                    totalPages={data.totalPages}
                    setPage={setPage}
                />
            </section>
        </section>
    )
}

// export const getStaticProps = async () => {
//     const queryClient = new QueryClient()
//
//     await queryClient.prefetchQuery<Post>(['posts'], () => fetchPosts())
//
//     return {
//         props: {
//             dehydratedState: dehydrate(queryClient)
//         }
//     }
// }

export default Posts
