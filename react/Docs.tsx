import React, { Fragment, FunctionComponent } from 'react'
import { Helmet } from 'vtex.render-runtime'

import Navbar from './components/IO/Navbar'
import Footer from './components/IO/Footer'
import SideBar from './components/Docs/SideBar'
import DocsRenderer from './components/Docs/DocsRenderer'
import favicon from './images/favicon.png'

import { availableDocs } from './DocsData'

const Docs: FunctionComponent<any> = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Docs</title>
        <meta name="theme-color" content="#F71963" />
        <link rel="icon" href={favicon} />
      </Helmet>
      <Navbar />
      <main className="w-100 pv10 bg-base--inverted">
        <h1 className="c-base t-heading-1 w-90 w-80-ns center mb8">
          Documentation
        </h1>
        <div className="w-80-l w-90 center flex br3 bg-muted-1">
          <aside className="w-25-l ml5-l w-90 center">
            <SideBar componentList={availableDocs} />
          </aside>
          <DocsRenderer />
        </div>
      </main>
      <Footer />
    </Fragment>
  )
}

export default Docs