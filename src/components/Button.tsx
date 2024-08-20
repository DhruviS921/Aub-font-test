const Button = (
    {buttonText, className, endIcon, startIcon}: {buttonText: string, className: string
    , startIcon?: React.ReactNode, endIcon?: React.ReactNode
    }
) => {
  return (
    <button className={`${className} gap-[6px] flex items-center w-fit`}>{startIcon}{buttonText}{endIcon}</button>
  )
}

export default Button