import React from 'react'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../lib/store'
import * as Actions from '../lib/actions';
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
    actions.getWindowSize();
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    const { windowSize } = this.props;
    // @TODO actually implement seed
    const seed = Math.floor(Math.random()*1000000);

    const minHorizonPosition = windowSize.height / 4;
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
          windowSize={windowSize}
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
          windowSize={windowSize}
          className="layer-secondary"
          horizonPosition={horizonPosition}
          color="#FA00CA"
          seed={seed} />
        <CircleMono
          windowSize={windowSize}
          className="layer-primary"
          horizonPosition={horizonPosition}
          color="#FFCC00"
          seed={seed} />

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
