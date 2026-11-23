import { useEffect, useState } from 'react'
import {
  ArrowRight,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Droplets,
  ImagePlus,
  Leaf,
  Menu,
  MoveUpRight,
  Sprout,
  Users,
  X,
  Zap,
} from 'lucide-react'

const focusAreas = [
  { icon: Droplets, number: '01', title: 'Sandponics', copy: 'Growing more with less water through practical soilless farming systems.' },
  { icon: Sprout, number: '02', title: 'Greenhouse farming', copy: 'Protected growing environments that help farmers grow year-round.' },
  { icon: Zap, number: '03', title: 'Smart irrigation', copy: 'Simple digital tools that put every drop of water to work.' },
  { icon: Leaf, number: '04', title: 'Circular bio-solutions', copy: 'BSF technology and biofertilizers that regenerate the farm.' },
]

const stats = [
  ['250+', 'farmers reached'],
  ['12', 'communities connected'],
  ['08', 'innovation programs'],
]

const galleryItems = [
  { image: '/gallery/sandponics-tray.jpg', label: 'Sandponics in practice' },
  { image: '/gallery/bsf-unit.jpg', label: 'Circular bio-solutions' },
  { image: '/gallery/innovation-in-action.jpg', label: 'Innovation in action' },
  { image: '/gallery/protected-growing.jpg', label: 'Protected growing' },
  { image: '/gallery/community-learning.jpg', label: 'Community learning' },
  { image: '/gallery/showcase.jpg', label: 'Sharing the journey' },
]

