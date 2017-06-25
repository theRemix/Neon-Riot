import GlowFilterProvider from "../effects/GlowFilter"

export default ({ windowSize, seed }) => {

  const color = seed.primary.color;
  const glowColor = seed.primary.glowColor;

  const {
    GlowFilter,
    GlowFilterDef
  } = GlowFilterProvider()

  const triangleProps = {
    fill: color
  };

  const lineProps = {
    stroke: "#000", // keep this black
    strokeWidth: "1px"
  };

  // @TODO to come from constants
  const size = {
    width : 400,
    height : 400,
  };
  const linesSize = {
    width : 330,
    height : 330,
    x : 25,
    y : 35,
  };

  return (
    <svg
      x={( windowSize.width / 2 ) - ( size.width / 2 ) + 15}
      y={( windowSize.height / 2 ) - ( size.height / 2 )}>
      <defs>
        <GlowFilterDef color={glowColor} />
      </defs>

      <svg
        { ...size }
        viewBox="0 0 223 195"
        preserveAspectRatio="none"
      >
        <g filter={GlowFilter} transform="translate(5,5)">
          <polygon { ...triangleProps } points="99.59 0 0 172.5 199.19 172.5 99.59 0"/>
        </g>
      </svg>
      <svg
        { ...linesSize }
        viewBox="0 0 240 205"
        preserveAspectRatio="none"
      >
        <g filter={GlowFilter} transform="translate(5,5)">
          <line { ...lineProps } x1="110.85" y1="0.5" x2="115.47" y2="0.5"/>
          <line { ...lineProps } x1="118.93" y1="6.5" x2="107.39" y2="6.5"/>
          <line { ...lineProps } x1="122.4" y1="12.5" x2="103.92" y2="12.5"/>
          <line { ...lineProps } x1="125.86" y1="18.5" x2="100.46" y2="18.5"/>
          <line { ...lineProps } x1="129.33" y1="24.5" x2="96.99" y2="24.5"/>
          <line { ...lineProps } x1="132.79" y1="30.5" x2="93.53" y2="30.5"/>
          <line { ...lineProps } x1="136.25" y1="36.5" x2="90.07" y2="36.5"/>
          <line { ...lineProps } x1="139.72" y1="42.5" x2="86.6" y2="42.5"/>
          <line { ...lineProps } x1="143.18" y1="48.5" x2="83.14" y2="48.5"/>
          <line { ...lineProps } x1="146.65" y1="54.5" x2="79.67" y2="54.5"/>
          <line { ...lineProps } x1="150.11" y1="60.5" x2="76.21" y2="60.5"/>
          <line { ...lineProps } x1="153.58" y1="66.5" x2="72.75" y2="66.5"/>
          <line { ...lineProps } x1="157.04" y1="72.5" x2="69.28" y2="72.5"/>
          <line { ...lineProps } x1="160.5" y1="78.5" x2="65.82" y2="78.5"/>
          <line { ...lineProps } x1="163.97" y1="84.5" x2="62.35" y2="84.5"/>
          <line { ...lineProps } x1="167.43" y1="90.5" x2="58.89" y2="90.5"/>
          <line { ...lineProps } x1="170.9" y1="96.5" x2="55.43" y2="96.5"/>
          <line { ...lineProps } x1="174.36" y1="102.5" x2="51.96" y2="102.5"/>
          <line { ...lineProps } x1="177.82" y1="108.5" x2="48.5" y2="108.5"/>
          <line { ...lineProps } x1="181.29" y1="114.5" x2="45.03" y2="114.5"/>
          <line { ...lineProps } x1="184.75" y1="120.5" x2="41.57" y2="120.5"/>
          <line { ...lineProps } x1="188.22" y1="126.5" x2="38.11" y2="126.5"/>
          <line { ...lineProps } x1="191.68" y1="132.5" x2="34.64" y2="132.5"/>
          <line { ...lineProps } x1="195.14" y1="138.5" x2="31.18" y2="138.5"/>
          <line { ...lineProps } x1="198.61" y1="144.5" x2="27.71" y2="144.5"/>
          <line { ...lineProps } x1="202.07" y1="150.5" x2="24.25" y2="150.5"/>
          <line { ...lineProps } x1="205.54" y1="156.5" x2="20.78" y2="156.5"/>
          <line { ...lineProps } x1="209" y1="162.5" x2="17.32" y2="162.5"/>
          <line { ...lineProps } x1="212.46" y1="168.5" x2="13.86" y2="168.5"/>
          <line { ...lineProps } x1="215.93" y1="174.5" x2="10.39" y2="174.5"/>
          <line { ...lineProps } x1="219.39" y1="180.5" x2="6.93" y2="180.5"/>
          <line { ...lineProps } x1="222.86" y1="186.5" x2="3.46" y2="186.5"/>
          <line { ...lineProps } x1="226.32" y1="192.5" y2="192.5"/>
        </g>
      </svg>
    </svg>
  )
}

