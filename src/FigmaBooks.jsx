import React, { useEffect, useState } from "react";
import "./Figma.css";
import { GoogleBooksAPI } from "google-books-js";
import logo from "./images/pngwing.png";
import physics from "./images/physics.jpg";
import searchLogo from "./images/search.png";
import { useNavigate } from "react-router-dom";

const FigmaBooks = () => {
  const [search, setSearch] = useState("");
  const [id, setId] = useState("");
  let navigate = useNavigate();
  const handleHome = () => navigate(`/`);
  const handleRead = () => navigate(`/Book`);
  const handleStore = () => navigate(`/MyBooks`);
  const handleBorrow = () => navigate(`/Borrow`);
  const handleTransactions = () => navigate(`/MyBooks/TransactionQr`);

  const [data, setData] = useState([]);
  const api = new GoogleBooksAPI({
    key: "AIzaSyCJH3VI8VhqeMJWUi3Sup1e_2gHWiux_BI",
  });

  async function fetchBooks() {
    const books = await api.search({
      filters: {
        title: search,
        maxResults: 2,
      },
    });

    const data = books.items;

    setData(data);
    // console.log("data", data);
  }

  useEffect((e) => {
    // e.preventDefault()

    console.log("search", search);
  }, []);

  const [img, setImg] = useState(physics);
  const [title, setTitle] = useState("Applied Physics");
  const [author, setAuthor] = useState("A.K JHA");
  const [pages, setPages] = useState("506");
  const [reviews, setReviews] = useState("NA");
  const [plot, setPlot] = useState("Not Available");

  const handleSearch = (evt) => {
    if (evt.key === "Enter") {
      fetchBooks();
      console.log("Hello");
      setSearch("");
    }
  };

  return (
    <div className="books">
      {/* <button
        onClick={() => {
          fetchBooks();
        }}
      >
        Search
      </button>
      <h1>Books</h1> */}

      <div className="div">
        <div className="overlap">
          <div className="overlap-group">
            <div className="booksbox">
              <div className=" Books">
                <div class="grid-container">
                  {data?.map((book) => (
                    <div key={book.id}>
                      {/* {console.log(book.id)} */}

                      <div className="partialGrid">
                        <img
                          className="grid-container"
                          src={
                            book.volumeInfo.imageLinks &&
                            book.volumeInfo.imageLinks.smallThumbnail
                          }
                        />
                      </div>

                      <h3>
                        Title <br /> {book.volumeInfo.title}
                      </h3>
                      <h4>Author : {book.volumeInfo.authors}</h4>

                      <button
                        onClick={() => {
                          setId(book.id);
                          setAuthor(book.volumeInfo.authors);

                          setTitle(book.volumeInfo.title);
                          setPages(book.volumeInfo.pageCount);
                          setReviews();
                          setImg(
                            book.volumeInfo.imageLinks &&
                              book.volumeInfo.imageLinks.smallThumbnail
                          );
                          setPlot(book.volumeInfo.description);
                        }}
                        class="w3-btn w3-white w3-border w3-round-large"
                      >
                        Preview
                      </button>
                      {console.log("ID : ", id)}
                      {console.log("author : ", author)}
                      {console.log("title : ", title)}
                      {console.log("image : ", img)}
                      {console.log("description : ", plot)}
                      {console.log("Pages : ", pages)}
                      {console.log("reviews : ", reviews)}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="search">
              <div className="overlap-3">
                {/* <div className="text-wrapper-5">Search</div> */}
                <input
                  className="text-wrapper-5"
                  placeholder="   Enter your BOOK here"
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyDown={handleSearch}
                />{" "}
                <br />
                <img className="search-2" alt="Search" src={searchLogo} />
              </div>
            </div>
          </div>
          <div className="about-book">
            <h1 className="h-1">About the Book</h1>
            <img className="book-3" alt="Book" src={img} />
            <div className="text-wrapper-6">{title}</div>
            <div className="text-wrapper-7">{author}</div>
            <div className="review-box">
              <img className="line" alt="Line" src="line-2.svg" />
              <div className="page">
                <div className="overlap-group-2">
                  <div className="text-wrapper-8">{pages}</div>
                  <div className="text-wrapper-9">pages</div>
                </div>
              </div>
              <div className="rev">
                <div className="overlap-group-2">
                  <div className="text-wrapper-8">19K</div>
                  <div className="text-wrapper-9">reviews</div>
                </div>
              </div>
            </div>
            <div className="text-wrapper-10">Description</div>
            <p className="p">
              <br />
              {plot}
            </p>
            <button className="connect">
              <div className="div-wrapper">
                <button onClick={handleRead} className="text-wrapper-11">
                  Read
                </button>
              </div>
            </button>

            <button className="connect1">
              <div className="div-wrapperBorrow">
                <button onClick={handleBorrow} className="text-wrapper-11">
                  Borrow
                </button>
              </div>
            </button>
          </div>
        </div>
        <div className="overlap-group-wrapper">
          <div className="overlap-group-3">
            <div className="text-wrapper-12">CONNECT</div>
          </div>
        </div>
        <div className="navbar">
          <img className="pngwing" alt="Pngwing" src={logo} />
          <button onClick={handleHome} className="text-wrapper-13">
            Home
          </button>
          <button onClick={handleBorrow} className="text-wrapper-14">
            Borrow
          </button>
          <button onClick={handleStore} className="text-wrapper-15">
            Store
          </button>
          <button onClick={handleTransactions} className="text-wrapper-16">
            Transactions
          </button>
          <button className="text-wrapper-17">Library Claw</button>
        </div>
      </div>
    </div>
  );
};//delete
export default FigmaBooks; 
