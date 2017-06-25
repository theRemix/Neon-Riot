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

  const pathProps = {
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
    <svg width="100%" height={height} y={horizonPosition-height} viewBox="0 0 1066 232.57" preserveAspectRatio="none">
      <defs>
        <GlowFilterDef color={glowColor} />
      </defs>
      <g filter={GlowFilter}>
        <path { ...pathProps } d="M1029.34,174.57V158.7h-21.89V130.79H967v36.66H952.18V151H928.65V134.62h-2.19v-3.83h-3.83V116h-2.74v14.78h-3.83v3.83h-4.38v-3.83h-3.83V116h-2.74v14.78h-3.83v3.83H899.1v23.53H888.15V151H858.6v23.53H852V127h-39.4v47.61h-8.21v15.87h-8.76v-41h-8.21V133h-6a9.84,9.84,0,0,0-19.64,0h-6v16.42h-8.21v16.42H734.65V157.6H724.53V107.8h-29v49.8H685.4v8.21H673.64v24.63H660.5V174.57H649v-12H627.67V141.73H598.12v25.72h-3.28V154.32H565.29v13.13h-9.85V157.6H531.91V139.54H518.77V123.13H516v16.42H502.36v12.59H452V136.81H431.76V119.3H391.27v39.4H373.21V130.79H332.71v36.66H317.94V151H294.41V134.62h-2.19v-3.83h-3.83V116h-2.74v14.78h-3.83v3.83h-4.38v-3.83h-3.83V116h-2.74v14.78H267v3.83h-2.19v23.53H253.91V151H224.36v23.53H217.8V127h-6.57v-41h-7.66V58.55h-3.83V0h-3.28V58.55h-3.83V85.91H185v41H178.4v47.61h-8.21v15.87h-8.76v-41h-8.21V111.09h-6a9.84,9.84,0,0,0-19.64,0h-6v38.31h-8.21v16.42H92.48V141.73H65.12v24.08H39.4v24.63H26.27V174.57H0v58H1066v-58Z"/>
      </g>
    </svg>
  )
}
