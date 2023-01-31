import styles from './pagination.module.scss'
import {Dispatch, SetStateAction} from "react";
import {useRouter} from "next/router";

export type PaginationProps = {
    page: number,
    limit: number,
    totalPages: number,
    setPage: Dispatch<SetStateAction<number>>
}

const Pagination = ({page, totalPages, setPage, limit}: PaginationProps) => {

    const router = useRouter()

    const handlePrevPage = () => {
        if(page > 1){
            setPage(page - 1)
            router.push(`http://localhost:3000/posts/?page=${page - 1}&limit=${limit}`, undefined, { shallow: true });
        }
    }

    const handleNextPage = () => {
        if(page < totalPages){
            setPage(page + 1)
            router.push(`http://localhost:3000/posts/?page=${page + 1}&limit=${limit}`, undefined, { shallow: true });

        }
    }

    return (
        <section className={styles.pageContainer}>
            <button onClick={()=>handlePrevPage()}>
                <svg data-testid='left-arrow' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button>

            <p data-testid='page-detail' className={styles.pageText}>{page}/{totalPages}</p>

            <button onClick={()=>handleNextPage()}>
                <svg data-testid='right-arrow' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>

        </section>
    )
}

export default Pagination
