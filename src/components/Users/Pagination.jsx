import React from "react";
import style from "./Pagination.module.css";

const Pagination = (props) => {
  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) pages.push(i);

  return (
    <React.Fragment>
      <div className={style.pagination}>
        {pages.map(p => {
          return <span className={props.currentPage === p && style.selected}
                       onClick={() => props.onPageChanged(p)}>{p}</span>
        })}
      </div>
    </React.Fragment>
  )
}

export default Pagination;