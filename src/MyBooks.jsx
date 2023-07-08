import React from "react";
import { useState, useEffect } from "react";
import abi from "./abis/libraryV3.json";
import { ethers } from "ethers";
import './Form.css'
const MyBooks = () => {
  const [books, setBooks] = useState([]);
  const [studentId, setStudentId] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();

    const contractAddress = "0x7DbEEBDE6bE26E36fC9b1484d5902849F5e6d1c2";
    const contractABI = abi;
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, contractABI, signer);
    let i = 1;
    while (i) {
      const myBook = await contract.GetDetails(studentId, i);
      const length = parseInt(myBook.bookSerial, 16);

      const _name = await myBook.studentName;

      const _bookId = myBook.bookId;
      const _bookName = myBook.bookName;

      const book = { id: parseInt(myBook.bookSerial, 16), _bookName, _bookId };

      setBooks((books) => {
        return [...books, book];
      });

      if (i <= length) {
        i++;
      } else {
        break;
      }
    }
  };

  return (
    <>
      
      <form className="my-form" onSubmit={handleSubmit}>
        <h1 className="h1" align="center">
          Get Deatils
        </h1>
        <div>
          <label htmlFor="Student ID :">
            {" "}
            <strong>Student ID :</strong>{" "}
          </label>
          <input
            placeholder="N180001"
            type="text"
            onChange={(e) => {
              setStudentId(e.target.value);
            }}
            value={studentId}
          />{" "}
          <br />
        </div>
        

        <br />

        <div class="center">
          <button>My Books</button>
        </div>
      </form>
        <div>
          
      <h1 align = 'center'><span></span> Hi,<strong>{studentId}</strong></h1>
          
      <div class="grid-container">

      {books.map((book) => {
        const { id, _bookId, _bookName } = book;
        return (
          
          <div className="result-box">
            <div key={id}>
              <h4>Book Id :{_bookId}</h4>
              <h4>Book Name :{_bookName}</h4>
            </div>
          </div>
        );
      })}
      </div>
        
      </div>
    </>
  );
};

export default MyBooks;
