import GlowFilterProvider from "../effects/GlowFilter";
import { Layer } from "../../lib/constants";

export default ({ windowSize, seed, layer }) => {
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


  // @TODO to come from constants
  // Layer.SECONDARY top of secondary touches 66% height of primary
  // Layer.TERTIARY bottom of tertiary touches 66% height of primary
  const offsetFromPrimary = layer === Layer.SECONDARY ? -120 : 50 ;

  const offsetForGlow = 10;

  const {
    GlowFilter,
    GlowFilterDef
  } = GlowFilterProvider()

  return (
    <svg
      width={size.width+offsetForGlow}
      height={size.height+offsetForGlow}
      x={( windowSize.width / 2 ) - ( size.width / 2 )}
      y={( windowSize.height / 2 ) - ( size.height / 2 ) + offsetFromPrimary}
      transform={`rotate(180,${( windowSize.width / 2 )},${( windowSize.height / 2 )})` }
      viewBox="0 0 223.17 195.95"
      preserveAspectRatio="none">
      <defs>
        <GlowFilterDef color={glowColor} />
      </defs>
      <g transform={ `translate(${offsetForGlow},${offsetForGlow})` } filter={GlowFilter}>
        <polygon { ...polyProps } points="101.58 2.3 1.99 174.8 201.18 174.8 101.58 2.3"/>
      </g>
    </svg>
  )
}


