import * as React from 'react'
import { JSX } from 'react/jsx-runtime'

const SvgChevronDown = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m6.85 9 6 6 6-6"
    />
  </svg>
)
export default SvgChevronDown