import React from 'react'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../lib/store'
import * as Actions from '../lib/actions';
import Seed from '../lib/Seed';

// import TrianglePrism from '../components/primary/TrianglePrism'
// import LinesGrad from '../components/horizon/LinesGrad'
// import CircleMono from '../components/primary/CircleMono'
import TriangleOutline from '../components/secondary/TriangleOutline'
import TriangleMono from '../components/primary/TriangleMono'
import TriangleSolid from '../components/secondary/TriangleSolid'
import BGLinesGrad from '../components/bg/LinesGrad'
import BarGraph from '../components/horizon/BarGraph'
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
      z-index: 6;
    }
    .layer-horizon{
      z-index: 5;
    }
    .layer-floor{
      z-index: 4;
    }
    .layer-tertiary{
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

    // @TODO actually implement input
    // const input = Math.floor(Math.random()*1000000).toString();
    const input = "abcd w"; // "abc";

    const seed = Seed( input );
    // map the seed value to screen y value
    seed.horizonY = ( seed.horizonY / 100 ) * windowSize.height;

    return (
      <svg id="container">
        {/*
          <TrianglePrism width="500" height="500" color="#DC00FF" />
          <CircleMono width="500" height="500" color="#DC00FF" seed={seed} />
        */}

        <BGLinesGrad
          windowSize={windowSize}
          className="layer-bg"
          seed={seed} />
        <Grid
          windowSize={windowSize}
          className="layer-floor"
          seed={seed} />
        <BarGraph
          windowSize={windowSize}
          className="layer-horizon"
          seed={seed} />
        <TriangleOutline
          windowSize={windowSize}
          className="layer-tertiary"
          seed={seed} />
        <TriangleSolid
          windowSize={windowSize}
          className="layer-secondary"
          seed={seed} />
        <TriangleMono
          windowSize={windowSize}
          className="layer-primary"
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
