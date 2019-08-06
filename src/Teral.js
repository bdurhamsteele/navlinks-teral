import React, { Component } from 'react'

export default class Teral extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  readyTranslations () {
    const teralLoader = setInterval(() => {
      if (typeof window.Teral !== 'undefined') { // eslint-disable-line
        console.log(window.Teral)
        window.Teral.init({ 'apiKey': 'verysecret', 'spa': true, 'debug': true })
        clearInterval(teralLoader)
      }
    }, 2000)
  }
  componentDidMount () {
    let el = document.createElement('script')
    el.type = 'text/javascript'
    el.async = true
    el.src = 'http://cdn.teral.io/js/main.dev.min.js'
    el.onload = this.readyTranslations()
    let s = document.getElementsByTagName('script')[0]
    s.parentNode.insertBefore(el, s)
  }
  render () {
    return (
      <div>
        {/* {this.props.children} */}
      </div>
    )
  }
}
