import Header from "../components/header";
import "./login.css";
export default function Login() {
  return (
    <>
      <div className="detail_radius"></div>
      {/* detail_radius*/}
      <div className="conteiner_login">
        <p className="conect_title">
          Connect your <h2>wallet</h2>
        </p>
        <div className="metamask-btn">
          <div className="metamask_logo"></div>
          {/* matamask_Logo */}
          <p className="metamask_title">Connect with MetaMask</p>
        </div>
        {/* metamask-btn */}
        <div className="form">
          <input type="text" placeholder="Address"></input>
          <input type="submit"></input>
        </div>
        {/* form */}
      </div>{" "}
      {/* conteiner_login */}
      <div className="price_section">
        <div className="price_content">
          <div className="price_title">
            <h1>PRICES</h1>  
          </div>{/* price_title */}
          <div className="price_table">
            <div className="w33"><h1>CRIPTO</h1></div>  
            <div className="w33"><h1>COTAÇÃO</h1></div>  
            <div className="w33"><h1>24H</h1></div> 
            <div className="w33 cripto"><h1>Btc</h1></div>  
            <div className="w33 cripto"><h1>$40.000</h1></div>  
            <div className="w33 cripto up"><h1>+2.35%</h1></div> 
            <div className="w33 cripto"><h1>Eth</h1></div>  
            <div className="w33 cripto"><h1>$1.000</h1></div>  
            <div className="w33 cripto down"><h1>-1,02%</h1></div> 
            <div className="w33 cripto"><h1>Matic</h1></div>  
            <div className="w33 cripto"><h1>$0.88</h1></div>  
            <div className="w33 cripto up"><h1>+4,54%</h1></div> 
            <div className="w33 cripto"><h1>AlecRypto</h1></div>  
            <div className="w33 cripto"><h1>$3x10^6</h1></div>  
            <div className="w33 cripto up"><h1>+1000,23%</h1></div> 
          </div>{/* price_table */}
        </div>{/* price_content */}
      </div>{/* price_section */}
      <div className="bg_btc"></div>
      <div className="bg_eth"></div>
    </>
  );
}
