import React from "react";
import "./Figma.css";
import logo from './images/pngwing.png'
import booksTree from './images/bookTree.png'

 const FigmaForm = () => {
  return (
    <div className="form">
      <div className="div">
        <div className="connect">
          <div className="overlap-group">
            <div className="text-wrapper">CONNECT</div>
          </div>
        </div>
        <div className="navbar">
          <img className="pngwing" alt="Pngwing" src={logo} />
          <h1 className="h-1">Home</h1>
          <div className="text-wrapper-2">Borrow</div>
          <div className="text-wrapper-3">Store</div>
          <div className="text-wrapper-4">Contact</div>
          <div className="text-wrapper-5">Library Claw</div>
        </div>
        <div className="overlap">
          <div className="form-wrapper">
            <div className="overlap-wrapper">
              <div className="overlap-2">
                <div className="text-wrapper-6">Name of the student</div>
                <div className="rectangle" />
                <div className="text-wrapper-7">Book Name</div>
                <div className="rectangle-2" />
                <div className="text-wrapper-8">Branch</div>
                <div className="text-wrapper-9">Student ID</div>
                <div className="rectangle-3" />
                <div className="text-wrapper-10">Book ID</div>
                <div className="rectangle-4" />
                <div className="rectangle-5" />
                <div className="buttons">
                  <div className="overlap-group-wrapper">
                    <div className="overlap-group">
                      <div className="text-wrapper">Borrow</div>
                    </div>
                  </div>
                  <div className="div-wrapper">
                    <div className="overlap-group">
                      <div className="text-wrapper">Revert</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="left-discription">
            <div className="overlap-3">
              <div className="connect-wallet">
                <div className="ellipse" />
                <div className="text-wrapper-11">Connect Wallet</div>
              </div>
              <div className="fillform">
                <div className="ellipse-wrapper">
                  <div className="ellipse-2" />
                </div>
                <div className="text-wrapper-12">Fill the form</div>
              </div>
              <div className="connect-wallet-2">
                <div className="ellipse" />
                <div className="text-wrapper-11">Borrow book</div>
              </div>
              <div className="connect-wallet-3">
                <p className="text-wrapper-11">Return the book in time</p>
                <div className="ellipse" />
              </div>
              {/* <img className="line" alt="Line" src="line-1.svg" /> */}
              <div className="ellipse-3" />
            </div>
            <img className="img" alt="Pngwing" src={booksTree} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default FigmaForm;