import GlowFilterProvider from "../effects/GlowFilter";
import { RAND, Mode, Layer } from "../../lib/constants";

export default ({ windowSize, seed }) => {
  const layer = Layer.TERTIARY.toLowerCase();
  const strokeWidth = 1.2;

  const color = seed[layer].color;
  const glowColor = seed[layer].glowColor;

  const polyProps = {
    stroke: color,
    strokeWidth,
    fill: "none"
  }

  // @TODO to come from constants
  const size = {
    width : 800,
    height : 800,
  };

  const mode = seed[layer].mode;

  // @TODO to come from constants
  // Layer.TERTIARY bottom of tertiary touches 66% height of primary
  const offsetFromPrimary = ( mode === Mode.SINGLE ) ?
    RAND.tertiary.offsetY.MAX :
    seed[layer].offsetY;

  const offsetForGlow = 10;

  const {
    GlowFilter,
    GlowFilterDef
  } = GlowFilterProvider()

  const trans1 = {
    transform : "translateY(0px) scale(2) rotate(180deg)",
    transformOrigin : `200px 200px`,
  };

  const trans2 = {
    // will be replaced ----v
    transform : "translateY(0px) scale(2) rotate(180deg)",
    transformOrigin : `200px 200px`,
  };

  const splitY = seed[layer].splitY;
  let yOffset;
  let sizeOffset;
  if( mode === Mode.SINGLE ){
    yOffset = 0;
    sizeOffset = 0;
  } else { // Mode.DOUBLE
    yOffset = splitY/2 - ( offsetForGlow / 2);
    sizeOffset = splitY;
    trans2.transform = `translateY(${ -splitY }px) scale(2) rotate(180deg)`;
  }

  return (
    <svg
      width={size.width+offsetForGlow+sizeOffset}
      height={size.height+offsetForGlow+sizeOffset}
      x={( windowSize.width / 2 ) - ( size.width / 2 ) + offsetForGlow/2}
      y={( windowSize.height / 2 ) - ( size.height / 2 ) + offsetFromPrimary + yOffset}>
      <defs>
        <GlowFilterDef color={glowColor} />
      </defs>
      <g style={ trans1 } filter={GlowFilter}>
        <polygon { ...polyProps } points="101.58 2.3 1.99 174.8 201.18 174.8 101.58 2.3"/>
      </g>
      { ( mode === Mode.DOUBLE ) ?
        <g style={ trans2 } filter={GlowFilter}>
          <polygon { ...polyProps } points="101.58 2.3 1.99 174.8 201.18 174.8 101.58 2.3"/>
        </g>
        : null
      }
    </svg>
  )
}


