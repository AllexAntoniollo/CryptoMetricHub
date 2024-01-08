import Header from "../components/header";
import "./login.css";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";
export default function Login() {
  const [connect, setConnect] = useState<string>("fechado");

  function chanceConnect() {
    if (connect === "fechado") {
      setConnect("aberto");
    } else {
      setConnect("fechado");
    }
  }

  function closedPopUp() {
    if (connect === "aberto") {
      chanceConnect();
    } else {
    }
  }
  return (
    <>
      <div className={connect === "aberto" ? "blur" : ""} onClick={closedPopUp}>
        <div className="detail_radius"></div>
        {/* detail_radius*/}
        <div className="conteiner_login">
          <p className="conect_title">
            Connect your <h2>wallet</h2>
          </p>
          <p className="frase">
            "Conecte-se ao futuro financeiro de maneira eficiente e rentável com
            nossa plataforma especializada em gerenciamento de lucros em
            criptoativos"
          </p>
          <div className="call_to_action" onClick={chanceConnect}>
            <p className="connect">Connect wallet</p>
          </div>
          <p className="or">or</p>
          <div className="form">
            <input type="text" placeholder="Address" />
            <input type="submit" value="connect" />
          </div>
          {/* call_to_action */}
        </div>
        {/* conteiner_login */}
        <div className="price_section">
          <div className="price_content">
            <div className="price_title">
              <h1>PRICES</h1>
            </div>
            {/* price_title */}
            <div className="price_table">
              <div className="w33">
                <h1>CRIPTO</h1>
              </div>
              <div className="w33">
                <h1>COTAÇÃO</h1>
              </div>
              <div className="w33">
                <h1>24H</h1>
              </div>
              <div className="w33 cripto">
                <h1>Btc</h1>
              </div>
              <div className="w33 cripto">
                <h1>$40.000</h1>
              </div>
              <div className="w33 cripto up">
                <h1>+2.35%</h1>
              </div>
              <div className="w33 cripto">
                <h1>Eth</h1>
              </div>
              <div className="w33 cripto">
                <h1>$1.000</h1>
              </div>
              <div className="w33 cripto down">
                <h1>-1,02%</h1>
              </div>
              <div className="w33 cripto">
                <h1>Matic</h1>
              </div>
              <div className="w33 cripto">
                <h1>$0.88</h1>
              </div>
              <div className="w33 cripto up">
                <h1>+4,54%</h1>
              </div>
              <div className="w33 cripto">
                <h1>AlecRypto</h1>
              </div>
              <div className="w33 cripto">
                <h1>$3x10^6</h1>
              </div>
              <div className="w33 cripto up">
                <h1>+1000,23%</h1>
              </div>
            </div>
            {/* price_table */}
          </div>
          {/* price_content */}
        </div>
        {/* price_section */}
        <div className="bg_btc"></div>
        <div className="bg_eth"></div>
      </div>
      {/* login */}
      {connect === "aberto" ? (
        <div className="pop_up">
          <div className="header_pop_up">
            <p className="title_popup">Connect Wallet</p>
            <i onClick={chanceConnect} className="xis">
              {" "}
              <FaTimes />
            </i>
            <div className="connect_popup">
              <div className="wallets">
                <div className="wallets_single">
                  <img
                    className="wallet_logo"
                    src={require("../assets/metamask.png")}
                    alt="Metamask"
                  ></img>
                  <p className="wallets_name">MetaMask</p>
                </div>
                {/* wallets_single */}

                <div className="wallets_single">
                  <img
                    className="wallet_logo"
                    src={require("../assets/metamask.png")}
                    alt="Metamask"
                  ></img>
                  <p className="wallets_name">MetaMask</p>
                </div>
                {/* wallets_single */}

                <div className="wallets_single">
                  <img
                    className="wallet_logo"
                    src={require("../assets/metamask.png")}
                    alt="Metamask"
                  ></img>
                  <p className="wallets_name">MetaMask</p>
                </div>
                {/* wallets_single */}
              </div>
              {/* wallets */}
              {/* form */}
            </div>
            {/* connect_popup*/}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
