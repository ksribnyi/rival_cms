import React from "react";
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
    return (
        <div className="Pagination__block">
            <button
                onClick={prevPage}
                className={`Pagination__block__item ${page === 1 && "disabled__button"}`}
            >
                &larr;
            </button>
            <button
                onClick={() => setPage(1)}
                className={`Pagination__block__item ${page === 1 && "active__button"}`}
            >
                1
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
                onClick={() => setPage(totalPages)}
                className={`Pagination__block__item ${page === totalPages && "active__button"}`}
            >
                {totalPages}
            </button>
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