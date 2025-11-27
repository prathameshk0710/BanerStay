const photoModules = import.meta.glob('../assets/photos/*.jpg', {
  eager: true,
  import: 'default',
})

const photoSources = Object.entries(photoModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, src]) => src)

const pickRange = (start, end) => {
  const slice = photoSources.slice(start, end)
  return slice.length ? slice : photoSources
}

const heroMedia = {
  heroImage: photoSources[photoSources.length - 1] || '',
  secondaryImage: photoSources[photoSources.length - 2] || '',
}

const roomConcepts = [
  {
    id: 'square',
    title: 'Square Bed Studio',
    description:
      'Bright, air-conditioned studio with premium square bed, Android TV, and a cozy nook for work or dining.',
    tags: ['Android TV', 'Spacious layout', 'Mood lighting'],
    image: pickRange(0, 1)[0],
  },
  {
    id: 'round',
    title: 'Round Bed Retreat',
    description:
      'Celebration-ready round bed suite featuring a couple couch, accent lighting, and décor options for birthdays or anniversaries.',
    tags: ['Round bed', 'Couple couch', 'Decor add-ons'],
    image: pickRange(1, 2)[0],
  },
]

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'facilities', label: 'Facilities' },
  { id: 'rates', label: 'Rates' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'contact', label: 'Contact' },
]

const serviceChips = [
  'Flexible hourly slots',
  'Baner • Balewadi prime lane',
  'Celebration-ready décor',
  'Dedicated housekeeping',
]

const facilityDetails = [
  { id: 'tv', title: 'Android TV', detail: 'Smart OTT-ready entertainment in every room.' },
  { id: 'ac', title: 'AC Rooms', detail: 'Climate-controlled comfort for Pune summers.' },
  { id: 'wifi', title: 'Free Wi-Fi', detail: 'High-speed internet for workcations.' },
  { id: 'parking', title: 'Spacious Parking', detail: 'Dedicated parking lane for easy arrivals.' },
  { id: 'sofa', title: 'Couple Couch', detail: 'Plush lounge seating for meals or movies.' },
  { id: 'water', title: '24×7 Hot Water', detail: 'Instant geysers for constant hot water.' },
  { id: 'bottle', title: 'Complimentary Water', detail: 'Packaged water placed before check-in.' },
  { id: 'housekeeping', title: '24 hrs Housekeeping', detail: 'On-call housekeeping & concierge.' },
  { id: 'decor', title: 'Event Décor', detail: 'Birthday / anniversary décor on request.' },
]

const hourlyRates = [
  { hours: 2, label: '2 Hours', price: 600 },
  { hours: 3, label: '3 Hours', price: 800 },
  { hours: 4, label: '4 Hours', price: 900 },
  { hours: 5, label: '5 Hours', price: 1100 },
  { hours: 6, label: '6 Hours', price: 1200 },
  { hours: 7, label: '7 Hours', price: 1400 },
  { hours: 8, label: '8 Hours', price: 1600 },
]

const stayPackages = [
  { title: 'Night stay (8 PM – 10 AM)', price: '₹1,500' },
  { title: '24 hrs booking (11:30 AM – 10 AM)', price: '₹1,700' },
  { title: 'Square bed • 24 hrs', price: '₹1,700' },
  { title: 'Round bed • 24 hrs', price: '₹1,900' },
  { title: 'Night charge • Square bed', price: '₹1,300' },
  { title: 'Night charge • Round bed', price: '₹1,500' },
]

const stayNotes = [
  'Night stay check-in begins at 8:00 PM with 11:00 AM checkout.',
  '24-hour booking window starts 11:30 AM and ends 10:00 AM next day.',
  'Complimentary packaged drinking water for every guest.',
  'Wifi, Android TV, AC, and hot water available round the clock.',
  'Decorations for birthdays/anniversaries can be pre-booked.',
]

const gallerySections = [
  {
    id: 'bedroom',
    label: 'Bedrooms',
    images: pickRange(0, 8),
  },
  {
    id: 'lobby',
    label: 'Lobby & Lounge',
    images: pickRange(8, 16),
  },
  {
    id: 'exterior',
    label: 'Exterior & Surroundings',
    images: pickRange(16, photoSources.length),
  },
]

const contactInfo = {
  phone: '+91 9494 69 7171',
  email: 'stay@banerstays.com',
  address: ['Baner Stays, Lane Number 7', 'Laxman Nagar, Balewadi', 'Pune 411045, Maharashtra'],
  mapsLink: 'https://maps.app.goo.gl/Y4Lq37wiecg8y4zy9',
}

const socialLinks = {
  call: 'tel:+919494697171',
  whatsapp: 'https://wa.me/919494697171',
  instagram: 'https://www.instagram.com/',
}

export {
  navLinks,
  serviceChips,
  roomConcepts,
  facilityDetails,
  hourlyRates,
  stayPackages,
  stayNotes,
  gallerySections,
  contactInfo,
  socialLinks,
  heroMedia,
}

