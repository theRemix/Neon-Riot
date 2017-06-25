import React from 'react'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../lib/store'
import * as Actions from '../lib/actions';
import { Layer } from '../lib/constants';
import Seed from '../lib/Seed';

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
    const input = "abcd wa";

    const seed = Seed( input );
    // map the seed value to screen y value
    seed.horizonY = ( seed.horizonY / 100 ) * windowSize.height;

    const setPropsFor = className => ({
      windowSize,
      className,
      seed
    })

    const BG = seed.bg;
    const Floor = seed.floor;
    const Horizon = seed.horizon;
    const Tertiary = seed.tertiary.shape;
    const Secondary = seed.secondary.shape;
    const Primary = seed.primary.shape;

    return (
      <svg id="container">

        <BG { ...setPropsFor('layer-bg') } />
        <Floor { ...setPropsFor('layer-floor') } />
        <Horizon { ...setPropsFor('layer-horizon') } />
        <Tertiary { ...setPropsFor('layer-tertiary') } layer={ Layer.TERTIARY } />
        <Secondary { ...setPropsFor('layer-secondary') } layer={ Layer.SECONDARY } />
        <Primary { ...setPropsFor('layer-primary') } />

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
