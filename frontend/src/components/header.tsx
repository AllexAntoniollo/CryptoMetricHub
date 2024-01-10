import "../pages/estilo.css"
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
      
    </>
  );
}
