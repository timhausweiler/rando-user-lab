function UserSummary(props) {
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
      </div>);
  }
}

export default UserSummary