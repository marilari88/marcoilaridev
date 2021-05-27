import React from "react"

function Project({ project }) {
  return (
    <div>
      Progetto
      <div className="nome">{project.nome}</div>
      <div className="descrizione-breve">{project.descrizioneBreve}</div>
      <div className="descrizione">{project.descrizione}</div>
      <div className="url">{project.url}</div>
      <div className="stato">{project.stato}</div>
    </div>
  )
}

export default Project
