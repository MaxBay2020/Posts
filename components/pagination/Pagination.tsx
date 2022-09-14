import styles from './pagination.module.scss'
import {useState} from "react";
import {useDispatch} from "react-redux";
import {gotoPage} from "../../features/pageSlice";


const Pagination = ({currentPage, totalPage}) => {
    const dispatch = useDispatch()

    const handlePrevPage = () => {
        if(currentPage > 1){
            dispatch(gotoPage(currentPage - 1))
        }
    }

    const handleNextPage = () => {
        if(currentPage < totalPage){
            dispatch(gotoPage(currentPage + 1))
        }

    }

    return (
        <section className={styles.pageContainer}>
            <button onClick={()=>handlePrevPage()}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button>

            <p className={styles.pageText}>{currentPage}/{totalPage}</p>

            <button onClick={()=>handleNextPage()}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>

        </section>
    )
}

export default Pagination
