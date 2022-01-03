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
        <h1>Random user</h1>
        <h2>This is a random user:</h2>
        <p>Name: {props.userData.name.first} {props.userData.name.last}</p>
        <p>Email: {props.userData.email}</p>


        {showMore && 
          <div><p>Street: {props.userData.location.street.name} {props.userData.location.street.number}</p>
            <p>City: {props.userData.location.city}</p>
            <p>State: {props.userData.location.state}</p>
            <p>Username: {props.userData.login.username}</p></div>
        }

        <button onClick={handleClick}>Show more</button>
      </div>);
  }
}

export default UserSummary