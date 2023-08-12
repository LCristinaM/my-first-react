import React from "react";
import sunset from './/images/san-carlos.jpg';
import './Main.css';

const Main = () => {
  return ( 
<main>
    <div className="image-container">
      <img src={sunset} alt="san-carlos" width='100%vw' height='100%vw'/>
      <h1 className="text-image"> Respira profundo, siente tus latidos, estás vivo!</h1>
    </div>

    <article>
      <h3></h3>
    </article>

    <section>
      <h4></h4>
    </section>
</main>
)
}

export default Main;