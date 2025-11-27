import ResilientImage from '../components/media/ResilientImage'
import { roomConcepts } from '../constants/hotelData'

function SuitesSection() {
  return (
    <section className="stay-types" id="suites">
      <div className="section-head">
        <p className="eyebrow">Suites & moods</p>
        <h2>Choose the layout that fits your plan</h2>
        <p>
          Whether it’s a quick recharge or an evening celebration, Baner Stays offers curated setups with reliable
          services and décor-ready spaces.
        </p>
      </div>
      <div className="suite-grid">
        {roomConcepts.map((concept) => (
          <article className="suite-card" key={concept.id}>
            <ResilientImage src={concept.image} alt={concept.title} className="suite-img" />
            <div className="suite-body">
              <h3>{concept.title}</h3>
              <p>{concept.description}</p>
              <ul>
                {concept.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default SuitesSection

