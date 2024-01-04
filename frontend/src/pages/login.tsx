import Header from "../components/header";
import './login.css';
export default function Login() {
  return (
    <>
    <div className="detail_radius"></div>{/* detail_radius*/}
    <div className="conteiner_login">
      <p className="conect_title">Connect your <h2>wallet</h2></p>
      <div className="metamask-btn">
        <div className="metamask_logo"></div>{/* matamask_Logo */}
        <p className="metamask_title">Connect with MetaMask</p>  
      </div>{/* metamask-btn */}
      <div className="form">
        <input type="text" placeholder="Address"></input>
        <input type="submit"></input>
      </div>{/* form */}
    </div> {/* conteiner_login */}
    <div className="bg_btc"></div>
      
    </>
  );
}
