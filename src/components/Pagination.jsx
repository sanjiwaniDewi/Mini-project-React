import "../style/components.css";

const Pagination = ({ currentPage, total, handlePagination }) => {
    const pages = [];
    for (let index = 1; index <= total; index++) {
        pages.push(
            <button
                disabled={currentPage === index ? true : false}
                onClick={() => handlePagination(index)}
                key={index}
            >
                {index}
            </button>
        );
    }

    return (
        <div className="pagination">
            <div className="pagination-button">{pages}</div>
        </div>
    );
};

export default Pagination;
