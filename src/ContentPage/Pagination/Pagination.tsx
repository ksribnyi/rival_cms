import React, {useEffect} from "react";
import "./Pagination.css"

const Pagination = ({
                        nextPage,
                        prevPage,
                        page,
                        gaps,
                        setPage,
                        totalPages
                    }: {
    nextPage: any,
    prevPage: any,
    page: number,
    gaps: any,
    setPage: any,
    totalPages: number,
}) => {
    useEffect(()=> {

    },[gaps])
    return (
        <div className="Pagination__block">
            <button
                onClick={prevPage}
                className={`Pagination__block__item ${page === 1 && "disabled__button"}`}
            >
                &larr;
            </button>
            {gaps.before ? "..." : null}
            {gaps.paginationGroup.map((el: any) => (
                <button
                    onClick={() => setPage(el)}
                    key={el}
                    className={`Pagination__block__item ${page === el ? "active__button" : ""}`}
                >
                    {el}
                </button>
            ))}
            {gaps.after ? "..." : null}
            <button
                onClick={nextPage}
                className={`Pagination__block__item ${page === totalPages && "disabled__button"}`}
            >
                &rarr;
            </button>
        </div>
    )
}

export default Pagination