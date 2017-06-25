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
      background-image: url(http://api.thumbr.it/whitenoise-100x100.png?background=00000000&noise=555555&density=14&opacity=40);
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
    const { windowSize, input } = this.props;

    const seed = Seed( input );
    // map the seed value to screen y value
    seed.horizonY = ( seed.horizonY / 100 ) * windowSize.height;

    const setPropsFor = className => ({
      windowSize,
      className,
      seed
    });

    const BG = seed.bg.shape;
    const Floor = seed.floor.shape;
    const Horizon = seed.horizon.shape;
    const Tertiary = seed.tertiary.shape;
    const Secondary = seed.secondary.shape;
    const Primary = seed.primary.shape;

    return (
      <svg id="container" mask="url(#radialMask)">
        <defs>
          <filter id="radialMaskFilter">
            <feGaussianBlur stdDeviation="100"/>
          </filter>
          <mask id="radialMask">
            <ellipse cx="50%" cy="40%" rx="125%" ry="50%" fill="white" filter="url(#radialMaskFilter)" />
          </mask>
        </defs>

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
