import GlowFilterProvider from "../effects/GlowFilter";
export default ({ horizonPosition, color, seed }) => {

  // @TODO actually implement seed
  const strokeWidthVals = [1,2,3,4,5,6,7]
  const strokeWidth = strokeWidthVals[seed % strokeWidthVals.length]

  const lineProps = {
    stroke: color,
    strokeWidth,
    fill: "rgba(0,0,0,0.75)"
  }

  const minCircumference = 200
  const maxCircumference = 500
  const numCircumferenceVals = 1000
  const circumferences = Array(numCircumferenceVals).fill(null)
    .map((_,i) => ( ( maxCircumference - minCircumference ) / numCircumferenceVals * i ) + minCircumference )

  const circumference = circumferences[seed % numCircumferenceVals];

  const minY = 200
  const numYVals = 1000
  const yVals = Array(numYVals).fill(null)
    .map((_,i) => ( ( horizonPosition - minY ) / numYVals * i) + minY )

  const y = yVals[seed % numYVals]

  const offsetForGlow = 5

  const {
    GlowFilter,
    GlowFilterDef
  } = GlowFilterProvider()

  return (
    <svg
      width={circumference+offsetForGlow}
      height={circumference+offsetForGlow}
      y={y}
      viewBox="0 0 265.85 257.71"
      preserveAspectRatio="none">
      <defs>
        <GlowFilterDef color={color} />
      </defs>
      <g transform={ `translate(${offsetForGlow},${offsetForGlow})` } filter={GlowFilter}>
        <line { ...lineProps } x1="96.6" y1="3" x2="159.25" y2="3" />
        <line { ...lineProps } x1="70.19" y1="12.87" x2="185.66" y2="12.87"/>
        <line { ...lineProps } x1="53.84" y1="22.74" x2="202.01" y2="22.74"/>
        <line { ...lineProps } x1="41.62" y1="32.61" x2="214.23" y2="32.61"/>
        <line { ...lineProps } x1="31.93" y1="42.47" x2="223.92" y2="42.47"/>
        <line { ...lineProps } x1="24.05" y1="52.34" x2="231.81" y2="52.34"/>
        <line { ...lineProps } x1="17.6" y1="62.21" x2="238.25" y2="62.21"/>
        <line { ...lineProps } x1="12.34" y1="72.08" x2="243.51" y2="72.08"/>
        <line { ...lineProps } x1="8.14" y1="81.95" x2="247.71" y2="81.95"/>
        <line { ...lineProps } x1="4.86" y1="91.82" x2="250.99" y2="91.82"/>
        <line { ...lineProps } x1="2.46" y1="101.68" x2="253.39" y2="101.68"/>
        <line { ...lineProps } x1="0.87" y1="111.55" x2="254.98" y2="111.55"/>
        <line { ...lineProps } x1="0.06" y1="121.42" x2="255.79" y2="121.42"/>
        <line { ...lineProps } y1="131.29" x2="255.85" y2="131.29"/>
        <line { ...lineProps } x1="0.69" y1="141.16" x2="255.16" y2="141.16"/>
        <line { ...lineProps } x1="2.16" y1="151.03" x2="253.69" y2="151.03"/>
        <line { ...lineProps } x1="4.44" y1="160.89" x2="251.42" y2="160.89"/>
        <line { ...lineProps } x1="7.56" y1="170.76" x2="248.29" y2="170.76"/>
        <line { ...lineProps } x1="11.62" y1="180.63" x2="244.23" y2="180.63"/>
        <line { ...lineProps } x1="16.69" y1="190.5" x2="239.16" y2="190.5"/>
        <line { ...lineProps } x1="22.94" y1="200.37" x2="232.91" y2="200.37"/>
        <line { ...lineProps } x1="30.58" y1="210.24" x2="225.27" y2="210.24"/>
        <line { ...lineProps } x1="39.96" y1="220.11" x2="215.9" y2="220.11"/>
        <line { ...lineProps } x1="51.71" y1="229.97" x2="204.14" y2="229.97"/>
        <line { ...lineProps } x1="67.22" y1="239.84" x2="188.64" y2="239.84"/>
        <line { ...lineProps } x1="164.87" y1="249.71" x2="90.98" y2="249.71"/>
      </g>
    </svg>
  )
}


