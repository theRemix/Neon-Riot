import React from 'react'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../lib/store'
import * as Actions from '../lib/actions';
// import TrianglePrism from '../components/primary/TrianglePrism'
import CircleMono from '../components/primary/CircleMono'
import LinesGrad from '../components/horizon/LinesGrad'

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
    // @TODO actually implement seed
    const seed = Math.floor(Math.random()*100);

    // @TODO real seeded horizonPosition
    const horizonPosition = 500;

    return (
      <svg id="container">
        {/*
          <TrianglePrism width="500" height="500" color="#DC00FF" />
          <CircleMono width="500" height="500" color="#DC00FF" seed={seed} />
        */}

        <LinesGrad
          className="layer-horizon"
          horizonPosition={horizonPosition}
          color="#DC00FF"
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

export function mapStateToProps(state) {
  return state;
}

export function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch),
  };
}

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(NeonRiot)
