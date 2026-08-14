function User_list({user}) {
  return (
    <div>
      <h1>This is User_List page</h1>

      {user.map((userData) => (
        <p key={userData.id}>{userData.name}</p>
      ))}
    </div>
  );
}

export default User_list;