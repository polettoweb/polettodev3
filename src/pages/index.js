import React from 'react'
import ReactTypingEffect from 'react-typing-effect';
import { graphql } from "gatsby";
import Img from 'gatsby-image';
import Layout from '../components/Layout';
import Latest from '../components/latest';

const Home = ({ data }) => {
  const role = [
    "Frontend Dev",
    "UI Engineer",
    "Engineering Manager",
    "Coffee aficionado",
    "Tech enthusiast",
    "Tutor",
    "Scrum Master",
    "Gamer",
    "Mentor"
  ];

  return (
    <Layout>
      <div className="hero container mx-auto flex flex-col lg:flex-row flex-wrap justify-center pt-16 pb-24">
        <div className="text-4xl font-bold w-full lg:w-full xl:w-3/5 items-center text-center xl:text-left pb-8">
          <h1 className="font-normal">
            <span className="leading-tight">Hi, I'm Marco,</span>
            <br />
            <span className="text-copy-secondary leading-tight typer-wrapper relative">
              <ReactTypingEffect text={role} speed={100} eraseDelay={1500} eraseSpeed={10} typingDelay={100} />
            </span>
          </h1>
        </div>
        <Img
          className="z-10 mt-12"
          alt="Marco's fab portrait"
          fixed={data && data.file.childImageSharp.fixed}
        />
        <svg
          className="absolute rotate-45 bg-octa"
          width="448"
          height="448"
          viewBox="0 0 448 448"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M189.695 14.3458L66.024 65.1917L30.9264 149.299L125.5 260.342L223.434 65.9808L189.695 14.3458ZM0 223.411L28.7802 154.442L123.074 265.156L64.7518 380.905L0 223.411ZM68.9799 383.555L126.57 269.261L169.111 319.21L114.595 402.59L68.9799 383.555ZM119.259 404.536L172.469 323.153L264.434 431.132L223.411 447.998L119.259 404.536ZM175.304 318.818L269.268 429.145L336.946 401.32L382.925 310.068L282.006 155.62L175.304 318.818ZM386.067 314.875L343.963 398.435L381.974 382.807L400.869 337.529L386.067 314.875ZM388.651 309.747L440.612 206.623L447.998 224.588L403.182 331.985L388.651 309.747ZM438.112 200.542L385.509 304.939L284.975 151.08L349.636 52.1822L382.807 66.024L438.112 200.542ZM128.996 264.446L171.945 314.875L279.039 151.079L226.576 70.7883L128.996 264.446ZM282.007 146.539L229.16 65.6597L255.702 12.9838L344.972 50.2359L282.007 146.539ZM226.018 60.8522L194.373 12.4223L224.588 0L251.105 11.0654L226.018 60.8522Z"
            fill="#2A4365"
            fillOpacity="0.2"
          />
        </svg>
        <div className="text-lg sm:text-xl mt-8 w-full pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex-1 text-lg sm:text-xl text-justify sm:text-left main-text">
              <p>
                I am an Engineering Manager and a Lead front-end developer with experience building and managing product-focussed teams. My tasks include handling the engineering team in delivering on time and with quality code, helping them grow in their role and guiding them towards their career goals.
                As a developer, I focus on the front-end. I work extensively with JavaScript (<span>Vue</span> and <span>React</span>) and other UX and UI technologies (<span>CSS</span>, <span>GraphQL</span>, <span>CD/CI</span>, unit and e2e <span>testing</span>, development experience, etc.).<br />
                <span>Mentoring and teaching developers to grow and learn is a big part of my job and personal mission.</span> Furthermore, I like seeking out new technologies and staying up-to-date on industry trends and advancements.
                In addition to my roles as a front-end and engineering manager, I have often served as a Scrum Master, helping companies introduce an agile methodology or improve the existing one.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Latest data={data && data.allMarkdownRemark.edges} />
    </Layout>
  );
};

export default Home;

export const query = graphql`
  query {
    file(relativePath: { eq: "marco.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 403, height: 623) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    allMarkdownRemark {
      edges {
        node {
          html
          id
          timeToRead
          frontmatter {
            # Assumes you're using title in your frontmatter.
            title
            slug
            tags
            date (formatString: "MMMM D, Y")
            summary
          }
        }
      }
    }
  }
`;