import "./style.css";

function Location() {
  return (
    <section id="location-section" className="box-default">
      <h2 className="h2-default h2-location ">NOSSA LOCALIZAÇÃO</h2>
      <pre className="p-default pre-location">
        {`

    Shopping Oriundi (Praça de Alimentação)
    Avenida Florestal  555 , Segato - Aracruz
`}
      </pre>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753.374494293444!2d-40.27135422477552!3d-19.82410118154059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb7ea80a57199cb%3A0xafaa88031571c172!2sOriundi%20Shopping!5e0!3m2!1spt-BR!2sbr!4v1718144153564!5m2!1spt-BR!2sbr"
        width="500"
        height="450"
        style={{ border: "0" }}
        loading="lazy"
      ></iframe>
    </section>
  );
}

export default Location;
