import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Capsules() {
  const API = "https://api.spacexdata.com/v4/capsules";

  const [capsules, setCapsules] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;

  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;

  const nPages = Math.ceil(capsules.length / recordsPerPage);

  const numbers = [...Array(nPages + 1).keys()].slice(1);
  console.log(numbers);

  const fetchCapsulesApiData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setCapsules(data);
    } catch {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCapsulesApiData(API);
  }, []);

  const prePage = () => {
    if (currentPage !== firstIndex) {
      setCurrentPage(currentPage - 1);
    }
  };
  const nextPage = () => {
    if (currentPage !== lastIndex) {
      setCurrentPage(currentPage + 1);
    }
  };
  const changeCPage = (id) => {
    setCurrentPage(id);
  };

  return (
    <div className="h-screen bg-blue-200">
      <section className="py-10">
        <h1 className="heading text-center mb-10">Capsules</h1>
        <Link to={"/"} className="px-5">
          &larr; Back Here
        </Link>
        <div className="max-w-md mx-auto py-5">
          <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
            <div className="grid place-items-center h-full w-12 text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <input
              className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
              type="text"
              id="search"
              placeholder="Search here..."
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div>
          {capsules.length > 0 && (
            <div className=" max-width grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-5">
              {capsules
                .slice(firstIndex, lastIndex)
                // .slice(page * 3 - 3, page * 3)
                .filter((item) => {
                  return search.toLowerCase() === ""
                    ? item
                    : item.type.toLowerCase().includes(search);
                })
                .map(
                  ({
                    id,
                    type,
                    status,
                    serial,
                    launches,
                    last_update,
                    land_landings,
                    water_landings,
                    reuse_count,
                  }) => {
                    return (
                      <article key={id} className="articles">
                        <h1 className="text-xl font-bold mb-5">
                          {type},{" "}
                          <span className="text-base opacity-75 font-light">
                            {serial}
                          </span>
                        </h1>
                        <ul>
                          <li className="mb-1">{launches.length} launches</li>
                          <li className="mb-1">{land_landings} land landing</li>
                          <li className="mb-1">
                            {water_landings} water landing
                          </li>
                          <li className="mb-1">Reused {reuse_count} times</li>
                          {status === "active" ? (
                            <li className="text-emerald-500">Active</li>
                          ) : (
                            <li className="text-rose-500">Retrived</li>
                          )}
                        </ul>
                        <p className="mt-5 opacity-76 ">{last_update}</p>
                      </article>
                    );
                  }
                )}
            </div>
          )}
        </div>
      </section>
      <nav aria-label="Page navigation">
        <ul className="flex items-center justify-center">
          <li>
            <button
              onClick={prePage}
              className="h-10 px-5 text-indigo-600 transition-colors duration-150 bg-white rounded-l-lg focus:shadow-outline hover:bg-indigo-100"
            >
              Prev
            </button>
          </li>
          {numbers.map((n) => {
            return (
              <li className={` ${currentPage === n ? "active" : ""}`} key={n}>
                <button
                  onClick={() => changeCPage(n)}
                  className="h-10 px-5 text-black transition-colors duration-150 hover:bg-indigo-600 focus:shadow-outline"
                >
                  {n}
                </button>
              </li>
            );
          })}

          <li>
            <button
              onClick={nextPage}
              className="h-10 px-5 text-indigo-600 transition-colors duration-150 bg-white rounded-r-lg focus:shadow-outline hover:bg-indigo-100"
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Capsules;
