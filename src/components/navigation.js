import { Link } from "gatsby"
import React from "react"
import { menu } from "../styles/navigation.module.css"

export default function Navigation() {
  return (
    <nav className={menu}>
      <Link to="/projects">Projects</Link>
      <Link to="/notes">Notes</Link>
      <Link to="/contacts">Contacts</Link>
    </nav>
  )
}
