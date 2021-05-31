import React from "react"
import * as styles from "../styles/project.module.css"
import PropTypes from "prop-types"

function Project({ project }) {
  return (
    <div className={styles.project}>
      <div className={styles.nome}>{project.nome}</div>
      <div className={styles.descrizioneBreve}>{project.descrizioneBreve}</div>
      <div className={styles.descrizione}>{project.descrizione}</div>
      <div className={styles.stato}>
        <span className="etichettaProgetto">Stato:</span>{" "}
        {project.statoProgetto}
      </div>
      {project.annoPrimoRilascio && (
        <div className={styles.stato}>
          <span className="etichettaProgetto">Anno primo rilascio:</span>{" "}
          {project.annoPrimoRilascio}
        </div>
      )}
      <div className={styles.stack}>
        {project.stack.map((tech, item) => {
          return <div key={item}>{tech}</div>
        })}
      </div>
      {project.url && (
        <a href={project.url} target="_blank" rel="noreferrer">
          <button className={`pulsante`}>DEMO</button>
        </a>
      )}
    </div>
  )
}

Project.PropTypes = {
  project: PropTypes.shape({
    nome: PropTypes.string.isRequired,
    descrizioneBreve: PropTypes.string,
    descrizione: PropTypes.string,
    url: PropTypes.string,
    annoPrimoRilascio: PropTypes.string,
    stack: PropTypes.arrayOf(PropTypes.string),
    statoProgetto: PropTypes.string,
  }),
}

export default Project
