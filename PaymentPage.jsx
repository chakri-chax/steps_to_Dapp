import React, { useState } from 'react';
import { ethers } from 'ethers';
import './App.css';

const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3'; 

function App() {
  const [fee, setFee] = useState("0");
  

  const handlefeeChange = (e) => {
    setAmount(e.target.value);
  };

  const handleRecipientChange = (e) => {
    setRecipient(e.target.value);
  };

  const handleTransfer = async () => {
    if (typeof window.ethereum !== 'undefined') {
      await window.ethereum.enable();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, abi, signer);
      await contract.transfer(recipient, { value: ethers.utils.parseEther(amount) });
      alert('Transfer successful!');
    } else {
      alert('Please install MetaMask to use this DApp.');
    }
  };

  return (
    <div className="App">
      <h1>Ethereum Transfer DApp</h1>
      <input type="number" value={fee} onChange={handlefeeChange} placeholder="fee" />
     
      <button onClick={handleTransfer}>Transfer</button>
    </div>
  );
}

export default App;