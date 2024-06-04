
import { useState } from 'react';
import './App.css'

function App() {

  let [name, setName] = useState<string>()
  let [cpf, setCpf] = useState<number>()
  let [tel, setTel] = useState<number>()
  let [email, setEmail] = useState<string>()
  let [endereco, setEndereco] = useState<string>()

  return <>
    <section>

      <form action="submit">

        <fieldset>
          <label htmlFor="name"> Nome : </label>
          <input name="name" type="text" onChange={(e) => setName(e.target.value)} value={name} />
        </fieldset>

        <fieldset>
          <label htmlFor="cpf"> CPF : </label>
          <input name="cpf" type="number" onChange={(e) => setCpf(Number(e.target.value))} value={cpf} />
        </fieldset>

        <fieldset>
          <label htmlFor="tel">Telefone : </label>
          <input name="tek" type="number" onChange={(e) => setTel(Number(e.target.value))} value={tel} />
        </fieldset>


        <fieldset>
          <label htmlFor="email"> E-mail : </label>
          <input name="email" type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
        </fieldset>


        <fieldset>
          <label htmlFor="adress"> Endereço :  </label>
          <input name="adress" type="text" onChange={(e) => setEndereco(e.target.value)} value={endereco} />
        </fieldset>

        <button type='submit'>Enviar</button>

      </form>

    </section>

  </>
}

export default App
