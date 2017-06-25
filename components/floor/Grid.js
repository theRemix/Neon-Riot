import GlowFilterProvider from "../effects/GlowFilter";
export default ({ horizonPosition, color, seed }) => {
  /*
   * Should know horizon position
   *   - fills from horizon, up to very bottom of screen
   */

  const lineProps = {
    stroke: color,
    strokeWidth: 1,
    fill: "rgba(0,0,0,0.75)"
  }

  const height = window.innerHeight - horizonPosition;
  const width = window.innerWidth * 3;
  const x = -width / 3;

  const {
    GlowFilter,
    GlowFilterDef
  } = GlowFilterProvider()

  return (
    <svg width={width} x={x} height={height} y={horizonPosition} viewBox="0 0 2506.93 252.55" preserveAspectRatio="none">
      <defs>
        <GlowFilterDef color={color} />
      </defs>
      <g filter={GlowFilter}>
        <line { ...lineProps } x1="838.07" y1="0.9" x2="0.11" y2="252.17"/>
        <line { ...lineProps } x1="864.3" y1="0.89" x2="80.98" y2="252.17"/>
        <line { ...lineProps } x1="890.54" y1="0.87" x2="161.84" y2="252.17"/>
        <line { ...lineProps } x1="916.78" y1="0.86" x2="242.7" y2="252.17"/>
        <line { ...lineProps } x1="943.01" y1="0.85" x2="323.56" y2="252.17"/>
        <line { ...lineProps } x1="969.25" y1="0.83" x2="404.42" y2="252.17"/>
        <line { ...lineProps } x1="995.49" y1="0.82" x2="485.28" y2="252.17"/>
        <line { ...lineProps } x1="1021.72" y1="0.81" x2="566.14" y2="252.17"/>
        <line { ...lineProps } x1="1047.96" y1="0.8" x2="647.01" y2="252.17"/>
        <line { ...lineProps } x1="1074.19" y1="0.78" x2="727.87" y2="252.17"/>
        <line { ...lineProps } x1="1100.43" y1="0.77" x2="808.73" y2="252.17"/>
        <line { ...lineProps } x1="1126.67" y1="0.76" x2="889.59" y2="252.17"/>
        <line { ...lineProps } x1="1152.9" y1="0.75" x2="970.45" y2="252.17"/>
        <line { ...lineProps } x1="1179.14" y1="0.73" x2="1051.31" y2="252.17"/>
        <line { ...lineProps } x1="1205.38" y1="0.72" x2="1132.18" y2="252.17"/>
        <line { ...lineProps } x1="1231.61" y1="0.71" x2="1213.04" y2="252.17"/>
        <line { ...lineProps } x1="1257.85" y1="0.69" x2="1293.9" y2="252.17"/>
        <line { ...lineProps } x1="1284.08" y1="0.68" x2="1374.76" y2="252.17"/>
        <line { ...lineProps } x1="1310.32" y1="0.67" x2="1455.62" y2="252.17"/>
        <line { ...lineProps } x1="1336.56" y1="0.66" x2="1536.48" y2="252.17"/>
        <line { ...lineProps } x1="1362.79" y1="0.64" x2="1617.35" y2="252.17"/>
        <line { ...lineProps } x1="1389.03" y1="0.63" x2="1698.21" y2="252.17"/>
        <line { ...lineProps } x1="1415.27" y1="0.62" x2="1779.07" y2="252.17"/>
        <line { ...lineProps } x1="1441.5" y1="0.61" x2="1859.93" y2="252.17"/>
        <line { ...lineProps } x1="1467.74" y1="0.59" x2="1940.79" y2="252.17"/>
        <line { ...lineProps } x1="1493.97" y1="0.58" x2="2021.65" y2="252.17"/>
        <line { ...lineProps } x1="1520.21" y1="0.57" x2="2102.51" y2="252.17"/>
        <line { ...lineProps } x1="1546.45" y1="0.55" x2="2183.38" y2="252.17"/>
        <line { ...lineProps } x1="1572.68" y1="0.54" x2="2264.24" y2="252.17"/>
        <line { ...lineProps } x1="1598.92" y1="0.53" x2="2345.1" y2="252.17"/>
        <line { ...lineProps } x1="1625.16" y1="0.52" x2="2425.96" y2="252.17"/>
        <line { ...lineProps } x1="1651.39" y1="0.5" x2="2506.82" y2="252.17"/>
        <line { ...lineProps } x1="21.97" y1="243.4" x2="2497.51" y2="243.39"/>
        <line { ...lineProps } x1="64.8" y1="230.64" x2="2453.34" y2="230.6"/>
        <line { ...lineProps } x1="107.62" y1="217.87" x2="2409.17" y2="217.82"/>
        <line { ...lineProps } x1="150.44" y1="205.11" x2="2364.99" y2="205.04"/>
        <line { ...lineProps } x1="193.27" y1="192.35" x2="2320.82" y2="192.25"/>
        <line { ...lineProps } x1="236.09" y1="179.58" x2="2276.65" y2="179.47"/>
        <line { ...lineProps } x1="278.91" y1="166.82" x2="2232.47" y2="166.69"/>
        <line { ...lineProps } x1="321.73" y1="154.06" x2="2188.3" y2="153.9"/>
        <line { ...lineProps } x1="364.56" y1="141.29" x2="2144.13" y2="141.12"/>
        <line { ...lineProps } x1="407.38" y1="128.53" x2="2099.95" y2="128.33"/>
        <line { ...lineProps } x1="450.2" y1="115.77" x2="2055.78" y2="115.55"/>
        <line { ...lineProps } x1="493.03" y1="103" x2="2011.61" y2="102.77"/>
        <line { ...lineProps } x1="535.85" y1="90.24" x2="1967.43" y2="89.98"/>
        <line { ...lineProps } x1="578.67" y1="77.48" x2="1923.26" y2="77.2"/>
        <line { ...lineProps } x1="621.49" y1="64.72" x2="1879.09" y2="64.42"/>
        <line { ...lineProps } x1="664.32" y1="51.95" x2="1834.92" y2="51.63"/>
        <line { ...lineProps } x1="707.14" y1="39.19" x2="1790.74" y2="38.85"/>
        <line { ...lineProps } x1="749.96" y1="26.43" x2="1746.57" y2="26.07"/>
        <line { ...lineProps } x1="792.79" y1="13.66" x2="1702.4" y2="13.28"/>
        <line { ...lineProps } x1="835.61" y1="0.9" x2="1658.22" y2="0.5"/>
      </g>
    </svg>
  )
}


