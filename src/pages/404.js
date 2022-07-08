import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import Image404 from '../images/404.svg'

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <div className="container mx-auto py-16 flex-grow">
        <h2 className="text-4xl font-bold mb-16">Page Not Found</h2>
        <img src={Image404} alt="404 - Not found" />
        <div className="flex justify-center alig-center p-20">
          <Link to='/' className="uppercase text-xl">Back to homepage</Link>
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage