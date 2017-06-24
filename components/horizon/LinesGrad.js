import { GlowFilter, GlowFilterDef } from "../effects/GlowFilter";
export default ({ horizonPosition, color, seed }) => {
  /*
   * Should know horizon position
   *   - fills from horizon, up to random height
   */

  const lineProps = {
    stroke: color,
    fill: "rgba(0,0,0,0.75)"
  }

  const minHeight = 100
  const numHeightVals = 1000
  const heights = Array(numHeightVals).fill(null)
    .map((_,i) => ( ( horizonPosition - minHeight ) / numHeightVals * i ) + minHeight)

  const height = heights[seed % numHeightVals]

  return (
    <svg width="100%" height={height} y={horizonPosition-height} viewBox="0 0 1360.72 249.97" preserveAspectRatio="none">
      <defs>
        <GlowFilterDef color={color} />
      </defs>
      <g transform="translate(5,5)" filter={GlowFilter}>
        <line { ...lineProps } strokeWidth="2.95px" y1="1.47" x2="1360.72" y2="1.47"/>
        <line { ...lineProps } strokeWidth="4.26px" y1="19.82" x2="1360.72" y2="19.82"/>
        <line { ...lineProps } strokeWidth="5.57px" y1="38.17" x2="1360.72" y2="38.17"/>
        <line { ...lineProps } strokeWidth="6.88px" y1="56.51" x2="1360.72" y2="56.51"/>
        <line { ...lineProps } strokeWidth="8.2px" y1="74.86" x2="1360.72" y2="74.86"/>
        <line { ...lineProps } strokeWidth="9.51px" y1="93.21" x2="1360.72" y2="93.21"/>
        <line { ...lineProps } strokeWidth="10.82px" y1="111.55" x2="1360.72" y2="111.55"/>
        <line { ...lineProps } strokeWidth="12.13px" y1="129.9" x2="1360.72" y2="129.9"/>
        <line { ...lineProps } strokeWidth="13.44px" y1="148.24" x2="1360.72" y2="148.24"/>
        <line { ...lineProps } strokeWidth="14.75px" y1="166.59" x2="1360.72" y2="166.59"/>
        <line { ...lineProps } strokeWidth="16.07px" y1="184.94" x2="1360.72" y2="184.94"/>
        <line { ...lineProps } strokeWidth="17.38px" y1="203.28" x2="1360.72" y2="203.28"/>
        <line { ...lineProps } strokeWidth="18.69px" y1="221.63" x2="1360.72" y2="221.63"/>
        <line { ...lineProps } strokeWidth="20px" y1="239.97" x2="1360.72" y2="239.97"/>
      </g>
    </svg>
  )
}


