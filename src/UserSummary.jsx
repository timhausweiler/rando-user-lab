function UserSummary(prop) {
    if (prop.name === null) {
      return (console.log("there is no user data"));
    } else {
      return (console.log(prop.name));
    }
}

export default UserSummary