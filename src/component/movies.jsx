import React, { useState } from "react";
import { getMovies } from "../services/fakeMovieService";
import Heart from "./common/heart";
import Pagination from "./common/pagination";

function Movies() {
  const [item, setMovie] = useState(getMovies());
  const [currentPage, setPage] = useState(1);

  const page = { pageSize: 3 };

  /// handle
  const handleDelete = (id) => {
    const itemList = item.filter((movie) => movie._id !== id);
    setMovie(itemList);
  };

  /// Pages Changing
  const handlePageChange = (paged) => {
    // console.log(page);
    setPage(paged);
  };

  const { length: count } = item;
  return count !== 0 ? (
    <div>
      <h5>The {count} number of Movies in the Databases</h5>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Genre</th>
            <th scope="col">Stock</th>
            <th scope="col">Rate</th>
            <th scope="col">Like</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {item.map((movie) => (
            <tr key={movie._id}>
              <th>{movie.title}</th>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <Heart />
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => handleDelete(movie._id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination
        itemCount={count}
        pageSize={page.pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  ) : (
    <h6>There is No Movie in the List</h6>
  );
}
export default Movies;
