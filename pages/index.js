import React from 'react'
import { bindActionCreators } from 'redux'
import { initStore, startClock, addCount, serverRenderClock } from '../lib/store'
import withRedux from 'next-redux-wrapper'
// import TrianglePrism from '../components/primary/TrianglePrism'
import CircleMonoThick from '../components/primary/CircleMonoThick'

const Styles = () => (
  <style jsx>{`
    div {
      background-color: #000;
    }
  `}</style>
)

class NeonRiot extends React.Component {
  static getInitialProps ({ store, isServer }) {
    store.dispatch(serverRenderClock(isServer))
    store.dispatch(addCount())

    return { isServer }
  }

  componentDidMount () {
    this.timer = this.props.startClock()
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    return (
      <div>
        {/*
          <TrianglePrism width="500" height="500" color="#DC00FF" />
        */}

        <CircleMonoThick width="500" height="500" color="#DC00FF" />

        <Styles />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCount: bindActionCreators(addCount, dispatch),
    startClock: bindActionCreators(startClock, dispatch)
  }
}

export default withRedux(initStore, null, mapDispatchToProps)(NeonRiot)
