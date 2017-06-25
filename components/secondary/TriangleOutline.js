import GlowFilterProvider from "../effects/GlowFilter";
export default ({ horizonPosition, color, seed, windowSize }) => {

  // @TODO actually implement seed
  const strokeWidth = 1.2;

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
  const offsetFromPrimary = 50 ; // bottom of tertiary touches 66% height of primary

  const offsetForGlow = 5;


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
      viewBox="0 0 203.17 175.95">
      <defs>
        <GlowFilterDef color={color} />
      </defs>
      <polygon { ...polyProps } filter={GlowFilter} points="101.58 2.3 1.99 174.8 201.18 174.8 101.58 2.3"/>
    </svg>
  )
}


