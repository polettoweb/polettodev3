import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'

const uses = () => {
  return (
    <Layout>
      <Helmet>
        <title>Uses | Poletto.dev | Marco Poletto | Engineering Manager | Mentor</title>
        <meta charSet="utf-8" />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name="author" content="Marco Poletto" />
        <meta name="description" content="Marco Poletto, Engineering Manager, Frontend Web Developer, Tech enthusiast, Coffee aficionado, Gamer, mentor, tutor" />
      </Helmet>
      <div className="container mx-auto py-16">
        <h2 className="text-4xl font-bold mb-8">Current setup</h2>
        <p className="text-xl mb-8">Current tech and hardware that I use every day for my job.</p>
        <div>
          <h2 className="text-2xl font-bold">Hardware</h2>
          <ul>
            <li className="text-copy-secondary ml-4 mb-4">
              <strong>MacBook Pro 16 2021</strong> (M1 Pro)
            </li>
            <li className="text-copy-secondary ml-4 mb-4">
              <strong>Apple Magic Keyboard 2</strong> (Space gray)
            </li>
            <li className="text-copy-secondary ml-4 mb-4">
              <strong>SteelSeries Aerox 9 Wireless</strong>
            </li>
            <li className="text-copy-secondary ml-4 mb-4">
              <strong>LG 38GN950</strong> 3840x1600 ultrawide monitor
            </li>
            <li className="text-copy-secondary ml-4 mb-4">
              <strong>iPad pro 12.9"</strong> (M1 256GB space grey)
            </li>
            <li className="text-copy-secondary ml-4 mb-4">
              <strong>iPhone 11 128GB</strong>
            </li>
          </ul>
          <h2 className="text-2xl font-bold">Development Tools</h2>
          <ul>
            <li className="text-copy-secondary ml-4 mb-4">
              <strong>VS Code</strong> with<strong> Night Owl</strong> theme and<strong> Dank Mono</strong> as font
            </li>
            <li className="text-copy-secondary ml-4 mb-4">
              <strong>iTerm2</strong> Terminal with ohMyZsh and Powerlevel10k skin
            </li>
          </ul>
          <h2 className="text-2xl font-bold">Productivity</h2>
          <ul>
            <li className="text-copy-secondary ml-4 mb-4">
              <strong>Notion</strong> for notes taking
            </li>
            <li className="text-copy-secondary ml-4 mb-4">
              <strong>Linear</strong> for project management
            </li>
            <li className="text-copy-secondary ml-4 mb-4">
              <strong>Slack</strong> for communication
            </li>
            <li className="text-copy-secondary ml-4 mb-4">
              <strong>Procreate</strong> for sketching
            </li>
          </ul>
          <h2 className="text-2xl font-bold">Other stuff</h2>
          <ul>
            <li className="text-copy-secondary ml-4 mb-4">
              <strong>Google Chrome</strong> for development
            </li>
            <li className="text-copy-secondary ml-4 mb-4">
              <strong>Bitwarden</strong> as my password manager
            </li>
            <li className="text-copy-secondary ml-4 mb-4">
              <strong>Magnet</strong> to snap windows into places
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default uses