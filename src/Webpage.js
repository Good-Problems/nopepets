import "./App.css";
import Header from "./components/Header";
import tokenABI from "./abi/tokenABI";
import nftABI from "./abi/nftABI";
import { useState } from "react";

function Webpage() {
  const [planet, setPlanet] = useState("universe");
  const [points, setPoints] = useState(0);
  const [balance, setBalance] = useState(0);
  const [petNum, setPetNum] = useState(0);
  const [petInfo, setPetInfo] = useState("");
  const { ethers } = require("ethers");
  const provider = new ethers.providers.JsonRpcProvider(
    "https://data-seed-prebsc-1-s1.binance.org:8545/"
  );
  let privateKey =
    "0x0e44c6a6e4ba80e7673962f60ef1317d89f33dd9f3b6b9520f732cedd0fd1737";
  let wallet = new ethers.Wallet(privateKey, provider);

  let tokenAddress = "0x9835bA13508B342964e5511511028A1f5ACa77b5";
  let nftAddress = "0x460c0946d7e60335deFB449C409CCFf310b140a3";
  let tokenContract = new ethers.Contract(tokenAddress, tokenABI, wallet);
  let nftContract = new ethers.Contract(nftAddress, nftABI, wallet);
  let bal;
  let num;

  async function init() {
    bal = await tokenContract.balanceOf(wallet.address);
    bal = ethers.utils.formatEther(bal);
    setBalance(String(bal));
    num = await nftContract.balanceOf(wallet.address);
    setPetNum(Number(num));
  }

  const seePet = async (input) => {
    let res = await nftContract.tokenURI(input.text - 1);
    setPetInfo(res);
  };

  const pointsToTokens = async () => {
    let amount = points.toString();
    amount = ethers.utils.parseEther(amount);
    await tokenContract
      .mint(wallet.address, amount, { from: wallet.address })
      .then(async () => {
        init();
        setPoints(0);
      });
  };

  const tokensToPoints = async () => {
    bal = await tokenContract.balanceOf(wallet.address);
    await tokenContract.burn(bal, { from: wallet.address }).then(async () => {
      init();
      bal = ethers.utils.formatEther(bal);
      setPoints(String(bal));
    });
  };

  const adopt = async (uri) => {
    await nftContract.adopt(uri, { from: wallet.address });
  };

  //   setInterval(() => {
  init();
  //   }, 3000);

  return (
    <div className="App">
      <Header
        seePet={seePet}
        petNum={petNum}
        petInfo={petInfo}
        adopt={adopt}
        points={points}
        balance={balance}
        pointsToTokens={pointsToTokens}
        tokensToPoints={tokensToPoints}
        setPoints={setPoints}
        planet={planet}
        setPlanet={setPlanet}
      />
    </div>
  );
}

export default Webpage;
