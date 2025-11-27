import {
  FiDroplet,
  FiShield,
  FiThermometer,
  FiTv,
  FiWifi,
} from 'react-icons/fi'
import { LuSofa } from 'react-icons/lu'
import { MdLocalParking } from 'react-icons/md'
import { TbBottle, TbSparkles } from 'react-icons/tb'
import { facilityDetails } from '../constants/hotelData'

const iconMap = {
  tv: <FiTv />,
  ac: <FiThermometer />,
  wifi: <FiWifi />,
  parking: <MdLocalParking />,
  sofa: <LuSofa />,
  water: <FiDroplet />,
  bottle: <TbBottle />,
  housekeeping: <FiShield />,
  decor: <TbSparkles />,
}

function FacilitiesSection() {
  return (
    <section className="facilities" id="facilities">
      <div className="section-head">
        <p className="eyebrow">Our Facilities</p>
        <h2>Everything you asked for, already included</h2>
        <p>From Android TVs to packaged drinking water, every stay is celebration-ready.</p>
      </div>
      <div className="facility-grid">
        {facilityDetails.map((facility) => (
          <article key={facility.id}>
            <span className="facility-icon">{iconMap[facility.id]}</span>
            <h3>{facility.title}</h3>
            <p>{facility.detail}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default FacilitiesSection

