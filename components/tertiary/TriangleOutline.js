import GlowFilterProvider from "../effects/GlowFilter";
import { Mode, Layer } from "../../lib/constants";

export default ({ windowSize, seed }) => {
  const layer = Layer.TERTIARY.toLowerCase();
  const strokeWidth = 1.2;

  const color = seed[layer.toLowerCase()].color;
  const glowColor = seed[layer.toLowerCase()].glowColor;

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

  // seed[layer.toLowerCase()].mode
  const mode = Mode.DOUBLE;


  // @TODO to come from constants
  // Layer.SECONDARY top of secondary touches 66% height of primary
  // Layer.TERTIARY bottom of tertiary touches 66% height of primary
  const offsetFromPrimary = layer === Layer.SECONDARY ? 180 : 40  ;

  const offsetForGlow = 10;

  const {
    GlowFilter,
    GlowFilterDef
  } = GlowFilterProvider()

  const rotate = {
    transform : "rotate(180deg)",
    transformOrigin : `100px 100px`,
  };

  return (
    <svg
      width={size.width+offsetForGlow}
      height={size.height+offsetForGlow}
      x={( windowSize.width / 2 ) - ( size.width / 2 ) + ( offsetForGlow *2 )}
      y={( windowSize.height / 2 ) - ( size.height / 2 ) + offsetFromPrimary}
      viewBox="0 0 223.17 195.95"
      preserveAspectRatio="none">
      <defs>
        <GlowFilterDef color={glowColor} />
      </defs>
      <g style={ rotate } transform={ `translate(${offsetForGlow},${offsetForGlow})` } filter={GlowFilter}>
        <polygon { ...polyProps } points="101.58 2.3 1.99 174.8 201.18 174.8 101.58 2.3"/>
      </g>
    </svg>
  )
}


