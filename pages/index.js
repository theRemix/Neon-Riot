import React from 'react'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'
import Head from 'next/head'
import { initStore } from '../lib/store'
import * as Actions from '../lib/actions';
import { Layer } from '../lib/constants';
import Seed from '../lib/Seed';
import Loading from '../components/Loading';

const Styles = `
  body {
    background-color: #000;
    background-image: url('data:image/png;base64,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');
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