const storySlides = [
  { image: '/gallery/innovation-in-action.jpg', eyebrow: 'Celebrating progress', title: 'Together, we grow the future.', copy: 'A room full of new skills, shared ideas, and the people turning possibility into practical change.' },
  { image: '/gallery/growing-brighter-future.jpg', eyebrow: 'Innovation in action', title: 'Growing a brighter future.', copy: 'Modern agriculture, practical skills, and digital innovation coming together to create stronger communities.' },
  { image: '/gallery/digital-farming-workshop.jpg', eyebrow: 'Learning by doing', title: 'Digital tools. Real-world impact.', copy: 'Young innovators explore smart irrigation, IoT, and digital farming tools built for the realities of local communities.' },
  { image: '/gallery/digital-skills.jpg', eyebrow: 'Skills for tomorrow', title: 'Confidence starts with a first step.', copy: 'When knowledge is accessible, technology becomes a bridge to opportunity for farmers and young people.' },
  { image: '/gallery/sandponics-tray.jpg', eyebrow: 'Growing smarter', title: 'Small experiments. Big possibilities.', copy: 'From sandponics trays to protected growing systems, we make innovation tangible, testable, and useful.' },
  { image: '/gallery/protected-growing.jpg', eyebrow: 'Climate-ready agriculture', title: 'More resilience in every harvest.', copy: 'Practical growing systems help communities produce consistently while using resources thoughtfully.' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showAll, setShowAll] = useState(false)
  const [galleryImages, setGalleryImages] = useState<(string | null)[]>(galleryItems.map((item) => item.image))
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => setActiveSlide((current) => (current + 1) % storySlides.length), 5500)
    return () => window.clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => setActiveSlide((index + storySlides.length) % storySlides.length)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="min-h-screen overflow-hidden bg-[#f8f8f2] text-[#123b2d]">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
        <header className="relative z-20 flex items-center justify-between py-5 lg:py-7">
          <a href="#top" className="flex items-center gap-3" onClick={closeMenu}>
            <img src="/cbg-logo.png" alt="CBG Digital Agri Innovation Hub" className="h-14 w-auto object-contain sm:h-16" />
          </a>
          <nav className="hidden items-center gap-9 text-[13px] font-semibold text-[#365b4b] lg:flex">
            <a className="transition hover:text-[#1d8c55]" href="#about">About us</a>
            <a className="transition hover:text-[#1d8c55]" href="#work">Our work</a>
            <a className="transition hover:text-[#1d8c55]" href="#gallery">Gallery</a>
            <a className="transition hover:text-[#1d8c55]" href="#contact">Contact</a>
          </nav>
          <a href="#contact" className="hidden items-center gap-2 rounded-full bg-[#0d4a37] px-5 py-3 text-xs font-bold text-white shadow-lg shadow-[#0d4a37]/15 transition hover:-translate-y-0.5 hover:bg-[#176a49] sm:flex">
            Become a partner <MoveUpRight size={14} />
          </a>
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" className="rounded-full bg-white p-3 text-[#0d4a37] shadow-sm lg:hidden">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </header>

        {menuOpen && <nav className="relative z-30 mb-4 flex flex-col gap-4 rounded-2xl bg-white p-6 text-sm font-semibold shadow-xl lg:hidden">
          {['about', 'work', 'impact', 'gallery', 'contact'].map((item) => <a key={item} href={`#${item}`} onClick={closeMenu} className="capitalize">{item === 'about' ? 'About us' : item === 'work' ? 'Our work' : item === 'impact' ? 'Our impact' : item === 'gallery' ? 'Gallery' : 'Contact'}</a>)}
          <a href="#contact" onClick={closeMenu} className="mt-2 rounded-full bg-[#0d4a37] px-5 py-3 text-center text-white">Become a partner</a>
        </nav>}

        <main id="top">
          <section className="relative grid items-center gap-12 pb-20 pt-12 lg:grid-cols-[1.04fr_.96fr] lg:gap-8 lg:pb-28 lg:pt-16">
            <div className="relative z-10 max-w-2xl">
              <div className="mb-7 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[.24em] text-[#1d8c55]"><span className="h-px w-10 bg-[#1d8c55]" /> Rubavu District, Rwanda</div>
              <h1 className="max-w-3xl font-display text-5xl font-medium leading-[.98] tracking-[-.045em] text-[#0d4a37] sm:text-7xl lg:text-[88px]">Growing a <em className="font-serif not-italic text-[#2a9c60]">brighter</em> future.</h1>
              <p className="mt-8 max-w-lg text-base leading-7 text-[#527164] sm:text-lg">We connect modern agriculture, digital technology, practical skills, and entrepreneurship to create sustainable solutions for farmers and young people.</p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a href="#work" className="group flex items-center gap-3 rounded-full bg-[#e1a83a] px-6 py-4 text-sm font-bold text-[#183f2f] shadow-lg shadow-[#e1a83a]/20 transition hover:-translate-y-0.5">Explore our work <span className="grid h-7 w-7 place-items-center rounded-full bg-[#0d4a37] text-white transition group-hover:translate-x-1"><ArrowRight size={14} /></span></a>
                <a href="#contact" className="flex items-center gap-2 px-3 py-3 text-sm font-bold text-[#0d4a37] transition hover:text-[#2a9c60]">Let&apos;s connect <ArrowRight size={16} /></a>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-[560px] lg:ml-auto">
              <div className="absolute -right-8 -top-8 h-48 w-48 rounded-full bg-[#cfe8d2] blur-3xl" />
              <div className="relative aspect-[.93] overflow-hidden rounded-[2.5rem] bg-[#d9ead8] shadow-2xl shadow-[#295a42]/10">
                <div className="absolute inset-0 bg-[linear-gradient(145deg,transparent_15%,rgba(13,74,55,.2)),radial-gradient(circle_at_75%_10%,#e6f3d8,transparent_38%)]" />
                <div className="absolute -bottom-14 -left-10 h-72 w-72 rounded-full border-[22px] border-white/50" />
                <div className="absolute -right-20 top-12 h-80 w-80 rounded-full border-[28px] border-[#2a9c60]/25" />
                <div className="absolute bottom-0 left-0 right-0 h-[48%] bg-[linear-gradient(165deg,transparent_0%,rgba(20,85,48,.5)_80%),linear-gradient(12deg,#255c3a,#6a963c)]" />
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-[#194b32] [clip-path:polygon(0_38%,10%_25%,20%_42%,32%_12%,47%_34%,61%_10%,75%_38%,88%_14%,100%_34%,100%_100%,0_100%)]" />
                <div className="absolute left-8 top-8 rounded-full bg-white/80 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-[#0d4a37] backdrop-blur">Innovation in action</div>
                <div className="absolute bottom-9 left-8 right-8 flex items-end justify-between text-white"><div><p className="font-display text-3xl">Better farms.</p><p className="text-sm text-white/70">Stronger communities.</p></div><Sprout size={40} strokeWidth={1.2} /></div>
              </div>
              <div className="absolute -bottom-7 -left-4 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl sm:-left-8"><span className="grid h-10 w-10 place-items-center rounded-full bg-[#e4f3dc] text-[#238b52]"><Users size={19} /></span><div><p className="text-lg font-bold text-[#0d4a37]">Community first</p><p className="text-[11px] text-[#759085]">Solutions that scale</p></div></div>
            </div>
          </section>

          <section className="relative overflow-hidden rounded-[2.5rem] bg-[#102f27] text-white shadow-2xl shadow-[#174d35]/10">
            <div className="grid min-h-[480px] lg:grid-cols-[1.15fr_.85fr]">
              <div className="relative min-h-[320px] overflow-hidden lg:min-h-0">
                {storySlides.map((slide, index) => <img key={slide.image} src={slide.image} alt={slide.title} className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${index === activeSlide ? 'scale-100 opacity-100' : 'scale-105 opacity-0'}`} />)}
                <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-transparent to-[#102f27]/70 lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#102f27]" />
                <div className="absolute bottom-5 left-5 rounded-full bg-white/15 px-3 py-2 text-[10px] font-bold uppercase tracking-[.2em] text-white backdrop-blur-md sm:left-8">CBG field notes · 0{activeSlide + 1}</div>
              </div>
              <div className="relative flex flex-col justify-between px-7 py-9 sm:px-10 sm:py-12 lg:-ml-8 lg:pl-4 lg:pr-14">
                <div key={activeSlide} className="animate-[fadeIn_.6s_ease-out]">
                  <p className="eyebrow text-[#b8dc84]">{storySlides[activeSlide].eyebrow}</p>
                  <h2 className="mt-5 max-w-md font-display text-4xl leading-[1.05] tracking-[-.04em] sm:text-5xl">{storySlides[activeSlide].title}</h2>
                  <p className="mt-6 max-w-sm leading-7 text-white/60">{storySlides[activeSlide].copy}</p>
                </div>
                <div className="mt-10 flex items-center justify-between gap-4">
                  <div className="flex gap-2">{storySlides.map((slide, index) => <button key={slide.image} onClick={() => goToSlide(index)} aria-label={`Show slide ${index + 1}`} className={`h-1.5 rounded-full transition-all ${index === activeSlide ? 'w-10 bg-[#e8c05b]' : 'w-5 bg-white/25 hover:bg-white/50'}`} />)}</div>
                  <div className="flex gap-2"><button onClick={() => goToSlide(activeSlide - 1)} aria-label="Previous slide" className="grid h-10 w-10 place-items-center rounded-full border border-white/20 transition hover:bg-white/10"><ChevronLeft size={18} /></button><button onClick={() => goToSlide(activeSlide + 1)} aria-label="Next slide" className="grid h-10 w-10 place-items-center rounded-full bg-[#e8c05b] text-[#183f2f] transition hover:bg-[#f0cf7d]"><ChevronRight size={18} /></button></div>
                </div>
              </div>
            </div>
          </section>

          <section id="about" className="grid gap-10 border-y border-[#dbe7dc] py-14 lg:grid-cols-[.85fr_1.15fr] lg:py-20"><div><p className="eyebrow">Who we are</p><h2 className="mt-4 max-w-sm font-display text-4xl leading-tight tracking-[-.03em] text-[#0d4a37] sm:text-5xl">The future of farming is <span className="text-[#2a9c60]">hands-on.</span></h2></div><div className="max-w-2xl"><p className="text-xl leading-8 text-[#416657]">CBG Agri Innovation Hub is a place where ideas become practical tools for a changing climate and a growing population.</p><p className="mt-5 leading-7 text-[#6d887b]">We work alongside smallholder farmers, young innovators, educational institutions, development partners, and private-sector organizations to make modern agricultural technologies accessible, practical, and beneficial to communities.</p></div></section>

          <section id="work" className="py-20 lg:py-28"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="eyebrow">What we do</p><h2 className="mt-4 font-display text-4xl tracking-[-.035em] text-[#0d4a37] sm:text-5xl">Innovation rooted in reality.</h2></div><a href="#contact" className="flex items-center gap-2 pb-1 text-sm font-bold text-[#1d8c55]">Work with us <ArrowRight size={16} /></a></div><div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{focusAreas.map(({ icon: Icon, number, title, copy }) => <article key={title} className="group rounded-[1.75rem] border border-[#dbe7dc] bg-white p-6 transition hover:-translate-y-1 hover:border-[#a5cba6] hover:shadow-xl hover:shadow-[#174d35]/8"><div className="flex items-center justify-between"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#e8f3e3] text-[#218854] transition group-hover:bg-[#0d4a37] group-hover:text-white"><Icon size={22} strokeWidth={1.7} /></span><span className="font-mono text-xs text-[#adc1b2]">{number}</span></div><h3 className="mt-8 text-xl font-bold text-[#164b37]">{title}</h3><p className="mt-3 text-sm leading-6 text-[#718a7d]">{copy}</p><span className="mt-6 block h-px w-8 bg-[#e1a83a] transition-all group-hover:w-14" /></article>)}</div><button onClick={() => setShowAll(!showAll)} className="mx-auto mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#618174]">{showAll ? 'Show less' : 'View all areas'} <ChevronDown size={15} className={showAll ? 'rotate-180' : ''} /></button>{showAll && <div className="mx-auto mt-5 max-w-2xl rounded-2xl bg-[#eaf3e7] p-5 text-center text-sm text-[#527164]">Seed multiplication, digital agriculture, and entrepreneurship complete our growing portfolio of community-led solutions.</div>}</section>

          <section id="impact" className="relative overflow-hidden rounded-[2.5rem] bg-[#0d4a37] px-7 py-14 text-white sm:px-12 lg:px-20 lg:py-16"><div className="absolute -right-20 -top-28 h-80 w-80 rounded-full border-[35px] border-[#65b45e]/15" /><div className="relative grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-end"><div><p className="eyebrow text-[#b8dc84]">Our impact</p><h2 className="mt-4 max-w-xl font-display text-4xl leading-tight tracking-[-.035em] sm:text-5xl">When knowledge grows, <span className="text-[#b8dc84]">everything</span> grows.</h2><p className="mt-6 max-w-md leading-7 text-white/65">From a young person learning to build a smart irrigation system to a farmer harvesting fresh produce all year, we’re building confidence through action.</p></div><div className="grid grid-cols-3 gap-3 border-t border-white/15 pt-6 lg:border-l lg:border-t-0 lg:pl-10">{stats.map(([value, label]) => <div key={label}><p className="font-display text-3xl text-[#e8c05b] sm:text-4xl">{value}</p><p className="mt-2 max-w-[90px] text-xs leading-5 text-white/55">{label}</p></div>)}</div></div></section>

          <section id="gallery" className="py-20 lg:py-28"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="eyebrow">From the field</p><h2 className="mt-4 font-display text-4xl tracking-[-.035em] text-[#0d4a37] sm:text-5xl">Your work, in focus.</h2></div><p className="max-w-xs text-sm leading-6 text-[#718a7d]">Real moments from CBG&apos;s experiments, demonstrations, and community learning.</p></div><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{galleryImages.map((image, index) => <label key={index} className="group relative aspect-[1.18] cursor-pointer overflow-hidden rounded-[1.5rem] border border-dashed border-[#b8d3ba] bg-[#eaf3e7] transition hover:-translate-y-1 hover:border-[#2a9c60] hover:shadow-xl"><input type="file" accept="image/*" className="sr-only" onChange={(event) => { const file = event.target.files?.[0]; if (!file) return; const next = [...galleryImages]; next[index] = URL.createObjectURL(file); setGalleryImages(next) }} />{image ? <img src={image} alt={galleryItems[index].label} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /> : <div className="flex h-full flex-col items-center justify-center p-5 text-center"><span className="grid h-14 w-14 place-items-center rounded-full bg-white text-[#2a9c60] shadow-sm"><ImagePlus size={23} /></span><span className="mt-4 text-sm font-bold text-[#2f614b]">Add your image</span><span className="mt-1 text-xs text-[#789185]">JPG, PNG, or WEBP</span></div>}<div className="absolute inset-x-3 bottom-3 flex items-center justify-between rounded-xl bg-[#0d4a37]/85 px-3 py-2 text-xs font-semibold text-white backdrop-blur"><span>{galleryItems[index].label}</span><span className="opacity-0 transition group-hover:opacity-100">Replace</span></div></label>)}</div></section>

          <section id="contact" className="grid gap-8 py-20 lg:grid-cols-[1fr_auto] lg:items-center lg:py-28"><div><p className="eyebrow">Ready to grow?</p><h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight tracking-[-.04em] text-[#0d4a37] sm:text-6xl">Let&apos;s build the future of agriculture <span className="font-serif italic text-[#2a9c60]">together.</span></h2></div><div className="flex flex-col items-start gap-3 lg:items-end"><a href="mailto:hello@cbgagri.org" className="rounded-full bg-[#e1a83a] px-7 py-4 text-sm font-bold text-[#183f2f] transition hover:bg-[#f0c565]">Start a conversation <ArrowRight className="ml-2 inline" size={16} /></a><p className="text-xs text-[#779185]">hello@cbgagri.org · Rubavu, Rwanda</p></div></section>
        </main>
        <footer className="flex flex-col gap-4 border-t border-[#dbe7dc] py-7 text-xs text-[#789185] sm:flex-row sm:items-center sm:justify-between"><p>© 2025 CBG Agri Innovation Hub</p><p className="flex items-center gap-2"><Check size={14} className="text-[#2a9c60]" /> Growing with purpose</p></footer>
      </div>
    </div>
  )
}

export default App
