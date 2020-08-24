import React from "react";
import Pagination from "./Pagination";
import User from "./User";

const Users = (props) => {
  return (
    <React.Fragment>
      {
        props.users.map(u => <User user={u}
                                   follow={props.follow}
                                   unfollow={props.unfollow}
                                   followingInProgress={props.followingInProgress}/>)
      }
      <Pagination currentPage={props.currentPage}
                  totalUsersCount={props.totalUsersCount}
                  pageSize={props.pageSize}
                  onPageChanged={props.onPageChanged}/>
    </React.Fragment>
  )
}

export default Users;