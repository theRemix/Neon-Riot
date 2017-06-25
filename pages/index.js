import React from 'react'
import { bindActionCreators } from 'redux'
import { initStore, startClock, addCount, serverRenderClock } from '../lib/store'
import withRedux from 'next-redux-wrapper'
// import TrianglePrism from '../components/primary/TrianglePrism'
import CircleMono from '../components/primary/CircleMono'
import TriangleOutline from '../components/secondary/TriangleOutline'
import LinesGrad from '../components/horizon/LinesGrad'
import Grid from '../components/floor/Grid'

const Styles = () => (
  <style jsx>{`
    body {
      background-color: #000;
    }
    #container {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    svg {
      position: absolute;
    }
    .layer-bg{
      z-index: 5;
    }
    .layer-horizon{
      z-index: 4;
    }
    .layer-floor{
      z-index: 3;
    }
    .layer-secondary{
      z-index: 2;
    }
    .layer-primary{
      z-index: 1;
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
    // @TODO actually implement seed
    const seed = Math.floor(Math.random()*1000000);

    const minHorizonPosition = window.innerHeight / 4;
    const maxHorizonPosition = minHorizonPosition * 3;
    const numHorizonVals = 1000;
    const horizonVals = Array(numHorizonVals).fill(null)
      .map((_,i) => ( maxHorizonPosition - minHorizonPosition / numHorizonVals * i ));

    const horizonPosition = horizonVals[seed % numHorizonVals];

    return (
      <svg id="container">
        {/*
          <TrianglePrism width="500" height="500" color="#DC00FF" />
          <CircleMono width="500" height="500" color="#DC00FF" seed={seed} />
        */}

        <Grid
          className="layer-floor"
          horizonPosition={horizonPosition}
          color="#2222FF"
          seed={seed} />
        <LinesGrad
          className="layer-horizon"
          horizonPosition={horizonPosition}
          color="#DC00FF"
          seed={seed} />
        <TriangleOutline
          className="layer-secondary"
          horizonPosition={horizonPosition}
          color="#FA00CA"
          seed={seed} />
        <CircleMono
          className="layer-primary"
          horizonPosition={horizonPosition}
          color="#FFCC00"
          seed={seed} />

        <Styles />
      </svg>
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
