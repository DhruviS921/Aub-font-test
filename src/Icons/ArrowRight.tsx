import * as React from 'react'
import { JSX } from 'react/jsx-runtime'

const SvgArrowRight = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#FFF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5.85 12h14M12.85 5l7 7-7 7"
    />
  </svg>
)
export default SvgArrowRight