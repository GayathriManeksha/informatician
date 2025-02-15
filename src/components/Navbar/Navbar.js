import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import uploadicon from "../../assets/logos/add.webp";
import { searchBooks } from "../../utils/searchBooks";
import NavItems from "./NavItems/NavItems.js";
import "./Navbar.css";
function handleSubmit(event) {
  event.preventDefault(); // Prevent the default form submission
  event.target.elements.q.value = "";
}
export default function Navbar(props) {
  const [clicked, setClicked] = useState(false);
  const [books, setBooks] = useState([]);
  const location = useLocation();

  const handleOptionClick = () => {
    setClicked(false);
  };
  const search = async (e) => {
    try {
      const result = await searchBooks(e.target.value);
      result.length > 0 && setBooks(result.slice(0, 5));
    } catch (err) {
      throw err;
    }
  };

  return (
    <nav className="rounded-t-none fixed-top box-shadow: 0 4px 6px -1px" style={{ background: props.theme === "dark" ? "#001229" : "#eff6ff" }}>
      <Link to="/" className="logo">
        <img
          src="https://user-images.githubusercontent.com/33249782/240937486-d84c477d-63f4-4558-ae04-454d803a5b1f.png"
          className=" h-11 w-15 ml-8  hover:shadow "
          alt="Informatician logo" style={{ filter: props.theme === "dark" ? "invert(1)" : "" }}
        />
      </Link>

      <div className="mobile-nav">
        <NavItems
          clicked={clicked}
          location={location}
          handleOptionClick={handleOptionClick}
          drawer={true}
          theme={props.theme}
        />
      </div>
      <div className="desktop-nav">
        <NavItems
          clicked={clicked}
          location={location}
          handleOptionClick={handleOptionClick}
          theme={props.theme}
        />
      </div>
      <div className="flex search-container search-web-view align-items-center">
        <Link to="/addBooks" className="flex">
          <img
            src={uploadicon}
            alt="upload icon"
            className="h-8 mr-3 text-bold  hover:font-bold hover:shadow-md self-center  "
            style={{ filter: props.theme === "dark" ? "invert(1)" : "" }}
          />
        </Link>
        <div>
          <form className="search-bar m-0" onSubmit={handleSubmit}>
            <input type="text" placeholder="search" name="q" onChange={search} className="text-black" />
            <button type="submit">
              <i className="fa-solid fa-search"></i>
            </button>
          </form>
          <div className="w-52 bg-gray-100 absolute mx-auto px-2">
            {books.length > 0 &&
              books.map((book, index) => (
                <div
                  className="flex justify-center items-center p-3 border-b-4 my-2 transition duration-200 hover:bg-gray-300"
                  key={index}
                >
                  <h1>{book?.volumeInfo.title}</h1>
                </div>
              ))}
          </div>
        </div>
        <button onClick={props.toggleTheme} className="mr-8">
          {props.theme === "light" ?
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
            </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            </svg>
          }
        </button>
      </div>
      <div id="mobile">

        <button onClick={props.toggleTheme} className="mr-8">
          {props.theme === "light" ?
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
            </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            </svg>
          }
        </button>
        {/* <div class="form-check form-switch mx-2" onClick={props.toggleTheme} >
          <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
          <label class="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
        </div> */}

        {/* <i
          id="bar"
          className={`${clicked ? "fa-solid fa-times" : "fa-sharp fa-solid fa-bars-staggered"} ${props.theme === "dark" ? "text-white" : "text-dark"}`}
          onClick={() => setClicked(!clicked)}
        ></i> */}

        {/* Custom Navbar */}

        <div id="bar" onClick={() => setClicked(!clicked)}>
          <div id={`${clicked ? "cross-up" : "bar-up"}`}></div>
          <div id={`${clicked ? "cross-mid" : "bar-mid"}`} style={{ "opacity": clicked ? "0" : "100%" }}></div>
          <div id={`${clicked ? "cross-down" : "bar-down"}`}></div>
        </div>
      </div>

    </nav>
  );
}
