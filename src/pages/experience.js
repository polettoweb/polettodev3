import React from 'react'
import resumeData from "../json/resume.json";
import ExpCard from "../components/partials/ExpCard";
import Layout from '../components/Layout';
import '../styles/exp.scss'

const Experience = () => {
  const data = resumeData
  return (
    <Layout>
      <section className="resume__container container mx-auto">
        <div className="experience__container flex flex-col">
          <h1>Experience</h1>
          <p className="experience__intro text-copy-primary" data-cy="experience__intro">
            Web development has been a passion of mine since
            1997 that became my full-time job five years ago. I
            really enjoy the challenge that the web brings to
            developers and I like to keep improving and learn
            new technologies. I choose to specialise myself into
            front-end for being able to shape user interfaces
            based on the client needs and for being challenged
            by the constant amount of innovations that the
            front-end world is giving
          </p>
          <ul className="experience">
            {
              data.map(item => (
                <ExpCard
                  key={item.title}
                  item={item}
                />
              ))
            }
          </ul>
        </div>
      </section>
    </Layout>
  )
}

export default Experience
