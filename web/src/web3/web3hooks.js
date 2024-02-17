import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { notification } from 'antd';
import { ConnectButton, useAccountInfo, useParticleConnect, useConnectKit, useParticleProvider } from '@particle-network/connect-react-ui';
import { Avalanche } from '@particle-network/chains';

const App = () => {
  const { account, particleProvider } = useAccountInfo();
  const [address, setAddress] = useState();
  const [accounts, setAccounts] = useState("");
  const [contractData, setContractData] = useState("");
  let contract;

  const connectContract = async () => {
    const Address = "0x0988033De05B4D13300fB74Ec2A0F66a5b84978b";
    const ABI = []; // Replace [] with your contract's ABI
    const provider = new ethers.providers.Web3Provider(particleProvider, 'any');
    const signer = provider.getSigner();
    contract = new ethers.Contract(Address, ABI, signer);
    console.log(contract.address);
  }

  const getData = async () => {
    // Implement logic to retrieve data from the contract
  }

  const changeData = async () => {
    // Implement logic to change data on the contract
  }

  return (
    <div>
      {/* Place your UI components here */}
    </div>
  );
}

export default App;
