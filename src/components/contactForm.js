import React, { useState } from "react"
import {
  contactForm,
  formRow,
  errorMessage,
} from "../styles/contactForm.module.css"

function ContactForm() {
  const [error, setError] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = () => {
    const nomeInput = document.getElementById("nome")
    const emailInput = document.getElementById("email")
    const telefonoInput = document.getElementById("telefono")
    const messaggioInput = document.getElementById("testo")

    if (nomeInput.value.trim() === "") {
      setError("🛑 Inserire il nome")
      return false
    }

    if (emailInput.value.trim() === "" && telefonoInput.value.trim() === "") {
      setError("☎️  Inserire almeno un recapito")
      return false
    }

    if (messaggioInput.value.trim() === "") {
      setError("💌 Inserire il messaggio")
      return false
    }

    //TODO - Perfezionare la validazione

    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return <div>Il messaggio è stato inviato. Risponderò al più presto</div>
  }

  return (
    <form
      className={contactForm}
      data-netlify="true"
      onSubmit={() => setIsSubmitted(true)}
    >
      <div className={formRow}>
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
      <div className={formRow}>
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
      <div className={formRow}>
        <label htmlFor="telefono">Telefono</label>
        <input
          type="text"
          name="telefono"
          id="telefono"
          placeholder="Numero di Telefono"
          maxLength="15"
        />
      </div>
      <div className={formRow}>
        <label htmlFor="testo">Messaggio</label>
        <textarea name="testo" id="testo" placeholder="Messaggio" required />
      </div>
      {error && <div className={errorMessage}>{error}</div>}
      <div className={formRow}>
        <input
          type="submit"
          className="pulsante"
          onClick={handleSubmit}
          value="Invia"
        />
      </div>
    </form>
  )
}

export default ContactForm
