import { useState } from "react";
import './style.css'

function Form() {
  const [name, setName] = useState<string>("");
  const [cpf, setCpf] = useState<number | string>("");
  const [tel, setTel] = useState<number | string>("");
  const [email, setEmail] = useState<string>("");
  const [endereco, setEndereco] = useState<string>("");

  return (
    <>
      <section id="section-form">
        <form action="submit">
          <fieldset className="fieldset-form">
            <label htmlFor="name"> Nome : </label>
            <input
              name="name"
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </fieldset >

          <fieldset className="fieldset-form">
            <label htmlFor="cpf"> CPF : </label>
            <input
              name="cpf"
              type="number"
              onChange={(e) => setCpf(Number(e.target.value))}
              value={cpf}
            />
          </fieldset>

          <fieldset className="fieldset-form">
            <label htmlFor="tel">Telefone : </label>
            <input
              name="tel"
              type="number"
              onChange={(e) => setTel(Number(e.target.value))}
              value={tel}
            />
          </fieldset>

          <fieldset className="fieldset-form">
            <label htmlFor="email"> E-mail : </label>
            <input
              name="email"
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </fieldset>

          <fieldset className="fieldset-form">
            <label htmlFor="adress"> Endereço : </label>
            <input
              name="adress"
              type="text"
              onChange={(e) => setEndereco(e.target.value)}
              value={endereco}
            />
          </fieldset>

          <button type="submit">Enviar</button>
        </form>

        {/* Tag usada para manter a estrutura de texto digitada */}
        {/* <pre>
       {
        ` 
        Seu nome é ${name} 
        Seu cpf é ${cpf}
        Seu telefone é ${tel}
        Possui o email : ${email}
        Mora no endereço : ${endereco}`}
        </pre> */}

        <div></div>
      </section>
    </>
  );
}

export default Form;
