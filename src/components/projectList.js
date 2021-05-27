import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Project from "./project"

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
          }
        }
      }
    }
  `)
  return (
    <div>
      {data.allProjectsJson.edges.map((project, item) => (
        <Project key={item} project={project} />
      ))}
    </div>
  )
}

export default ProjectList
