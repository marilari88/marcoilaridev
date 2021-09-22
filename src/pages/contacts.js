import React from "react"
import ContactForm from "../components/contactForm"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Contacts = () => {
  return (
    <Layout>
      <Seo title="I miei contatti" />
      <ContactForm />
    </Layout>
  )
}

export default Contacts
