import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Contacts = () => {
  return (
    <Layout>
      <Seo title="I miei contatti" />
      <div className="form-wrapper">
        <form netlify>
          <div className="riga-form">
            <label htmlFor="nome">Il tuo nome</label>
            <input
              type="text"
              name="nome"
              id="nome"
              placeholder="Cognome Nome"
              maxLength="40"
              required
            />
          </div>
          <div className="riga-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Indirizzo Email"
              maxLength="70"
              required
            />
          </div>
          <div className="riga-form">
            <label htmlFor="telefono">Telefono</label>
            <input
              type="text"
              name="telefono"
              id="telefono"
              placeholder="Numero di Telefono"
              maxLength="15"
            />
          </div>
          <div className="riga-form">
            <label htmlFor="testo">Messaggio</label>
            <textarea
              name="testo"
              id="testo"
              placeholder="Messaggio"
              required
            />
          </div>
          <input type="submit" value="Invia" />
        </form>
      </div>
    </Layout>
  )
}

export default Contacts
