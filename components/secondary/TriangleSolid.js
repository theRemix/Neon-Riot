import GlowFilterProvider from "../effects/GlowFilter";
import { Layer, Mode } from "../../lib/constants";

export default ({ windowSize, seed, layer }) => {

  const color = seed[layer.toLowerCase()].color;
  const glowColor = seed[layer.toLowerCase()].glowColor;

  // @DEBUG 12345424231334141313123
  seed[layer.toLowerCase()].splitX = 50;

  const polyProps = {
    strokeWidth: 0,
    fill: color
  }

  const mode = layer === Layer.SECONDARY ? seed[layer.toLowerCase()].mode : Mode.SINGLE;

  // @TODO to come from constants
  const size = {
    width : 400,
    height : 400
  };

  // @TODO to come from constants
  // Layer.SECONDARY top of secondary touches 66% height of primary
  // Layer.TERTIARY bottom of tertiary touches 66% height of primary
  const offsetFromPrimary = layer === Layer.SECONDARY ? 180 : 40 ;

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
    transform : "translateX(0px) rotate(180deg)",
    transformOrigin : `200px 200px`,
  };

  const splitX = seed[layer.toLowerCase()].splitX / 100 * size.width;
  let xOffset;
  let sizeOffset;
  if( mode === Mode.SINGLE ){
    xOffset = 0;
    sizeOffset = 0;
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


