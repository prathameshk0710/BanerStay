import { useMemo, useState } from 'react'
import { hourlyRates, roomConcepts, stayNotes, stayPackages } from '../constants/hotelData'

function RatesSection() {
  const hourValues = hourlyRates.map((slot) => slot.hours)
  const [selectedHours, setSelectedHours] = useState(hourValues[0])
  const [selectedBed, setSelectedBed] = useState(roomConcepts[0]?.id ?? 'square')

  const selectedRate = useMemo(
    () => hourlyRates.find((slot) => slot.hours === Number(selectedHours)),
    [selectedHours],
  )

  const sliderPercentage =
    ((Number(selectedHours) - hourValues[0]) / (hourValues[hourValues.length - 1] - hourValues[0])) * 100

  const bedUpsell = selectedBed === 'round' ? 200 : 0
  const plannerPrice =
    selectedRate?.price != null ? `₹${(selectedRate.price + bedUpsell).toLocaleString('en-IN')}` : '—'

  return (
    <section className="rates" id="rates">
      <div className="section-head">
        <p className="eyebrow">Transparent pricing</p>
        <h2>Hourly slots & curated packages</h2>
        <p>Use the planner to preview an hourly slot or browse preset stays.</p>
      </div>
      <div className="rate-layout">
        <div className="rate-planner">
          <div className="planner-header">
            <p>Plan hourly visit</p>
            <span>{selectedHours} hrs</span>
          </div>
          <input
            type="range"
            min={hourValues[0]}
            max={hourValues[hourValues.length - 1]}
            step="1"
            name="hourly-slider"
            aria-label="Hourly duration"
            value={selectedHours}
            onChange={(event) => setSelectedHours(Number(event.target.value))}
            className="planner-slider"
            style={{ backgroundSize: `${sliderPercentage}% 100%` }}
          />
          <div className="slider-marks" aria-hidden="true">
            {hourlyRates.map((slot) => (
              <span key={slot.hours}>{slot.hours}h</span>
            ))}
          </div>
          <label className="planner-select" htmlFor="bed-preference">
            Bed preference
            <select
              id="bed-preference"
              name="bed-preference"
              value={selectedBed}
              onChange={(event) => setSelectedBed(event.target.value)}
            >
              {roomConcepts.map((concept) => (
                <option key={concept.id} value={concept.id}>
                  {concept.title}
                </option>
              ))}
            </select>
          </label>
          <div className="planner-price">
            <p>Slot investment</p>
            <strong>{plannerPrice}</strong>
            {selectedBed === 'round' && <small>Round bed includes décor-ready setup.</small>}
          </div>
        </div>
        <div className="rate-card">
          <h3>Packages & bed choices</h3>
          <ul>
            {stayPackages.map((pack) => (
              <li key={pack.title}>
                <span>{pack.title}</span>
                <strong>{pack.price}</strong>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="info-strip">
        {stayNotes.map((note) => (
          <p key={note}>{note}</p>
        ))}
      </div>
    </section>
  )
}

export default RatesSection

