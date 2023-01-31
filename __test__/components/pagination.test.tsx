import { render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Pagination, {PaginationProps} from "@/components/pagination/Pagination";

const MockPagination = ({page, totalPages, limit, setPage}: PaginationProps) => {
    return (
        <Pagination
            page={page}
            totalPages={totalPages}
            limit={limit}
            setPage={setPage}
        />
    )
}

describe('<Pagination /> component testing', () => {
    it('should render left arrow button, right arrow button, page detail with 1/3', () => {
        render(
            <MockPagination
                page={1}
                totalPages={3}
                limit={5}
                setPage={() => {}}
            />
        )
        const leftArrowBtn = screen.getByTestId('left-arrow')
        expect(leftArrowBtn).toBeInTheDocument()

        const rightArrowBtn = screen.getByTestId('right-arrow')
        expect(rightArrowBtn).toBeInTheDocument()

        const pageDetailEle = screen.getByTestId('page-detail')
        expect(pageDetailEle).toBeInTheDocument()
        expect(pageDetailEle.textContent).toBe('1/3')
    })
})
