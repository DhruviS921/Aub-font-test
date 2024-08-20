import StatsCard from '../../components/StatsCard'

const index = () => {
  return (
    <div className='px-6'>
        <div className='flex px-6 py-21 gap-1 justify-between'>
            <StatsCard numberTitle="10+" subTitle="Years of Excellence" description="in delighting users through digital products" />
            <StatsCard numberTitle="110+" subTitle="Years of Excellence" description="in delighting users through digital products"  />
            <StatsCard numberTitle="300+" subTitle="Years of Excellence" description="in delighting users through digital products"  />
            <StatsCard numberTitle="$1B+" subTitle="Years of Excellence" description="in delighting users through digital products" />
        </div>
    </div>
  )
}

export default index