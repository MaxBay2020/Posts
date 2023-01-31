import { dehydrate, QueryClient } from '@tanstack/react-query'
import PostCard from "../../components/postCard/PostCard";
import styles from './Posts.module.scss'
import Pagination from "../../components/pagination/Pagination";
import Post from "../../types/Post";
import useFetchPosts from "../../hooks/useFetchPost";
import {useState} from "react";
import {pageLimit} from "../../utils/consts";
import {useRouter} from "next/router";
import api from "../../axios/api";

const Posts = () => {
    const router = useRouter()
    const [page, setPage] = useState(parseInt(router.query.page as string) || 1)
    const [limit, setLimit] = useState<number>(pageLimit)


    const { data, isLoading, isFetching} = useFetchPosts(['posts', page, limit], page, limit)

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
                    limit={limit}
                    totalPages={data.totalPages}
                    setPage={setPage}
                />
            </section>
        </section>
    )
}

const getServerSideProps = async (context: { query: { page: string; limit: string }; }) => {
    const { page: pageStr, limit: limitStr } = context.query
    console.table({pageStr, limitStr})
    if(!pageStr || !limitStr){
        return {
            props: {

            }
        }
    }

    const page = +pageStr
    const limit = +limitStr
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery(
        ["characters", page, limit],
        async () => {
            const res = await api.get(`/post/?page=${page}&limit=${limit}`)
            return res.data
        }
    )
    return {
        props: {
            dehydratedState: dehydrate(queryClient)
        }
    }
}

export default Posts
