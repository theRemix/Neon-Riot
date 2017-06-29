import GlowFilterProvider from "../effects/GlowFilter";
import { COLORS } from "../../lib/constants";

const WHITE_COLORS = [
  "#fafcfc",
  "#fafafc",
  "#fafbfc",
  "#fafcfb",
  "#fafcfa"
];

export default ({ windowSize, seed }) => {

  const color = seed.primary.color;
  const glowColorBase = seed.primary.glowColor;
  const glowColorInner = seed.toBool(seed.slices[8], 30) ?
    seed.select(seed.slices[9], WHITE_COLORS) :
    seed.select(seed.slices[9], COLORS.BLACKS);

  const polyProps = {
    strokeWidth: 0,
    fill: color
  }

  // @TODO to come from constants
  const size = {
    width : 800,
    height : 800,
  };

  const offsetForGlow = 10;

  const {
    GlowFilter : GlowFilterBase,
    GlowFilterDef : GlowFilterDefBase
  } = GlowFilterProvider();
  const {
    GlowFilter : GlowFilterInner,
    GlowFilterDef : GlowFilterDefInner
  } = GlowFilterProvider();

  const sizeOffset = size.width;
  return (
    <svg
      width={size.width+offsetForGlow+sizeOffset}
      height={size.height+offsetForGlow+sizeOffset}
      x={( windowSize.width / 2 ) - ( size.width / 4 ) + offsetForGlow/2}
      y={( windowSize.height / 2 ) - ( size.height / 4 ) + offsetForGlow/2} >
      <defs>
        <GlowFilterDefBase color={glowColorBase} />
        <GlowFilterDefInner color={glowColorInner} />
      </defs>

      <g transform="translate(0,0) scale(2)" filter={ GlowFilterBase }>
        <polygon { ...polyProps } points="101.58 2.3 1.99 174.8 201.18 174.8 101.58 2.3"/>
      </g>
      <g transform="translate(25,30) scale(2)" filter={ GlowFilterInner }>
        <polygon points="88.91 107.1 0 154 85.07 100.45 88.91 0 92.75 100.45 177.82 154 88.91 107.1"/>
      </g>
    </svg>
  )
}

