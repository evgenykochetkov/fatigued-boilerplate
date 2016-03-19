import React from 'react'
import { connect } from 'react-redux'

const App = React.createClass({
  propTypes: {
    greeting: React.PropTypes.string
  },
  render () {
    const { greeting } = this.props

    return (
      <div>
        <h1>{greeting}!</h1>
      </div>
    )
  }
})

const mapStateToProps = (state) => ({
  greeting: state.greeting
})

export default connect(
  mapStateToProps
)(App)
