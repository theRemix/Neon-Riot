import GlowFilterProvider from "../effects/GlowFilter";

export default ({ windowSize, horizonPosition, color, seed }) => {
  // @TODO actually implement seed
  const strokeWidthVals = [1,2,3,4,5,6,7]
  const strokeWidth = strokeWidthVals[seed % strokeWidthVals.length]

  const polyProps = {
    stroke: color,
    strokeWidth,
    fill: "rgba(0,0,0,0.75)"
  }

  const minY = 200
  const numYVals = 1000
  const yVals = Array(numYVals).fill(null)
    .map((_,i) => ( ( horizonPosition - minY ) / numYVals * i) + minY )

  const y = yVals[seed % numYVals]

  const minSize = 700;
  const maxSize = 1200;
  const numSizeVals = 1000;
  const sizes = Array(numSizeVals).fill(null)
    .map((_,i) => ( ( maxSize - minSize ) / numSizeVals * i ) + minSize )

  const offsetForGlow = 5;

  const size = sizes[seed % numSizeVals] + offsetForGlow;

  const {
    GlowFilter,
    GlowFilterDef
  } = GlowFilterProvider()

  return (
    <svg
      width={size}
      height={size}
      y={y}
      x={(windowSize.width / 2) - (size / 2)}
      viewBox="0 0 203.17 175.95">
      <defs>
        <GlowFilterDef color={color} />
      </defs>
      <polygon { ...polyProps } filter={GlowFilter} points="101.58 2.3 1.99 174.8 201.18 174.8 101.58 2.3"/>
    </svg>
  )
}


