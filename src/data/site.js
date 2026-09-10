// Central place for all shared content used across pages.

import { asset } from '../utils/asset'

export const WA_NUMBER = '919003453586'
export const WA_TEXT = "Hi Naren Groups, I'd like a quote for a precast compound wall."
export const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_TEXT)}`
export const YT_CHANNEL = 'https://www.youtube.com/@narengroups'

// Home page video popup — change `delaySeconds` here to adjust how long it waits before showing.
export const INFRA_VIDEO_POPUP = {
  videoId: 'WojrkjtwFvU',
  title: 'Our Infrastructure',
  delaySeconds: 3,
}

export const CONTACT = {
  phones: ['9003453586', '9380001677'],
  email: 'narengroupsindia@gmail.com',
  office: 'Nandini Layout, 2nd Cross, Bangalore, Karnataka',
  gst: '29AQCPK0542M2ZP',
  facilities: [
    { city: 'Chikkaballapur', area: 'Peresandra', serves: 'Serving projects across Karnataka and surrounding regions.' },
    { city: 'Whitefield', area: 'Varthur', serves: 'Serving Bangalore and surrounding areas.' },
    { city: 'Sarjapura', area: 'Dommasandra', serves: 'Serving Bangalore, Hosur and nearby regions.' },
  ],
}

export const NAV = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Products', to: '/product' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
]

export const STATS = [
  { num: 6000, comma: true, suffix: '+', label: 'Projects completed' },
  { num: 3, suffix: '', label: 'Manufacturing units' },
  { num: 25, suffix: '+', label: 'Days curing process' },
  { num: 2, suffix: '', label: 'States served' },
  { num: 3, suffix: '', label: 'Days to execute' },
  { num: 2, suffix: '+', label: 'Acres of infra' },
]

export const HERO_SLIDES = [
    asset('/assets/hero-2.jpg'),
  asset('/assets/hero-1.jpg'),
  asset('/assets/hero-3.jpg'),
  asset('/assets/hero-4.jpg'),
]

export const GALLERY = [
  { src: asset('/assets/gallery-1.jpg'), alt: 'Long precast compound wall lining a plotted layout', wide: true },
  { src: asset('/assets/gallery-2.jpg'), alt: 'Beige painted precast wall with red posts' },
  { src: asset('/assets/gallery-3.jpg'), alt: 'Precast boundary wall with hills in the background' },
  { src: asset('/assets/gallery-4.jpg'), alt: 'Grey precast compound wall with cloudy hills behind' },
  { src: asset('/assets/gallery-5.jpg'), alt: 'Blue and yellow striped precast compound wall' },
  { src: asset('/assets/gallery-6.jpg'), alt: 'Whitewashed precast compound wall under clear sky' },
  { src: asset('/assets/gallery-7.jpg'), alt: 'Tan precast wall along a residential plot' },
  { src: asset('/assets/gallery-8.jpg'), alt: 'Barbed-wire top and anchor-bolt fixing detail' },
  { src: asset('/assets/gallery-9.jpg'), alt: 'Naren Groups branded compound wall signboard', wide: true },
  { src: asset('/assets/gallery-10.jpg'), alt: 'White and grey precast panel wall' },
  { src: asset('/assets/shed-9.jpg'), alt: 'Painted precast ready-made shed with covered entrance', wide: true },
  { src: asset('/assets/shed-12.jpg'), alt: 'Precast shed with steel roof canopy and mesh windows on a farm plot', wide: true },
  { src: asset('/assets/shed-5.jpg'), alt: 'Precast shed front elevation with twin doors and a barred window' },
  { src: asset('/assets/shed-13.jpg'), alt: 'Precast shed with covered porch adjoining a compound wall' },
  { src: asset('/assets/shed-11.jpg'), alt: 'Precast shed with wide steel-roof canopy used as a site office' },
  { src: asset('/assets/shed-7.jpg'), alt: 'Precast shed exterior with corrugated roof overhang among trees' },
]

export const VIDEOS = ['EFnxTMsK3W8', 'BpdnIoiHqSE', 'WojrkjtwFvU', 'G6Pdx1LXxtc', 'QpGxHZjTOec']

export const CLIENTS = [
  { file: 'sobha', name: 'Sobha Realty' },
  { file: 'hosachiguru', name: 'Hosachiguru' },
  { file: 'foxconn', name: 'Foxconn' },
  { file: 'shahi', name: 'Shahi Exports' },
  { file: 'transcend', name: 'Transcend Group of Institutions' },
  { file: 'sapthagiri', name: 'Sapthagiri College of Engineering' },
  { file: 'prerana', name: 'Prerana Hospital' },
  { file: 'samruddhi', name: 'Samruddhi Ventures' },
  { file: 'govt', name: 'Govt. Science Centre, Gauribidanur' },
  { file: 'avantbkg', name: 'Avant BKG Hospitals' },
  { file: 'rbd', name: 'RBD Realty' },
  { file: 'v2holdings', name: 'V2 Holdings' },
  { file: 'dps', name: 'Delhi Public School' },
  { file: 'nps', name: 'National Public School' },
  { file: 'outreach', name: 'Outreach NGO' },
]

export const ADVANTAGES = [
  { title: 'Faster installation', text: 'A full boundary raised in days, not months.' },
  { title: 'Superior durability', text: 'Controlled curing up to 25 days for lasting strength.' },
  { title: 'Cost-effective', text: 'Less labour, less waste, predictable pricing.' },
  { title: 'Low maintenance', text: 'Weather-resistant panels that stay put for years.' },
  { title: 'Professional finish', text: 'Clean, uniform panels with an optional painted finish.' },
  { title: 'End-to-end service', text: 'Manufacturing, transport, installation & site support.' },
]

export const USE_CASES = [
  'Residential & Villas',
  'Commercial Sites',
  'Industrial Projects',
  'Layout Developments',
  'Agriculture Land',
  'Farmhouse',
]

export const SHED_ADVANTAGES = [
  { title: 'Fast erection', text: 'Walls and roof go up on a concrete base in days, not weeks.' },
  { title: 'Durable structure', text: 'Precast panels and bolted steel trusses built for years of sun and rain.' },
  { title: 'Cost-effective', text: 'No brick, no plaster, no long masonry timeline — lower cost per sq ft.' },
  { title: 'Naturally ventilated', text: 'Wave-cut panel vents keep the interior cool without extra fittings.' },
  { title: 'Flexible sizing', text: 'Built to the length, width and roof span your site needs.' },
  { title: 'Multi-purpose use', text: 'Suited to storage, site offices, labour quarters and farm sheds alike.' },
]

export const SHED_USE_CASES = [
  'Residential & Villas',
  'Commercial Sites',
  'Industrial Projects',
  'Layout Developments',
  'Agriculture Land',
  'Farm House',
]

export const PROCESS = [
  { n: '01', title: 'Site visit & quote', text: 'We measure your site, understand the terrain and share a clear, itemised quotation.' },
  { n: '02', title: 'Precision casting', text: 'Panels, posts and trusses are cast/fabricated at our nearest unit and cured up to 25 days for full strength.' },
  { n: '03', title: 'Transport & install', text: 'We deliver and assemble on site with trained crews — fast, clean and safe.' },
  { n: '04', title: 'Finish & handover', text: 'Optional painting, doors, windows and barbed-wire top, final checks, and handover.' },
]

export const PRODUCTS = [
  {
    id: 'compound-wall',
    eyebrow: 'Product 01',
    name: 'Precast Compound Wall',
    headline: 'The precast compound wall.',
    image: asset('/assets/product.jpg'),
    imageAlt: 'Grey precast compound wall panels stacked between posts',
    caption: 'Standard stacked-panel precast wall',
    badgeNum: '25+',
    badgeTxt: 'Days curing',
    badgeSub: 'For lasting strength',
    lead: 'A ready-made precast compound wall is a system of factory-cast concrete slab panels stacked between reinforced vertical posts. It replaces slow brick-and-mortar boundaries with a stronger, cleaner, quicker alternative — assembled on site in a fraction of the time.',
    buildSteps: [
      ['Reinforced posts', 'Cast with steel reinforcement for structural strength and a secure fixing point.'],
      ['Stacked slab panels', 'Factory-cast, uniform panels that stack cleanly between posts.'],
      ['Optional finishing', 'Painting and a barbed-wire top for added security and a professional look.'],
    ],
    advantagesTitle: 'Why precast beats brick',
    advantages: ADVANTAGES,
    useCasesLabel: 'Built for every kind of boundary',
    useCases: USE_CASES,
  },
  {
    id: 'shed',
    eyebrow: 'Product 02',
    name: 'Precast Ready-Made Shed',
    headline: 'The precast ready-made shed.',
    image: asset('/assets/shed-12.jpg'),
    imageAlt: 'Precast shed with steel roof canopy and mesh windows on a farm plot',
    caption: 'Steel-roof precast shed with ventilated wall panels',
    badgeNum: '3',
    badgeTxt: 'Days to erect',
    badgeSub: 'Foundation to roof',
    lead: 'A precast ready-made shed pairs our factory-cast wall panels with a bolted steel roof truss and sheet covering — a complete enclosed structure raised on a concrete base in days. Built for storage, site offices, labour quarters and farm use.',
    buildSteps: [
      ['Precast wall panels', 'The same reinforced posts and slab panels used in our compound walls form the shed body.'],
      ['Steel roof truss', 'Bolted steel trusses span the structure and are covered with sheet roofing.'],
      ['Doors, windows & vents', 'Ventilated wave-cut panels, barred windows and steel doors fitted to your layout.'],
    ],
    advantagesTitle: 'Why a precast shed works',
    advantages: SHED_ADVANTAGES,
    useCasesLabel: 'Built for every kind of shed',
    useCases: SHED_USE_CASES,
  },
]
