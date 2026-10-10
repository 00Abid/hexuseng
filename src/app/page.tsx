"use client";
import { useMemo, useState, useEffect } from "react";

type Item = { name: string; group: string; pressure: string; size: string; metal: string; code: string };
const items: Item[] = [
  { name: "2-Way Needle Valve", group: "Valves", pressure: "10,000 PSI", size: "1/8–1 in.", metal: "SS 316L", code: "NV2" },
  { name: "3-Valve Manifold", group: "Manifolds", pressure: "6,000 PSI", size: "1/2 in. NPT", metal: "SS 316", code: "VM3" },
  { name: "Double Ferrule Fitting", group: "Fittings", pressure: "6,000 PSI", size: "1/16–2 in. OD", metal: "SS 316L", code: "DF" },
  { name: "High Pressure Ball Valve", group: "Valves", pressure: "10,000 PSI", size: "1/4–2 in.", metal: "SS 316", code: "BV" },
  { name: "Check Valve", group: "Valves", pressure: "6,000 PSI", size: "1/4–1 in.", metal: "Hastelloy C276", code: "CV" },
  { name: "Tube Union", group: "Fittings", pressure: "6,000 PSI", size: "1/8–2 in. OD", metal: "SS 316L", code: "TU" }
];

const Arrow = () => <span aria-hidden="true" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform inline-block">↗</span>; 

