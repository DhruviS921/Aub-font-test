import * as React from 'react'

const SvgArrowRight = ({
  stroke = '#479F76',
  ...props
}: React.SVGProps<SVGSVGElement>) => (  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5.85 12h14M12.85 5l7 7-7 7"
    />
  </svg>
)
export default SvgArrowRight