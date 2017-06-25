import GlowFilterProvider from "../effects/GlowFilter";
import { Layer, Mode } from "../../lib/constants";

export default ({ windowSize, seed, layer }) => {

  const color = seed[layer.toLowerCase()].color;
  const glowColor = seed[layer.toLowerCase()].glowColor;

  const polyProps = {
    strokeWidth: 0,
    fill: color
  }

  const mode = layer === Layer.SECONDARY ? seed[layer.toLowerCase()].mode : Mode.SINGLE;

  // @TODO to come from constants
  const size = {
    width : 400,
    height : 400,
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
    transform : "translateX(0px) rotate(180deg)",
    transformOrigin : `100px 100px`,
  };

  const trans2 = {
    transform : "translateX(200px) rotate(180deg)",
    transformOrigin : `100px 100px`,
  };

      // original viewBox="0 0 223.17 195.95"
  const vb1 = 223.17;
  const vb2 = 195.95;
  let viewbox;
  let xOffset;
  let sizeOffset;
  if( mode === Mode.SINGLE ){
    viewbox = `0 0 ${vb1} ${vb2}`;
    xOffset = 0;
    sizeOffset = 0;
  } else {
    viewbox = `0 0 ${vb1*2} ${vb2*2}`;
    xOffset = -135;
    sizeOffset = 300;
  }
  return (
    <svg
      width={size.width+offsetForGlow+sizeOffset}
      height={size.height+offsetForGlow+sizeOffset}
      x={( windowSize.width / 2 ) - ( size.width / 2 ) + ( offsetForGlow *2 ) + xOffset}
      y={( windowSize.height / 2 ) - ( size.height / 2 ) + offsetFromPrimary}
      viewBox={viewbox}>
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
        : ""
      }
    </svg>
  )
}