export default function Home() { 
  const [group, setGroup] = useState("All"); 
  const [open, setOpen] = useState(false); 
  const [sent, setSent] = useState(false); 
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const visible = useMemo(() => group === "All" ? items : items.filter(i => i.group === group), [group]); 

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  const navLinks = ["Products", "Our Work", "Quality", "Industries"];

  return (
    <main className="bg-white text-zinc-900 selection:bg-zinc-900 selection:text-white">
      
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a className="flex items-center gap-2 text-zinc-900 hover:opacity-70 transition-opacity" href="#home" onClick={() => setMobileMenuOpen(false)}>
            <span className="font-bold text-lg tracking-widest leading-none">
              HEXUS<span className="text-zinc-400 font-medium ml-1">ENGINEERS</span>
            </span>
          </a>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 items-center">
            {navLinks.map(n => (
              <a key={n} href={`#${n.toLowerCase().replace(" ", "")}`} className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors">{n}</a>
            ))}
          </nav>
          
          <div className="hidden md:block">
            <button 
              className="bg-zinc-900 text-white text-sm font-medium py-2 px-5 hover:bg-zinc-800 transition-colors"
              onClick={() => setOpen(true)}
            >
              Request Quote
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button 
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none z-50 relative"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className={`block w-6 h-[2px] bg-zinc-900 transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-[8px]' : ''}`}></span>
            <span className={`block w-6 h-[2px] bg-zinc-900 transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block w-6 h-[2px] bg-zinc-900 transition-transform duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-40 bg-white pt-24 px-6 flex flex-col h-screen overflow-y-auto">
            <nav className="flex flex-col gap-8 mb-12">
              {navLinks.map(n => (
                <a 
                  key={n} 
                  href={`#${n.toLowerCase().replace(" ", "")}`} 
                  className="text-3xl font-bold tracking-tight text-zinc-900"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {n}
                </a>
              ))}
            </nav>
            <button 
              className="w-full bg-zinc-900 text-white text-lg font-medium py-4 hover:bg-zinc-800 transition-colors"
              onClick={() => { setMobileMenuOpen(false); setOpen(true); }}
            >
              Request Quote
            </button>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-32 md:pt-40 md:pb-48 px-6 max-w-7xl mx-auto flex flex-col items-start border-b border-zinc-200">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-zinc-900 leading-[1.05] mb-8 max-w-5xl">
          High-pressure valves.<br/>Engineered perfectly.
        </h1>
        <p className="text-lg md:text-xl text-zinc-500 max-w-2xl leading-relaxed mb-12">
          Industrial-grade components built to withstand extreme environments, rigorous testing, and demanding operations. Since 2004.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a 
            href="#products"
            className="group flex justify-center items-center gap-3 bg-zinc-900 hover:bg-zinc-800 text-white py-4 px-8 text-sm font-medium transition-colors w-full sm:w-auto"
          >
            Explore Inventory <Arrow />
          </a>
          <button 
            className="group flex justify-center items-center gap-3 border border-zinc-200 hover:border-zinc-900 text-zinc-900 bg-white py-4 px-8 text-sm font-medium transition-colors w-full sm:w-auto"
            onClick={() => setOpen(true)}
          >
            Contact Sales
          </button>
        </div>
      </section>

      {/* Numbers Section */}
      <section className="border-b border-zinc-200">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-zinc-200">
          {[
            ["10,000+", "PSI Rating"], 
            ["0.01mm", "Tolerance"], 
            ["100%", "Tested"], 
            ["50+", "Countries"]
          ].map(([n, t]) => (
            <div key={t} className="p-8 md:p-12 flex flex-col gap-2">
              <b className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900">{n}</b>
              <span className="text-xs text-zinc-500 uppercase tracking-widest font-semibold">{t}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 md:py-32 max-w-7xl mx-auto px-6 border-b border-zinc-200">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-6">Inventory</h2>
          <p className="max-w-xl text-zinc-500 text-lg">
            Review our standardized components. For bespoke requirements, contact our engineering team directly.
          </p>
        </div>

        <div className="flex gap-8 border-b border-zinc-200 mb-12 overflow-x-auto">
          {["All", "Valves", "Manifolds", "Fittings"].map(n => (
            <button 
              className={`pb-4 text-sm font-medium whitespace-nowrap transition-colors relative ${group === n ? "text-zinc-900" : "text-zinc-400 hover:text-zinc-600"}`} 
              onClick={() => setGroup(n)} 
              key={n}
            >
              {n}
              {group === n && <span className="absolute bottom-[-1px] left-0 right-0 h-[1px] bg-zinc-900" />}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-200 border border-zinc-200">
          {visible.map(i => (
            <article className="group bg-white p-8 flex flex-col h-full hover:bg-zinc-50 transition-colors" key={i.code}>
              <div className="flex justify-between items-start mb-12">
                <span className="text-4xl text-zinc-300 group-hover:text-zinc-900 transition-colors">
                  {i.group === "Fittings" ? "⌘" : i.group === "Manifolds" ? "⊞" : "◉"}
                </span>
                <small className="font-mono text-[10px] text-zinc-400 font-medium">{i.code}</small>
              </div>
              <div className="mt-auto">
                <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">{i.group}</p>
                <h3 className="text-xl font-bold tracking-tight text-zinc-900 mb-6">{i.name}</h3>
                <dl className="border-t border-zinc-100">
                  {[
                    ["Pressure", i.pressure],
                    ["Size", i.size],
                    ["Material", i.metal]
                  ].map(([dt, dd]) => (
                    <div key={dt} className="flex justify-between py-3 border-b border-zinc-100">
                      <dt className="text-xs text-zinc-500">{dt}</dt>
                      <dd className="text-xs font-medium text-zinc-900">{dd}</dd>
                    </div>
                  ))}
                </dl>
                <button 
                  onClick={() => setOpen(true)}
                  className="mt-8 flex items-center gap-2 text-sm font-semibold text-zinc-900 hover:opacity-70 transition-opacity group/btn"
                >
                  Request Specifications <Arrow />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-24 md:py-32 max-w-7xl mx-auto px-6 border-b border-zinc-200">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-6">Process</h2>
          <p className="max-w-xl text-zinc-500 text-lg">
            Manufacturing at the highest tolerances requires strict adherence to protocol.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-200 border border-zinc-200">
          {[
            ["01", "CNC Turning", "Micro-precision machining to exact dimensional tolerances."], 
            ["02", "Metal Forming", "Forging robust structural bodies for high-pressure limits."], 
            ["03", "Material Check", "Spectroscopic validation of alloy grades."], 
            ["04", "Custom Build", "Bespoke fabrication from client schematics."]
          ].map(([n, t, x]) => (
            <article key={n} className="bg-white p-10 md:p-16 hover:bg-zinc-50 transition-colors">
              <span className="text-sm font-semibold text-zinc-400 mb-8 block">{n}</span>
              <h3 className="text-2xl font-bold tracking-tight text-zinc-900 mb-4">{t}</h3>
              <p className="text-base text-zinc-500 leading-relaxed mb-8">{x}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Quality Section */}
      <section id="quality" className="py-24 md:py-32 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center border-b border-zinc-200">
        <div className="aspect-square bg-zinc-100 flex flex-col justify-center items-center text-center p-12">
          <span className="text-sm font-semibold text-zinc-500 uppercase tracking-widest mb-6">QA Protocol</span>
          <b className="text-8xl md:text-9xl font-bold tracking-tighter text-zinc-900 leading-none">100<span className="text-5xl md:text-6xl text-zinc-400">%</span></b>
          <span className="mt-6 text-sm font-medium text-zinc-900 uppercase tracking-widest border border-zinc-900 py-2 px-6">Verified</span>
        </div>
        
        <div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-6">Zero compromise.</h2>
          <p className="text-zinc-500 text-lg leading-relaxed mb-10">
            Our multi-stage verification protocol ensures every fitting and valve meets stringent international safety and performance standards.
          </p>
          <ul className="space-y-6 mb-12 border-t border-zinc-200 pt-8">
            {[
              "Hydrostatic pressure testing", 
              "Positive Material Identification (PMI)", 
              "NACE MR0175 / ISO 15156 compliant", 
              "Full heat traceability numbering"
            ].map(t => (
              <li key={t} className="flex items-center gap-4 text-sm font-medium text-zinc-900">
                <span className="w-1.5 h-1.5 bg-zinc-900 block" />
                {t}
              </li>
            ))}
          </ul>
          <button 
            className="group flex items-center gap-3 border border-zinc-900 text-zinc-900 hover:bg-zinc-900 hover:text-white py-3 px-6 text-sm font-medium transition-colors"
            onClick={() => setOpen(true)}
          >
            Request Certificates <Arrow />
          </button>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-24 md:py-32 max-w-7xl mx-auto px-6 border-b border-zinc-200">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900">Deployment Sectors</h2>
          </div>
          <button onClick={() => setOpen(true)} className="text-sm font-semibold text-zinc-900 hover:opacity-70 transition-opacity">
            Consult our engineers →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-zinc-200 border border-zinc-200">
          {[
            ["Oil & Gas", "Extreme pressure valves for extraction and refinement."], 
            ["Petrochemical", "Corrosion-resistant lines for chemical processing."], 
            ["Pharma", "Ultra-pure fittings for medical-grade production."], 
            ["Power Gen", "High-temp components for thermal systems."], 
            ["Desalination", "Durable alloys for water purification."]
          ].map(([t, x], i) => (
            <article key={t} className="bg-white p-8 hover:bg-zinc-50 transition-colors flex flex-col min-h-[240px]">
              <span className="text-xs font-semibold text-zinc-400 mb-auto">0{i + 1}</span>
              <h3 className="text-xl font-bold tracking-tight text-zinc-900 mb-4">{t}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{x}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 leading-tight mb-6">Complex requirements?<br />Let's engineer a solution.</h2>
          <p className="text-zinc-500 text-lg leading-relaxed mb-8">
            Submit your operational parameters, material specifications, or technical drawings. Our engineers will configure the optimal assembly.
          </p>
        </div>
        <div className="w-full bg-zinc-50 p-8 md:p-12 border border-zinc-200">
          {sent ? (
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">Transmission Received</h3>
              <p className="text-zinc-500 mb-8">Our engineering team is reviewing your parameters.</p>
              <button 
                className="bg-zinc-900 text-white py-3 px-8 text-sm font-medium hover:bg-zinc-800 transition-colors"
                onClick={() => setSent(false)}
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form className="flex flex-col gap-6" onSubmit={e => { e.preventDefault(); setSent(true) }}>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-zinc-900 uppercase tracking-wider">Name</label>
                <input required className="border-b border-zinc-300 bg-transparent py-3 text-sm focus:outline-none focus:border-zinc-900 transition-colors" placeholder="Operator Name" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-zinc-900 uppercase tracking-wider">Email</label>
                <input required type="email" className="border-b border-zinc-300 bg-transparent py-3 text-sm focus:outline-none focus:border-zinc-900 transition-colors" placeholder="comms@company.com" />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-zinc-900 uppercase tracking-wider">Material</label>
                  <select className="border-b border-zinc-300 bg-transparent py-3 text-sm focus:outline-none focus:border-zinc-900 transition-colors appearance-none cursor-pointer">
                    <option>SS 316L</option>
                    <option>Hastelloy C276</option>
                    <option>Monel 400</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-zinc-900 uppercase tracking-wider">Pressure</label>
                  <select className="border-b border-zinc-300 bg-transparent py-3 text-sm focus:outline-none focus:border-zinc-900 transition-colors appearance-none cursor-pointer">
                    <option>6,000 PSI</option>
                    <option>10,000 PSI</option>
                    <option>Custom</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <label className="text-xs font-semibold text-zinc-900 uppercase tracking-wider">Parameters</label>
                <textarea required className="border border-zinc-300 bg-transparent p-4 text-sm focus:outline-none focus:border-zinc-900 transition-colors min-h-[120px] resize-y" placeholder="Additional specifications..." />
              </div>
              <button type="submit" className="group mt-4 flex items-center justify-center gap-3 bg-zinc-900 hover:bg-zinc-800 text-white py-4 px-8 text-sm font-medium transition-colors">
                Submit Request <Arrow />
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 text-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="md:col-span-2">
            <span className="font-bold text-2xl tracking-widest leading-none mb-6 block">
              HEXUS<span className="text-zinc-500 font-medium ml-2">ENGINEERS</span>
            </span>
            <p className="text-zinc-400 max-w-sm leading-relaxed">Precision valves and high-integrity fittings for demanding industrial environments.</p>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-zinc-600 mb-2">Navigation</span>
            {navLinks.map(n => (
              <a key={n} href={`#${n.toLowerCase().replace(" ", "")}`} className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">{n}</a>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-zinc-600 mb-2">Compliance</span>
            <span className="text-sm font-medium text-zinc-400">ISO 9001:2015</span>
            <span className="text-sm font-medium text-zinc-400">PED 2014/68/EU</span>
            <span className="text-sm font-medium text-zinc-400">NACE MR0175</span>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <span className="text-xs text-zinc-600 font-medium tracking-wide">© 2026 HEXUS ENGINEERS. ALL RIGHTS RESERVED.</span>
          <span className="text-xs text-zinc-600 font-mono">v3.0.0-MINIMAL</span>
        </div>
      </footer>

      {/* Global Modal Overlay (for the top buttons) */}
      {open && (
        <div className="fixed inset-0 z-[100] bg-zinc-900/40 backdrop-blur-sm grid place-items-center p-6 animate-[fadeIn_0.2s_ease-out]">
          <div className="bg-white p-8 md:p-12 w-full max-w-xl relative border border-zinc-200">
            <button 
              className="absolute top-6 right-6 text-zinc-400 hover:text-zinc-900 text-2xl transition-colors"
              onClick={() => setOpen(false)}
            >
              ×
            </button>
            <h3 className="text-2xl font-bold text-zinc-900 mb-8">Engineering Consultation</h3>
            <p className="text-zinc-500 mb-8">Please fill out the form in the Contact section below, or email us directly at <b>sales@hexusengineers.com</b>.</p>
            <button 
              className="bg-zinc-900 text-white py-3 px-8 text-sm font-medium hover:bg-zinc-800 transition-colors w-full"
              onClick={() => { setOpen(false); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            >
              Go to Form
            </button>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}} />
    </main>
  );
}

