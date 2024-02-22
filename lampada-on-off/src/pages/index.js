import Image from "next/image";
import { useState } from "react";

export default function Home() {


  const [estadoInterruptor, setEstadoInterruptor] = useState(false)
  const [contador, setContador] = useState(0)

  function mudarLampada() {
    setEstadoInterruptor(!estadoInterruptor)


    if (estadoInterruptor == false)
      setContador(contador + 1)



  }


  return (
    <div>
      <h2>
        {
          contador < 72
          ? `Você já ligou ${contador} vez ${contador ==1?"" : "es"} a lampada`
          : "Sua Lampada Queimou"
        }
       </h2>
      {

        contador >= 72
          ? <Image src={"/assets/png-transparent-graphy-saudi-arabia-arabs-others-miscellaneous-photography-hand.png"} width={286} height={388} />
          : estadoInterruptor == true
            ? <Image src={"/assets/on.png"} width={286} height={388} />
            : <Image src={"/assets/off.png"} width={286} height={388} />


      }
      <button onClick={mudarLampada}>Interruptor</button>
    </div>
  );
}
