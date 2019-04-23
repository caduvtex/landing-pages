import React from 'react'
import { FormattedMessage } from 'react-intl'

import Lightbulb from './icons/Lightbulb'
import Workspaces from './icons/Workspaces'
import Serverless from './icons/Serverless'
import Sync from './icons/Sync'

const KeyFeatures = () => (
  <section className="vh-100 bg-base c-muted-1 center w-90">
    <p className="mb0">
      <FormattedMessage id="features.title.small" />
    </p>
    <p className="t-heading-1 normal w-50 mt3">
      <FormattedMessage id="features.title" />
    </p>
    <div className="flex items-center justify-between">
      <article className="mh7">
        <Sync />
        <p className="f4">
          <FormattedMessage id="features.cloud" />
        </p>
        <p className="t-body lh-copy">
          <FormattedMessage id="features.cloud.description" />
        </p>
      </article>
      <article className="mh7">
        <Lightbulb />
        <p className="f4">
          <FormattedMessage id="features.setupless" />
        </p>
        <p className="t-body lh-copy">
          <FormattedMessage id="features.setupless.description" />
        </p>
      </article>
      <article className="mh7">
        <Workspaces />
        <p className="f4">
          <FormattedMessage id="features.workspaces" />
        </p>
        <p className="t-body lh-copy">
          <FormattedMessage id="features.workspaces.description" />
        </p>
      </article>
      <article className="mh7">
        <Serverless />
        <p className="f4">
          <FormattedMessage id="features.serverless" />
        </p>
        <p className="t-body lh-copy">
          <FormattedMessage id="features.serverless.description" />
        </p>
      </article>
    </div>
  </section>
)

export default KeyFeatures