import EffectIDs from '../../lib/EffectIDs'

// provides filter="url(#glow)"
export default () => {
  const effectId = EffectIDs();
  return {
    GlowFilter : `url(#${effectId})`,
    GlowFilterDef : ({ color }) => (
      <filter id={effectId} x="-500%" y="-500%" width="1000%" height="1000%">
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
  }
}
