import EffectIDs from '../../lib/EffectIDs'

const defaults = {
  strength : 1
};

// provides filter="url(#glow)"
export default (options) => {
  const effectId = EffectIDs();
  return {
    GlowFilter : `url(#${effectId})`,
    GlowFilterDef : ({ color, strength }) => (
      <filter id={effectId} x="-500%" y="-500%" width="1000%" height="1000%">
        <feFlood result="flood" floodColor={ color } floodOpacity={strength || defaults.strength}></feFlood>
        <feComposite in="flood" result="mask" in2="SourceGraphic" operator="in"></feComposite>
        <feMorphology in="mask" result="dilated" operator="dilate" radius={strength || defaults.strength}></feMorphology>
        <feGaussianBlur in="dilated" result="blurred" stdDeviation="3"></feGaussianBlur>
        <feMerge>
            <feMergeNode in="blurred"></feMergeNode>
            <feMergeNode in="SourceGraphic"></feMergeNode>
        </feMerge>
      </filter>
    )
  }
}
