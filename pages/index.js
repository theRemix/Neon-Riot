import React from 'react'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'
import Head from 'next/head'
import * as ReactGA from 'react-ga';
import { initStore } from '../lib/store'
import * as Actions from '../lib/actions';
import { Layer } from '../lib/constants';
import Seed from '../lib/Seed';
import Loading from '../components/Loading';

const Styles = `
  body {
    background-color: #000;
    background-image: url(http://api.thumbr.it/whitenoise-100x100.png?background=00000000&noise=555555&density=14&opacity=40);
    font-family: 'Montserrat', sans-serif;
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
  .inputContainer {
    background: #000;
    color: #666;
    border: 1px solid #333;
    border-right: 0;
    position: absolute;
    top: 0;
    right: 0;
    transition: transform 0.5s;
  }
  .toggle {
    position: absolute;
    top: -1px;
    left: -7px;
    width: 7px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 8px;
    background: #000;
    color: #333;
    border: 1px solid #333;
    cursor: pointer;
  }
  .inputLabel {
    display: block;
    margin: 30px 35px;
  }
  .inputLabel p {
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 12px;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  .inputLabel input {
    padding: 8px 12px;
    background: #000;
    color: #FF00FF;
    text-shadow: 0 0 10px #FF00FF;
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    font-weight: 600;
    outline: 0;
    letter-spacing: 1px;
    border: 1px solid #666;
  }
  .center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

class NeonRiot extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.toggleInput = this.toggleInput.bind(this);
    this.state = {
      showInput: true
    }
  }

  componentDidMount () {
    const { actions } = this.props;
    actions.getWindowSize();

    ReactGA.initialize('UA-101501403-3');

    window.onhashchange = () => actions.locationHashUpdated( window.location.hash.substr(1) );
    actions.locationHashUpdated(
      window.location.hash.length > 1 ?
      window.location.hash.substr(1) :
      'Hello World'
    );
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  handleChange(event) {
    const { actions } = this.props;
    const { value } = event.target;

    actions.locationHashUpdated( value );
  }

  toggleInput() {
    this.setState((state) => ({
      showInput: !state.showInput,
    }))
  }

  render () {
    const { windowSize, hash } = this.props;
    const { showInput } = this.state;

    const seed = Seed( hash );
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

    let hideStyle;
    if (!showInput) {
      hideStyle = {
        transform: 'translateX(300px)',
      };
    }

    let content = <Loading className="center" />;
    if (windowSize.width !== 0) {
      content = (
        <div>
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
            <Tertiary { ...setPropsFor('layer-tertiary') } />
            <Secondary { ...setPropsFor('layer-secondary') }  />
            <Primary { ...setPropsFor('layer-primary') } />
          </svg>

          <div className="inputContainer" style={hideStyle}>
            <div className="toggle"  onClick={this.toggleInput}>〈</div>
            <label className="inputLabel">
              <p>Enter Some Text</p>
              <input type="text" onChange={this.handleChange} value={hash} />
            </label>
          </div>
        </div>
      );
    }

    return (
      <div>
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Montserrat:500,600" rel="stylesheet" />
          <style>{Styles}</style>
        </Head>

        {content}
      </div>
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

// https redirect if not localhost, and not http
try{
  if( location.port === "" && location.protocol !== "https:"){
    location.href = 'https:' + location.href.substring(location.protocol.length);
  }
}catch(err){}
