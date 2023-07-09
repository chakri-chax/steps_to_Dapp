import React, { useState } from "react";
import QR from "./images/QR.png";
import { ethers } from "ethers";
import { useEffect } from "react";
import load1 from './images/load1.gif'
import tick from './images/tick.gif'

const TransationQr = () => {
  let [transactionState, setTransactionState] = useState(0);
  const images = [QR,load1,tick];
  const [msg,setMsg] = useState("0xa7886958a25079228836fB0f8AbcF13E6b08e24A")
  
  const [pic,setPic] = useState(images[0])
  
  
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));
  const handleTransaction = async () => {
    if (typeof window.ethereum !== "undefined") {
      await window.ethereum.enable();

      const provider = new ethers.providers.Web3Provider(window.ethereum);

      const initialBalance = await provider.getBalance(
        "0xa7886958a25079228836fB0f8AbcF13E6b08e24A"
      );
      const formatedInitialBalance = ethers.utils.formatEther(initialBalance);
      console.log("formatedInitialBalance", formatedInitialBalance);

      while (transactionState === 0) {
        const updatedBalance = await provider.getBalance(
          "0xa7886958a25079228836fB0f8AbcF13E6b08e24A"
        );
        const formatedUpdatedBalance = ethers.utils.formatEther(updatedBalance);
        const difference = formatedUpdatedBalance - formatedInitialBalance;
        console.log("formatedupdatedBalance", formatedUpdatedBalance);
        console.log("Differnce", difference);

        await delay(2000);
        console.log("Waiting..");

        if (difference >= 0.009) {
            setPic(images[1]);
            setMsg("Transaction Loading")
            console.log("Transaction Done");
            await delay(4000)
            setMsg("Transaction Done ✔")
            setPic(images[2])
         
          break;
        } else {
          console.log("Transaction not yet done");
        }
        setTransactionState(1);
        
      }
    } else {
      alert("Please Install Metamask");
    }
  };
  useEffect(() => {
    handleTransaction();
  }, [transactionState]);

  return (
    <div className="App">
      
      <h1>Transaction Page</h1>

      <img
        src={pic}
        alt="0xa7886958a25079228836fB0f8AbcF13E6b08e24A"
        style={{ width: "150px", height: "150px" }}
      /><br/>
    

    <div><br/>
        {
           
       {msg}?<strong>{msg}</strong>:""
        }
    </div>

</div>
      
  );
};

export default TransationQr;
