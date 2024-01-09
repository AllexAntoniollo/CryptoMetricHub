import "../pages/estilo.css"
import { FaWallet } from 'react-icons/fa';
import { FiEye } from 'react-icons/fi';
import { useState } from "react";
import { connect } from "http2";

export default function Header() {
  const [saldo, setSaldo] = useState<string>("see");

  function chanceConnect() {
    if (saldo === "see") {
      setSaldo("hidden");
    } else {
      setSaldo("see");
    }
  }

  const [carteira, setCarteira] = useState<string>("closed");
    function chanceCarteira(){
      if(carteira === "closed"){
        setCarteira("open");
      }else{
        setCarteira("closed");
      }
    }
  return (
    <>
      <div className="header">
        <div className="headerContainer">
          <div className="walletMenu" onClick={chanceCarteira}>
        '   <FaWallet className="walletIcon"/>
          </div>{/* walletMenu */}
        </div>{/* headerContainer */}
      </div>{/* header */}
      {carteira === "open" ? (
        <div className="walletContent">
        <div className="walletBorder">
          <h1>Wallet</h1>
          <div className="walletSaldo">
          <p className={saldo === "hidden" ? "hidden" : ""}>
            Saldo: R$1000,00 
          </p>
          <div className="asterisco">
            <p className={saldo === "see" ? "hidden" : ""}>
              Saldo: ********* 
            </p>
          </div>
          <div className="eye-icon" onClick={chanceConnect}>
            <FiEye className="eye" />
          </div>
          </div>{/* walletSaldo */}
          <div className="borderBotton"></div>
        </div>
        </div>
      ) : (
        ""
      )}  
    </>
  );
}
