import React from 'react'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../lib/store'
import * as Actions from '../lib/actions';
import Seed from '../lib/Seed';

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
  componentDidMount () {
    const { actions } = this.props;
    actions.getWindowWidth();
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    const { windowWidth } = this.props;

    // @TMP until seed is fully implemented
    const oldSeed = Math.floor(Math.random()*1000000);

    // @TODO actually implement input
    const input = oldSeed.toString();

    const seed = Seed( input );

    return (
      <svg id="container">
        {/*
          <TrianglePrism width="500" height="500" color="#DC00FF" />
          <CircleMono width="500" height="500" color="#DC00FF" seed={seed} />
        */}

        <Grid
          className="layer-floor"
          horizonPosition={seed.horizonY}
          color="#2222FF"
          seed={oldSeed} />
        <LinesGrad
          className="layer-horizon"
          horizonPosition={seed.horizonY}
          color="#DC00FF"
          seed={oldSeed} />
        <TriangleOutline
          className="layer-secondary"
          horizonPosition={seed.horizonY}
          color="#FA00CA"
          seed={oldSeed} />
        <CircleMono
          windowWidth={windowWidth}
          className="layer-primary"
          horizonPosition={seed.horizonY}
          color="#FFCC00"
          seed={oldSeed} />

        <Styles />
      </svg>
    )
  }
}

export function mapStateToProps(state) {
  return state;
}

export function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch),
  };
}

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(NeonRiot)
