import React, { Component, Fragment } from 'react'
import { Helmet } from 'vtex.render-runtime'

import favicon from './images/favicon.png'

export default class StoreFramework extends Component {
  public render() {
    return (
      <Fragment>
        <Helmet>
          <title>
            VTEX Store Framework - The next generation store framework
          </title>
          <meta
            name="description"
            content="A consistent toolset to create high-quality e-commerce experiences fast."
          />
          <meta name="theme-color" content="#F71963" />
          <link rel="icon" href={favicon} />
        </Helmet>
        <main>
          <div className="w-40-ns w-90 center flex flex-column vh-100-ns justify-center">
            <div className="mt9">
              <div className="t-heading-1 c-on-base pb4 lh-solid pt7">
                Store Framework Docs
              </div>
              <div className="t-heading-3 c-on-base fw3 pb6 pt4 lh-title">
                Want to create a store using VTEX IO? Start reading those
                contents below:
              </div>
            </div>
            <div className="pv7 bt bb b--muted-3 t-heading-2-ns fw3-ns t-heading-3 fw3">
              <a className="c-on-base link">
                <span className="c-emphasis">1.</span> Store Framework
                Announcement
                <span className="c-muted-3"> [SOON]</span>
              </a>
            </div>
            <div className="pv7 bb b--muted-3 t-heading-2-ns fw3-ns t-heading-3 fw3">
              <a className="c-on-base link">
                <span className="c-emphasis">2.</span> Store Framework Getting
                Started
                <span className="c-muted-3"> [SOON]</span>
              </a>
            </div>
            <div className="pv7 bb b--muted-3 t-heading-2-ns fw3-ns t-heading-3 fw3">
              <a className="c-on-base link">
                <span className="c-emphasis">3.</span> Store Builder
                <span className="c-muted-3"> [SOON]</span>
              </a>
            </div>
            <div className="pv7 bb b--muted-3 t-heading-2-ns fw3-ns t-heading-3 fw3 pointer dim">
              <a className="c-on-base link" href="https://styleguide.vtex.com">
                <span className="c-emphasis">4.</span> VTEX Tachyons and
                Styleguide
              </a>
            </div>
            <div className="pv7 mb7 bb b--muted-3 t-heading-2-ns fw3-ns t-heading-3 fw3 pointer dim">
              <a
                className="c-on-base link"
                href="https://github.com/vtex-apps/awesome-io"
              >
                <span className="c-emphasis">5.</span> Contributing.md
              </a>
            </div>
          </div>
        </main>
      </Fragment>
    )
  }
}