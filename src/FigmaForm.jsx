import React from "react";
import "./Figma.css";
import logo from './images/pngwing.png'
import booksTree from './images/bookTree.png'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ethers } from "ethers";

import abi from './abis/libraryV3.json'
 const FigmaForm = () => {

  const [studentId,setStudentId] = useState("")
  const [studentName,setStudentName] = useState("")
  const [bookId,setBookId] =useState("")
  const [bookName,setBookName]= useState("")
  const [buttonText,setButtonText] = useState("Borrow Book")

  const [people,setPeople] = useState([])


  const handleSubmit=async(e)=>
      {
          e.preventDefault()
          const person = {id:new Date().getTime().toString(),
                          studentId,studentName,bookId,bookName}
          const exportPerson = {studentId,studentName,bookId,bookName}
      
          console.log("Details",exportPerson.studentId);

          const contractAddress = '0x7DbEEBDE6bE26E36fC9b1484d5902849F5e6d1c2'
          const contractABI = abi;
          const provider = new ethers.providers.Web3Provider(window.ethereum)
          const signer = provider.getSigner()
          const contract = new ethers.Contract(contractAddress,contractABI,signer)
          const Borrow = await contract.Borrow(exportPerson.studentId,exportPerson.studentName,exportPerson.bookId,exportPerson.bookName);

          await Borrow.wait()
          

         

              
          setPeople((people)=>{
                  return [...people,person]
          })     
      }

      const handleData = ()=>{
        setStudentId("")
        setStudentName("")
        setBookId("")
       setBookName("")
      }



  let navigate = useNavigate();

  const handleHome =()=>
  {
    let path = `/`
    navigate(path);
  }
  const handleConnect=async()=>
    {
      let path  = `/Connect`
      navigate(path)
    }
    const hadleSignUp =()=>{
      let path = `/signUp`
      navigate(path)

    }
    const handleBorrow =()=>{
      let path = `/Borrow`
      navigate(path);
    }
    const handleStore =()=>{
      let path = `/MyBooks`
      navigate(path);
    }
    const handlePayFee =()=>{
      let path = `/MyBooks/TransactionQr`
      navigate(path);
    }
   


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
          <button onClick={handleHome} className="h-1">Home</button>
          <button onClick={handleBorrow}  className="text-wrapper-2">Borrow</button>
          <button onClick={handleStore} className="text-wrapper-3">Store</button>
          <button onClick={handlePayFee} className="text-wrapper-4">Pay Fee</button>
          <button  className="text-wrapper-5">Library Claw</button> 
        </div>
        <div className="overlap">
          <div className="form-wrapper">
            <div className="overlap-wrapper">
              {/* <div className="overlap-2">
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
              </div> */}

<div >

<form className='my-form'  onSubmit={handleSubmit}>
{/* <h1 className = 'h1'align="center" >Details</h1> */}
    <div>
        <label htmlFor='Student ID :'> <strong>Student ID :</strong> </label>
        <input placeholder='180001' type='text' onChange={(e)=>{setStudentId(e.target.value)}} value={studentId}/> <br/>
    </div>
    <div>
        <label htmlFor='Student Name :'><strong>Student Name :</strong> </label>
        <input placeholder='Alice' type='text' onChange={(e)=>{setStudentName(e.target.value)}} value={studentName}/><br/>
    </div>
    <div>
        <label htmlFor='Book Id :'><strong>Book ID :</strong></label>
        <input placeholder='"Nx2234Vk"' type='text' onChange={(e)=>{setBookId(e.target.value)}} value={bookId}/><br/>
    </div>
  
    <div>
        <label htmlFor='Book Name :'><strong>Book Name :</strong></label>
        <input placeholder='"Harry Potter"' type='text' onChange={(e)=>{setBookName(e.target.value)}} value={bookName}/><br/>
    </div>
    
   <br/>
    

   <div class="center">
        <button onClick={handleData}>{buttonText}</button>
    </div>








    
</form>
{/* ************************************************ Recent Borrowings **************************************** */}
{/* <h1 align="center" >Recent Borrowings </h1> */}

{/* <div class="grid-container">
    
    {

        people.map((person)=>{
            const {id,studentId,studentName,bookId,bookName} = person;
            return (
                <div className="result-box">
                
                <div key={id}>
                    <h2>Student Id : {studentId}</h2>
                    <h4>Stundent Name :{studentName}</h4>
                    <h4>Book Id    :{bookId}</h4>                           
                    <h4>Book Name :{bookName}</h4>
                </div>
            </div>
            )
        })
    }
</div> */}
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