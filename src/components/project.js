import React from "react"
import * as styles from "../styles/project.module.css"
import propTypes from "prop-types"

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

Project.propTypes = {
  project: propTypes.shape({
    nome: propTypes.string.isRequired,
    descrizioneBreve: propTypes.string,
    descrizione: propTypes.string,
    url: propTypes.string,
    annoPrimoRilascio: propTypes.string,
    stack: propTypes.arrayOf(propTypes.string),
    statoProgetto: propTypes.string,
  }),
}

export default Project
