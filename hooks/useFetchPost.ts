import {useQuery} from "@tanstack/react-query"
import api from "../axios/api";

const useFetchPosts = (queryIdentifier: any[], page = 1, limit: number) => {

    const url = `/post?page=${page}&limit=${limit}`

    const fetchPosts = async () => {
        const res = await api.get(url)
        return res.data
    }

    return useQuery(queryIdentifier, fetchPosts, {
        refetchOnWindowFocus: false,
        staleTime: 1000 * 60 * 60,
        refetchInterval: 1000 * 60 * 60,
        keepPreviousData: true,
        onError: (e) => {
            console.log(e)
        }
    })

}

export default useFetchPosts
