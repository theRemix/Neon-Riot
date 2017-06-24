// provides filter="url(#glow)"
const GlowID = "glow";
export const GlowFilter = `url(#${GlowID})`;
export const GlowFilterDef = ({ color }) => (
  <filter id={GlowID} x="-500%" y="-500%" width="1000%" height="1000%">
    <feFlood result="flood" floodColor={ color } floodOpacity="1"></feFlood>
    <feComposite in="flood" result="mask" in2="SourceGraphic" operator="in"></feComposite>
    <feMorphology in="mask" result="dilated" operator="dilate" radius="1"></feMorphology>
    <feGaussianBlur in="dilated" result="blurred" stdDeviation="3"></feGaussianBlur>
    <feMerge>
        <feMergeNode in="blurred"></feMergeNode>
        <feMergeNode in="SourceGraphic"></feMergeNode>
    </feMerge>
  </filter>
)
