import React from 'react'
import Layout from '../components/Layout'
import projectsData from "../json/projects.json";
import Codepen from '../components/partials/codepen'
import Codesandbox from '../components/partials/codesandbox'
import Github from '../components/partials/github'

const projects = () => {
  return (
    <Layout>
      <div className="container mx-auto py-16 flex-grow">
        {
          projectsData.map(project => (
            <div
              key={project.title}
              className="border-gray-400 border-b mb-12 flex justify-between w-4/5 mx-auto"
            >
              <div className="w-1/5 flex justify-start items-center">
                {project.type === 'codepen' && <Codepen />}
                {project.type === 'codesandbox' && <Codesandbox />}
                {project.type === 'github' && <Github />}
              </div>
              <div className="post w-4/5">
                <h2 className="text-3xl font-bold">{project.title}</h2>
                <div className="text-lg mb-4">{project.content}</div>
                <div className="flex justify-between mb-8">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Go to the source code"
                    className="font-bold uppercase border-b-2 border-transparent pb-1"
                  >View Code</a>
                  <a
                    v-if="project.website"
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Go to the demo website"
                    className="font-bold uppercase border-b-2 border-transparent pb-1"
                  >View Project</a>
                </div>
              </div>
            </div >
          ))
        }
      </div >
    </Layout >
  )
}

export default projects


//   <script>

//     export default {
//       metaInfo: {
//       title: "Code | Poletto.dev | Marco Poletto | Web Developer | Mentor",
//     meta: [
//     {charset: "utf-8" },
//     {
//       name: "viewport",
//     content: "width=device-width, initial-scale=1"
//       },
//     {name: "author", content: "Marco Poletto Web Developer" },
//     {
//       name: "description",
//     content:
//     "Marco Poletto Frontend Web Developer, Tech enthusiast, Coffee aficionado, Gamer, mentor, tutor, code, workshop"
//       }
//     ]
//   },
//     data() {
//     return {
//       projectsData
//     };
//   },
//     components: {
//       codepen: () => import("../components/partials/codepen"),
//     codesandbox: () => import("../components/partials/codesandbox"),
//     github: () => import("../components/partials/github")
//   }
// };
//   </script>


