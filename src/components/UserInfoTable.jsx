import PaginationButton from "./PaginationButton";
const UserInfoTable = ({
  currentPosts,
  userDetails,
  postPerPage,
  currentPage,
  setCurrentPage,
  handleDelete,
}) => {
  return (
    <>
      <div className="table-responsive">
        <table className="table table-bordered border-dark ">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Email Address</th>
              <th scope="col">State,City</th>
              <th scope="col">Phone</th>
              <th scope="col">Delete User</th>
            </tr>
          </thead>
          <tbody>
            {currentPosts.map((user) => (
              <tr key={user.id}>
                <th scope="row">{user.id}</th>
                <td>{`${user.firstName}`}</td>
                <td>{user.email}</td>
                <td>{`${user.address.city}, ${user.address.state}`}</td>
                <td>{user.phone}</td>
                <td>
                  <button
                    className="bg-danger text-white"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <PaginationButton
        userDetails={userDetails}
        postPerPage={postPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default UserInfoTable;
