import React, { useState } from "react"
import {
  contactForm,
  formRow,
  errorMessage,
} from "../styles/contactForm.module.css"

function ContactForm() {
  const [error, setError] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [telefono, setTelefono] = useState("")
  const [messaggio, setMessamessaggio] = useState("")

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleSubmit = e => {
    e.preventDefault()
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

    const form = document.getElementById("contactForm")

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        nome: nomeInput.value,
        email: emailInput.value,
        telefono: telefonoInput.value,
        testo: messaggioInput.value,
      }),
    }).then(response => {
      console.log(response)
      setIsSubmitted(true)
    })
  }

  if (isSubmitted) {
    return <div>Il messaggio è stato inviato. Risponderò al più presto</div>
  }

  return (
    <form
      id="contactForm"
      name="contact"
      className={contactForm}
      data-netlify="true"
      action="#"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <div className={formRow}>
        <label htmlFor="nome">Il tuo nome</label>
        <input
          type="text"
          name="nome"
          id="nome"
          placeholder="Cognome Nome"
          maxLength="40"
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
        <textarea name="testo" id="testo" placeholder="Messaggio" />
      </div>
      {error && <div className={errorMessage}>{error}</div>}
      <div className={formRow}>
        <input type="submit" className="pulsante" value="Invia" />
      </div>
    </form>
  )
}

export default ContactForm
