export default ({ width, height }) => {
  return (
    <svg width={width} height={height} >
      <defs>
        <filter id="glow" x="-500%" y="-500%" width="1000%" height="1000%">
          <feFlood result="flood" floodColor="#DC00FF" floodOpacity="1"></feFlood>
          <feComposite in="flood" result="mask" in2="SourceGraphic" operator="in"></feComposite>
          <feMorphology in="mask" result="dilated" operator="dilate" radius="1"></feMorphology>
          <feGaussianBlur in="dilated" result="blurred" stdDeviation="3"></feGaussianBlur>
          <feMerge>
              <feMergeNode in="blurred"></feMergeNode>
              <feMergeNode in="SourceGraphic"></feMergeNode>
          </feMerge>
        </filter>
      </defs>

      <g transform="translate(10,10)">
        <path d="M110.85.5h4.62M118.93 6.5h-11.54M122.4 12.5h-18.48M125.86 18.5h-25.4M129.33 24.5H96.99M132.79 30.5H93.53M136.25 36.5H90.07M139.72 42.5H86.6M143.18 48.5H83.14M146.65 54.5H79.67M150.11 60.5h-73.9M153.58 66.5H72.75M157.04 72.5H69.28M160.5 78.5H65.82M163.97 84.5H62.35M167.43 90.5H58.89M170.9 96.5H55.43M174.36 102.5H51.96M177.82 108.5H48.5M181.29 114.5H45.03M184.75 120.5H41.57M188.22 126.5H38.11M191.68 132.5H34.64M195.14 138.5H31.18M198.61 144.5H27.71M202.07 150.5H24.25M205.54 156.5H20.78M209 162.5H17.32M212.46 168.5H13.86M215.93 174.5H10.39M219.39 180.5H6.93M222.86 186.5H3.46M226.32 192.5H0"  filter="url(#glow)" stroke="#DC00FF" strokeWidth="2"/>
      </g>
      <g transform="translate(35,35)">
        <path d="M88.91 107.1L0 154l85.07-53.55L88.91 0l3.84 100.45L177.82 154l-88.91-46.9z"   filter="url(#glow)" stroke="#DC00FF" strokeWidth="2" fill="rgba(0,0,0,0.75)"/>
      </g>
    </svg>
  )
}

