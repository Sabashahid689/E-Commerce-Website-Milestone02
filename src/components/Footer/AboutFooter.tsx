import { Clock } from 'lucide-react'

export default function AboutUsSection() {
  return (
    <div className='w-[395.2px]'>
      <h3 className="text-xl font-bold mb-8">About Us.</h3>
      <p className="mb-6 text-[18px] leading-[26px]">
        Corporate clients and leisure travelers have been relying on Groundlink for dependable safe, and professional chauffeured car service in major cities across World.
      </p>
      <div className="flex items-start">
        <div className="bg-[#FF9F0D] p-2 rounded mr-4 w-[77.23px] h-[70.79px]">
          <Clock className="text-white" />
        </div>
        <div>
          <h4 className="font-semibold">Opening Hours</h4>
          <p className="text-sm">Mon - Sat(8.00 - 6.00)</p>
          <p className="text-sm">Sunday - Closed</p>
        </div>
      </div>
    </div>
  )
}