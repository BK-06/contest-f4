import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function Profile() {
  const user = useSelector(state=>state.user);
    // hbingley1
    // CQutx25i8r
    const data = Object.entries(user || {}).map(e => {
      return (<p>{e[0]}: {e[1]}</p>)
    })
    console.log(data);
    return user ? (
      <div>
        <p>Welcome to Profile</p>
        {data}
        {/* <p>name: {user.name}</p> */}
      </div>
    ) : null;
  }