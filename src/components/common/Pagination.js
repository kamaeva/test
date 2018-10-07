import React from 'react';

const Pagination = ({ pageChange, lastPage} ) => {
    const pageNumbers = [];
    for (let i = 1; i <= lastPage; i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          key={number}
          id={number}
          onClick={pageChange}
        >
          {number}
        </li>
      );
    });
    return(
        <ul className="pagination">
            {renderPageNumbers}
        </ul>
    );
}

export default Pagination;