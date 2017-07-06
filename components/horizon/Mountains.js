import GlowFilterProvider from "../effects/GlowFilter";
import { COLORS } from "../../lib/constants";

export default ({ windowSize, seed }) => {
  /*
   * Should know horizon position
   *   - fills from horizon, up to random height
   */

  const horizonPosition = seed.horizonY;
  const color = seed.select(seed.slices[7], COLORS.BLACKS);
  const glowColor = seed.horizon.glowColor;

  const polyProps = {
    stroke: "none",
    fill: color
  }

  const minHeight = 200
  const numHeightVals = 1000
  const heights = Array(numHeightVals).fill(null)
    .map((_,i) => ( ( horizonPosition - minHeight ) / numHeightVals * i ) + minHeight)

  const height = seed.select(seed.slices[2], heights);

  const {
    GlowFilter,
    GlowFilterDef
  } = GlowFilterProvider()

  return (
    <svg width="100%" height={height} y={horizonPosition-height} >
      <defs>
        <GlowFilterDef color={glowColor} />
      </defs>
      <svg viewBox="0 0 197.92 72" preserveAspectRatio="none">
        <g filter={GlowFilter} transform="translate(0,5)">
          <polygon { ...polyProps } points="197.92 71.37 161.87 28 122.87 0 85.87 25 61.87 49 40.87 27 13.87 51 0 72 197.92 71.37"/>
        </g>
      </svg>
      <svg width="100%" height={height} y={horizonPosition-height} viewBox="0 0 558 115.33" preserveAspectRatio="none">
        <g filter={GlowFilter} transform="translate(0,5)">
          <polygon { ...polyProps } points="20 82 97 14 123 8 149 29 209 0 268 20 322 62 339 41 375 58 396 74 442 41 475 34 523 69 558 115.33 0 115.33 20 82"/>
        </g>
      </svg>
      <svg width="100%" height={height} y={horizonPosition-height} viewBox="0 0 726.02 163.72" preserveAspectRatio="none">
        <g filter={GlowFilter} transform="translate(0,5)">
          <polygon { ...polyProps } points="726.02 161.57 693.02 110 632.02 72 606.02 83 539.02 24 482.02 0 424.02 32 387.02 62 370.02 48 325.02 81 285.02 48 243.02 21 212.02 40 186.02 22 160.02 39 143.26 59.49 112.02 121 81.02 98 55.02 88 12.02 128 0 163.72 726.02 161.57"/>
        </g>
      </svg>
    </svg>
  )
}
