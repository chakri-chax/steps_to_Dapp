import React from "react";
import "./Figma.css";
import logo from './images/pngwing.png'

 const FigmaTransactions = () => {
  return (
    <div className="transaction-page">
      <div className="div">
        <div className="overlap">
          <div className="group">
            <div className="overlap-group">
              <div className="overlap-group-wrapper">
                <div className="overlap-group-2">
                  <div className="rectangle" />
                  <p className="student-ID">
                    Student ID : N180491
                    <br />
                    Student Name : Chakri
                    <br />
                    Book ID : ApP12564
                    <br />
                    Book Name : Design
                    <br />
                    Transaction Hash :0xaFc..........e24A
                  </p>
                </div>
              </div>
              <div className="overlap-wrapper">
                <div className="student-ID-wrapper">
                  <p className="student-ID-n">
                    Student ID : N180491
                    <br />
                    Student Name : Chakri
                    <br />
                    Book ID : ApP12564
                    <br />
                    Book Name : Design
                    <br />
                    Transaction Hash :0xaFc..........e24A
                  </p>
                </div>
              </div>
              <div className="group-2">
                <div className="student-ID-wrapper">
                  <p className="student-ID-n">
                    Student ID : N180491
                    <br />
                    Student Name : Chakri
                    <br />
                    Book ID : ApP12564
                    <br />
                    Book Name : Design
                    <br />
                    Transaction Hash :0xaFc..........e24A
                  </p>
                </div>
              </div>
            </div>
            <h1 className="text-wrapper">Recent Transactions</h1>
          </div>
        </div>
        <div className="connect">
          <div className="div-wrapper">
            <div className="text-wrapper-2">CONNECT</div>
          </div>
        </div>
        <div className="navbar">
          <img className="pngwing" alt="Pngwing" src={logo} />
          <div className="text-wrapper-3">Home</div>
          <div className="text-wrapper-4">Borrow</div>
          <div className="text-wrapper-5">Store</div>
          <div className="text-wrapper-6">Contact</div>
          <div className="text-wrapper-7">Library Claw</div>
        </div>
        <div className="group-3">
          <div className="overlap-2" />
        </div>
        <div className="group-4">
          <img className="form" alt="Form" src="form.png" />
          <div className="group-5">
            <img className="book" alt="Book" src="book4-1.png" />
            <div className="text-wrapper-8">Applied Physics</div>
            <div className="text-wrapper-9">A.K.JHA</div>
          </div>
          <div className="group-6">
            <img className="img" alt="Book" src="image.png" />
            <div className="text-wrapper-8">Applied Physics</div>
            <div className="text-wrapper-9">A.K.JHA</div>
            <div className="group-7">
              <img className="book" alt="Book" src="book4-1-2.png" />
              <div className="text-wrapper-8">Applied Physics</div>
              <div className="text-wrapper-9">A.K.JHA</div>
              <div className="group-8">
                <img className="book" alt="Book" src="book4-1-3.png" />
                <div className="text-wrapper-8">Applied Physics</div>
                <div className="text-wrapper-9">A.K.JHA</div>
              </div>
            </div>
          </div>
          <div className="group-9">
            <img className="book" alt="Book" src="book4-1-4.png" />
            <div className="text-wrapper-8">Applied Physics</div>
            <div className="text-wrapper-9">A.K.JHA</div>
          </div>
          <div className="group-10">
            <img className="img" alt="Book" src="book4-1-5.png" />
            <div className="text-wrapper-8">Applied Physics</div>
            <div className="text-wrapper-9">A.K.JHA</div>
            <div className="group-7">
              <img className="book" alt="Book" src="book4-1-6.png" />
              <div className="text-wrapper-8">Applied Physics</div>
              <div className="text-wrapper-9">A.K.JHA</div>
              <div className="group-8">
                <img className="book" alt="Book" src="book4-1-7.png" />
                <div className="text-wrapper-8">Applied Physics</div>
                <div className="text-wrapper-9">A.K.JHA</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};export default FigmaTransactions;
