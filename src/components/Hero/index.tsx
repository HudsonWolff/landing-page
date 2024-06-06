import "./style.css";

function Hero() {
  return <section id="section-hero">
<div>
<h2 className="h2-default">Venha ao Maior Evento de Cosplay de Anime do Ano!</h2>
<p className="p-default">Junte-se a nós para um dia cheio de diversão, competição e cultura otaku</p>
</div>

  
<img src="src\assets\hero.jpg" alt="evento cosplay passado"/>

<button className="button-default">Compre seu Ingresso Agora</button>
  </section>;
}

export default Hero;
