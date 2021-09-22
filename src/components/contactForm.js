import React, { useState } from "react"
import { contactForm, formRow } from "../styles/contactForm.module.css"

function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  return (
    <div className="form-wrapper">
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

        <div className={formRow}>
          <input type="submit" className="pulsante" value="Invia" />
        </div>
      </form>
    </div>
  )
}

export default ContactForm
