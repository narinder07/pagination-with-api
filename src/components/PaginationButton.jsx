import "./PaginationButton.css";
const PaginationButton = ({
  postPerPage,
  userDetails,
  currentPage,
  setCurrentPage,
}) => {
  const pages = [];
  for (let i = 1; i <= Math.ceil(userDetails / postPerPage); i++) {
    pages.push(i);
  }
  const totalPages = Math.ceil(userDetails / postPerPage);

  return (
    <div className="text-center mt-4">
      {currentPage > 1 && (
        <button
          onClick={() => setCurrentPage((prev) => prev - 1)}
          className=" mx-3"
        >
          Prev
        </button>
      )}

      {pages.map((buttonNo, index) => (
        <button
          onClick={() => setCurrentPage(buttonNo)}
          className={buttonNo === currentPage ? "active" : ""}
          key={index}
        >
          {buttonNo}
        </button>
      ))}

      {currentPage < totalPages && (
        <button
          disabled={currentPage === totalPages}
          className=" next mx-3"
          onClick={() => setCurrentPage((next) => next + 1)}
        >
          Next
        </button>
      )}
    </div>
  );
};

export default PaginationButton;
