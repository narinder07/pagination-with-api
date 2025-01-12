import axios from "axios";
import { useState, useEffect } from "react";
import UserInfoTable from "./components/UserInfoTable";

const App = () => {
  const [userDetails, setUserDetails] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(5);
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = userDetails.slice(firstPostIndex, lastPostIndex);

  // fetching api data
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/users`)
      .then((res) => {
        setUserDetails(res.data.users);
        console.log(res.data.users);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  }, []);

  // Handle Delete User
  const handleDelete = (id) => {
    const userConfirm = confirm(`Are you sure you want to delete this user ?`);
    if (userConfirm) {
      axios
        .delete(`https://dummyjson.com/users/${id}`)
        .then(() => {
          setUserDetails(userDetails.filter((user) => user.id !== id));
        })
        .catch((error) => console.error("Error deleting user:", error.message));
    }
  };

  return (
    <>
      <h1 className="text-center py-5">User Table Data</h1>
      {userDetails.length ? (
        <UserInfoTable
          currentPosts={currentPosts}
          userDetails={userDetails.length}
          postPerPage={postPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          handleDelete={handleDelete}
        />
      ) : (
        <div className="display-4 text-center">Loading API data...</div>
      )}
    </>
  );
};

export default App;
