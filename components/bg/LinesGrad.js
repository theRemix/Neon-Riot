import GlowFilterProvider from "../effects/GlowFilter";

const BG_COLORS = [
  "#121212",
  "#111111",
  "#212121",
  "#131213",
  "#121313"
];

export default ({ windowSize, seed }) => {
  /*
   * Should know horizon position
   *   - fills from horizon, up to random height
   */

  const color = seed.select( seed.slices[0], BG_COLORS );

  const lineProps = {
    stroke: color,
    fill: "rgba(0,0,0,0.75)"
  }

  const {
    GlowFilter,
    GlowFilterDef
  } = GlowFilterProvider()

  return (
    <svg width="100%" height="100%" viewBox="0 0 1360.72 249.97" preserveAspectRatio="none">
      <defs>
        <GlowFilterDef color={color} strength="0.8" />
      </defs>
      <g filter={GlowFilter}>
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


