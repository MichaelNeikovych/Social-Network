import React, {useState} from "react";
import style from "./Pagination.module.css";

const Pagination = ({totalUsersCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
  const pagesCount = Math.ceil(totalUsersCount / pageSize);
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) pages.push(i);

  const portionCount = Math.ceil(pagesCount / portionSize);
  const [portionNumber, setPortionNumber] = useState(1);
  const leftPortionNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionNumber = portionNumber * portionSize;

  return (
      <div className={style.pagination}>
        {<button disabled={portionNumber > 1 ? false : true} onClick={() => setPortionNumber(portionNumber-1)}>prev</button>}

        {pages
          .filter(p => p >= leftPortionNumber && p<=rightPortionNumber)
          .map(p => {
          return <span className={currentPage === p && style.selected}
                       onClick={() => onPageChanged(p)}>{p}</span>
        })}

        {<button disabled={portionCount > portionNumber ? false : true} onClick={() => setPortionNumber(portionNumber+1)}>next</button>}
      </div>
  )
}

export default Pagination;