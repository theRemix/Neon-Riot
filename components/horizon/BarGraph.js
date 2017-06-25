import GlowFilterProvider from "../effects/GlowFilter";

const COLORS = [
  "#CD00CB",
  "#FF49F3",
  "#4FD4F7",
  "#FF49F3",
  "#1566FE",
  "#FF49F3",
  "#FF00D0"
];

export default ({ seed }) => {
  /*
   * Should know horizon position
   *   - fills from horizon, up to random height
   */

  const horizonPosition = seed.horizonY;
  const color = seed.select( seed.slices[1], COLORS );

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
    <svg width="100%" height={height} y={horizonPosition-height} viewBox="0 0 888.23 156" preserveAspectRatio="none">
      <defs>
        <GlowFilterDef color={color} strength="0.4" />
      </defs>
      <g fill={color} filter={GlowFilter}>
        <rect y="116.04" width="5.44" height="39.96"/>
        <rect x="7.68" y="92.56" width="5.44" height="63.44"/>
        <rect x="15.35" width="5.44" height="156"/>
        <rect x="23.03" y="110.62" width="5.44" height="45.38"/>
        <rect x="30.71" y="37.69" width="5.44" height="118.31"/>
        <rect x="38.38" y="44.54" width="5.44" height="111.46"/>
        <rect x="46.06" y="100.56" width="5.44" height="55.44"/>
        <rect x="53.73" y="51.16" width="5.44" height="104.84"/>
        <rect x="61.41" y="89.98" width="5.44" height="66.02"/>
        <rect x="69.09" y="134.18" width="5.44" height="21.82"/>
        <rect x="76.76" y="116.04" width="5.44" height="39.96"/>
        <rect x="84.44" y="133.19" width="5.44" height="22.81"/>
        <rect x="92.12" y="140.05" width="5.44" height="15.95"/>
        <rect x="99.79" y="116.04" width="5.44" height="39.96"/>
        <rect x="107.47" y="102.32" width="5.44" height="53.68"/>
        <rect x="115.15" y="144.45" width="5.44" height="11.55"/>
        <rect x="122.82" y="99" width="5.44" height="57"/>
        <rect x="130.5" y="80.53" width="5.44" height="75.47"/>
        <rect x="138.17" y="73.17" width="5.44" height="82.83"/>
        <rect x="145.85" y="128.3" width="5.44" height="27.7"/>
        <rect x="153.53" y="116.04" width="5.44" height="39.96"/>
        <rect x="161.2" y="102.32" width="5.44" height="53.68"/>
        <rect x="168.88" y="146.65" width="5.44" height="9.35"/>
        <rect x="176.56" y="84.88" width="5.44" height="71.12"/>
        <rect x="184.23" y="67.1" width="5.44" height="88.9"/>
        <rect x="191.91" y="93.75" width="5.44" height="62.25"/>
        <rect x="199.59" y="93.75" width="5.44" height="62.25"/>
        <rect x="207.26" y="138.56" width="5.44" height="17.44"/>
        <rect x="214.94" y="128.04" width="5.44" height="27.96"/>
        <rect x="222.61" y="125.47" width="5.44" height="30.53"/>
        <rect x="230.29" y="90.32" width="5.44" height="65.68"/>
        <rect x="237.97" y="92.8" width="5.44" height="63.2"/>
        <rect x="245.64" y="92.56" width="5.44" height="63.44"/>
        <rect x="253.32" y="150.19" width="5.44" height="5.81"/>
        <rect x="261" y="116.04" width="5.44" height="39.96"/>
        <rect x="268.67" y="72.88" width="5.44" height="83.12"/>
        <rect x="276.35" y="107.35" width="5.44" height="48.65"/>
        <rect x="284.03" y="31.24" width="5.44" height="124.76"/>
        <rect x="291.7" y="89.74" width="5.44" height="66.26"/>
        <rect x="299.38" y="89.98" width="5.44" height="66.02"/>
        <rect x="307.05" y="140.21" width="5.44" height="15.79"/>
        <rect x="314.73" y="131.72" width="5.44" height="24.28"/>
        <rect x="322.41" y="133.19" width="5.44" height="22.81"/>
        <rect x="330.08" y="140.05" width="5.44" height="15.95"/>
        <rect x="337.76" y="116.04" width="5.44" height="39.96"/>
        <rect x="345.44" y="144.09" width="5.44" height="11.91"/>
        <rect x="353.11" y="95.46" width="5.44" height="60.54"/>
        <rect x="360.79" y="138.39" width="5.44" height="17.61"/>
        <rect x="368.47" y="50.88" width="5.44" height="105.12"/>
        <rect x="376.14" y="147.99" width="5.44" height="8.01"/>
        <rect x="383.82" y="83.46" width="5.44" height="72.54"/>
        <rect x="391.5" y="137.32" width="5.44" height="18.68"/>
        <rect x="399.17" y="102.32" width="5.44" height="53.68"/>
        <rect x="406.85" y="59.46" width="5.44" height="96.54"/>
        <rect x="414.52" y="25.16" width="5.44" height="130.84"/>
        <rect x="422.2" y="67.1" width="5.44" height="88.9"/>
        <rect x="429.88" y="122.16" width="5.44" height="33.84"/>
        <rect x="437.55" y="122.16" width="5.44" height="33.84"/>
        <rect x="445.23" y="152.13" width="5.44" height="3.87"/>
        <rect x="452.91" y="128.04" width="5.44" height="27.96"/>
        <rect x="460.58" y="119.92" width="5.44" height="36.08"/>
        <rect x="468.26" y="131.35" width="5.44" height="24.65"/>
        <rect x="475.94" y="116.04" width="5.44" height="39.96"/>
        <rect x="483.61" y="92.56" width="5.44" height="63.44"/>
        <rect x="491.29" y="95.99" width="5.44" height="60.01"/>
        <rect x="498.96" y="116.04" width="5.44" height="39.96"/>
        <rect x="506.64" y="37.69" width="5.44" height="118.31"/>
        <rect x="514.32" y="95.41" width="5.44" height="60.59"/>
        <rect x="521.99" y="31.24" width="5.44" height="124.76"/>
        <rect x="529.67" y="61.69" width="5.44" height="94.31"/>
        <rect x="537.35" y="130.78" width="5.44" height="25.22"/>
        <rect x="545.02" y="84.84" width="5.44" height="71.16"/>
        <rect x="552.7" y="134.28" width="5.44" height="21.72"/>
        <rect x="560.38" y="133.19" width="5.44" height="22.81"/>
        <rect x="568.05" y="140.05" width="5.44" height="15.95"/>
        <rect x="575.73" y="92.8" width="5.44" height="63.2"/>
        <rect x="583.4" y="102.32" width="5.44" height="53.68"/>
        <rect x="591.08" y="119.22" width="5.44" height="36.78"/>
        <rect x="598.76" y="76.6" width="5.44" height="79.4"/>
        <rect x="606.43" y="50.88" width="5.44" height="105.12"/>
        <rect x="614.11" y="84.79" width="5.44" height="71.21"/>
        <rect x="621.79" y="83.46" width="5.44" height="72.54"/>
        <rect x="629.46" y="116.04" width="5.44" height="39.96"/>
        <rect x="637.14" y="147.63" width="5.44" height="8.37"/>
        <rect x="644.82" y="88.14" width="5.44" height="67.86"/>
        <rect x="652.49" y="62.06" width="5.44" height="93.94"/>
        <rect x="660.17" y="52.6" width="5.44" height="103.4"/>
        <rect x="667.84" y="148.49" width="5.44" height="7.51"/>
        <rect x="675.52" y="57.54" width="5.44" height="98.46"/>
        <rect x="683.2" y="152.13" width="5.44" height="3.87"/>
        <rect x="690.87" y="139.01" width="5.44" height="16.99"/>
        <rect x="698.55" y="105.75" width="5.44" height="50.25"/>
        <rect x="706.23" y="90.32" width="5.44" height="65.68"/>
        <rect x="713.9" y="138.63" width="5.44" height="17.37"/>
        <rect x="721.58" y="77.12" width="5.44" height="78.88"/>
        <rect x="729.26" y="61.69" width="5.44" height="94.31"/>
        <rect x="736.93" y="89.98" width="5.44" height="66.02"/>
        <rect x="744.61" y="84.84" width="5.44" height="71.16"/>
        <rect x="752.28" y="116.04" width="5.44" height="39.96"/>
        <rect x="759.96" y="138.56" width="5.44" height="17.44"/>
        <rect x="767.64" y="145.76" width="5.44" height="10.24"/>
        <rect x="775.31" y="112.54" width="5.44" height="43.46"/>
        <rect x="782.99" y="76.6" width="5.44" height="79.4"/>
        <rect x="790.67" y="50.88" width="5.44" height="105.12"/>
        <rect x="798.34" y="96.53" width="5.44" height="59.47"/>
        <rect x="806.02" y="83.46" width="5.44" height="72.54"/>
        <rect x="813.7" y="52.13" width="5.44" height="103.87"/>
        <rect x="821.37" y="147.45" width="5.44" height="8.55"/>
        <rect x="829.05" y="59.46" width="5.44" height="96.54"/>
        <rect x="836.72" y="25.16" width="5.44" height="130.84"/>
        <rect x="844.4" y="41.1" width="5.44" height="114.9"/>
        <rect x="852.08" y="93.75" width="5.44" height="62.25"/>
        <rect x="859.75" y="93.75" width="5.44" height="62.25"/>
        <rect x="867.43" y="127.31" width="5.44" height="28.69"/>
        <rect x="875.11" y="105.75" width="5.44" height="50.25"/>
        <rect x="882.78" y="90.32" width="5.44" height="65.68"/>
      </g>
    </svg>
  )
}


