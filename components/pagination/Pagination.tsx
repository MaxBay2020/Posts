import styles from './pagination.module.scss'
import {Dispatch, SetStateAction} from "react";

type PaginationProps = {
    page: number,
    totalPages: number,
    setPage: Dispatch<SetStateAction<number>>
}

const Pagination = ({page, totalPages, setPage}: PaginationProps) => {

    const handlePrevPage = () => {
        if(page > 1){
            setPage(page - 1)
        }
    }

    const handleNextPage = () => {
        if(page < totalPages){
            setPage(page + 1)
        }
    }

    return (
        <section className={styles.pageContainer}>
            <button onClick={()=>handlePrevPage()}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button>

            <p className={styles.pageText}>{page}/{totalPages}</p>

            <button onClick={()=>handleNextPage()}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>

        </section>
    )
}

export default Pagination
