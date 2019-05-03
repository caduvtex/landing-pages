import React from 'react'
import * as typeformEmbed from '@typeform/embed'

class Form extends React.Component {
  constructor(props: any) {
    super(props)
  }

  private el: HTMLDivElement | null = null

  componentDidMount() {
    if (this.el) {
      typeformEmbed.makeWidget(
        this.el,
        'https://codecup.typeform.com/to/yO8hNP',
        {
          hideFooter: true,
          hideHeaders: true,
          opacity: 0,
        }
      )
    }
  }
  render() {
    return <div ref={el => (this.el = el)} className="w-100 vh-75" />
  }
}

export default Form