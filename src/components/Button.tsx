const Button = (
    {buttonText, className, endIcon, startIcon}: {buttonText: string, className: string
    , startIcon?: React.ReactNode, endIcon?: React.ReactNode
    }
) => {
  return (
    <button className={`px-2 py-[10px] ${className} gap-[6px] flex`}>{startIcon}{buttonText}{endIcon}</button>
  )
}

export default Button