import PaginationButton from "./PaginationButton";
const UserInfoTable = ({
  currentPosts,
  userDetails,
  postPerPage,
  currentPage,
  setCurrentPage,
}) => {
  return (
    <>
      <table className="table table-bordered border-dark ">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email Address</th>
            <th scope="col">State,City</th>
            <th scope="col">Phone</th>
            <th scope="col">Edit Info</th>
          </tr>
        </thead>
        <tbody>
          {currentPosts.map((user) => (
            <tr key={user.id}>
              <th scope="row">{user.id}</th>
              <td colSpan={1}>{`${user.firstName}`}</td>
              <td colSpan={1}>{user.email}</td>
              <td
                colSpan={1}
              >{`${user.address.city}, ${user.address.state}`}</td>
              <td colSpan={1}>{user.phone}</td>
              <td colSpan={1}>
                <button>View</button>
                <button className="mx-3 bg-success text-white">Edit</button>
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
