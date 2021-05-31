import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Project from "./project"
import * as styles from "../styles/project.module.css"

function ProjectList() {
  const data = useStaticQuery(graphql`
    query {
      allProjectsJson {
        edges {
          node {
            nome
            descrizioneBreve
            descrizione
            annoPrimoRilascio
            immagineAnteprima
            statoProgetto
            url
            stack
          }
        }
      }
    }
  `)
  return (
    <div className={styles.projectList}>
      {data.allProjectsJson.edges.map(({ node }, item) => (
        <Project key={item} project={node} />
      ))}
    </div>
  )
}

export default ProjectList
