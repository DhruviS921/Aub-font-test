import SectionTitle from './SectionTitle'
import BusinessCard from '../../components/BusinessCard'

const index = () => {
  return (
    <div className='py-21 flex flex-col gap-12 bg-dark-black text-white'>
        <SectionTitle />
        <div className='flex gap-3 px-6'>
            <BusinessCard title="For Startups" />
            <BusinessCard title="For Scaleups " />
            <BusinessCard title="For Enterprises " />
        </div>
    </div>
  )
}

export default index