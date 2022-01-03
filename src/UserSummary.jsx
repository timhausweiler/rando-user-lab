import { useState, useEffect } from "react";

function UserSummary(props) {
  const [showMore, setShowMore] = useState(false);

  const handleClick = () => {
    if (showMore === false) {
      setShowMore(true);
    } else {
      setShowMore(false);
    }
  }

  if (props.userData === null) {
    return ( 
      <div>
        There is no user data
      </div>
    );
  } else {
    return (
      <div>
        <p>Name: {props.userData.name.first} {props.userData.name.last}</p>
        <p>Email: {props.userData.email}</p>
        <button onClick={handleClick}>Show more</button>
      </div>);
  }
}

export default UserSummary