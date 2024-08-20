const Tagline = () => {
  return (
    <div className='px-12 pt-16 flex justify-between font-book'>
        <div className="text-t1-title">
            <p> Exceed the </p>
            <p className="pl-20 relative after:block after:w-7 after:h-1 after:bg-aqua after:ml-45 after:-mt-2">expected</p>
        </div>
        <div className="flex flex-col gap-2 items-end justify-end">
            <p className="text-display w-fit relative after:block after:w-full after:h-3 after:bg-aqua after:-mt-3">20+</p>
            <p className="text-paragraph-cta">Awards and recognitions</p>
        </div>
    </div>
  )
}

export default Tagline