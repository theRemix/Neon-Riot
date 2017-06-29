import GlowFilterProvider from "../effects/GlowFilter";
import { RAND, Mode, Layer } from "../../lib/constants";

export default ({ windowSize, seed }) => {
  const layer = Layer.SECONDARY.toLowerCase();
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
    width : 400,
    height : 400,
  };

  const mode = seed[layer].mode;


  // @TODO to come from constants
  // Layer.SECONDARY top of secondary touches 66% height of primary
  // Layer.TERTIARY bottom of tertiary touches 66% height of primary
  // const offsetFromPrimary = layer === Layer.SECONDARY ? 180 : 40  ;
  const offsetFromPrimary = ( mode === Mode.SINGLE ) ?
    RAND.secondary.offsetY.MAX  :
    seed[layer].offsetY;

  const offsetForGlow = 10;

  const {
    GlowFilter,
    GlowFilterDef
  } = GlowFilterProvider()

  const trans1 = {
    transform : "translateX(0px) scale(2) rotate(180deg)",
    transformOrigin : `200px 200px`,
  };

  const trans2 = {
    // will be replaced ----v
    transform : "translateX(0px) scale(2) rotate(180deg)",
    transformOrigin : `200px 200px`,
  };

  const splitX = seed[layer].splitX;
  let xOffset;
  let sizeOffset;
  if( mode === Mode.SINGLE ){
    xOffset = -size.width/2 - ( offsetForGlow / 2);
    sizeOffset = size.width;
  } else { // Mode.DOUBLE
    xOffset = -splitX/2 - ( offsetForGlow / 2);
    sizeOffset = splitX;
    trans2.transform = `translateX(${ splitX }px) scale(2) rotate(180deg)`;
    size.width *= 2;
    size.height *= 2;
  }

  return (
    <svg
      width={size.width+offsetForGlow+sizeOffset}
      height={size.height+offsetForGlow+sizeOffset}
      x={( windowSize.width / 2 ) - ( size.width / 2 ) + offsetForGlow + xOffset}
      y={( windowSize.height / 2 ) - ( size.height / 2 ) + offsetFromPrimary} >
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


