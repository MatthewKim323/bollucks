export function Hero() {
  return (
    <section id="hero" className="section-lines relative overflow-hidden bg-[var(--hd-bg-base)]" style={{height: "82svh", minHeight: "560px"}}>
      <div className="absolute top-[50%] bottom-[10%] md:top-0 md:bottom-0 overflow-hidden" style={{left: "var(--container-px)", right: "var(--container-px)", opacity: "1", transition: "opacity 900ms cubic-bezier(0.16, 1, 0.3, 1)"}}>
        <div style={{position: "relative", width: "100%", height: "100%", overflow: "hidden", background: "#ffffff", touchAction: "none"}}>
          <canvas style={{display: "block", width: "1312px", height: "738px", cursor: "default"}} width="1312" height="738" />
        </div>
      </div>
      <div className="relative z-10 h-full flex flex-col items-center px-6 pointer-events-none" style={{paddingTop: "14vh", paddingBottom: "5vh"}}>
        <div className="text-center mx-auto transition-[opacity,transform] duration-[600ms] [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] opacity-100 translate-y-0">
          <h1 className="hd-hero-text max-w-[720px] mx-auto font-serif text-hero font-normal">
            <span data-br="_R_2ocltdb_" data-brr="1" style={{display: "inline-block", verticalAlign: "top", textDecoration: "inherit", textWrap: "balance"}}>The Control Plane for Agent Reliability</span>
          </h1>
          <p className="max-w-[500px] mx-auto text-subhead text-[#525252] mt-5 md:mt-4">
            <span data-br="_R_4ocltdb_" data-brr="1" style={{display: "inline-block", verticalAlign: "top", textDecoration: "inherit", textWrap: "balance"}}>We make your knowledge AI-ready so your agents work in production.</span>
          </p>
          <div className="flex justify-center gap-2.5 mt-8 md:mt-6 pointer-events-auto">
            <a href="/contact">
              <button className="btn-primary">Book a demo</button>
            </a>
          </div>
        </div>
        <div className="flex-1" />
        <div className="mx-auto pointer-events-auto transition-[opacity,transform] duration-[600ms] [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] delay-150 opacity-100 translate-y-0">
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-8">
            <span className="text-[12px] md:text-[14px] font-mono text-[var(--hd-accent)] opacity-80 whitespace-nowrap shrink-0">Trusted by</span>
            <div className="grid grid-cols-[1fr_1fr] items-start justify-items-center gap-x-6 gap-y-6 [&>*:last-child:nth-child(odd)]:col-span-2 md:flex md:items-center md:gap-12 md:gap-y-0 md:[&>*:last-child:nth-child(odd)]:col-span-1">
              <div className="h-8 md:h-10 shrink-0 opacity-80" style={{backgroundColor: "var(--hd-accent)", maskImage: "url(/img/img-750ed2a87d.webp)", WebkitMaskImage: "url(/img/img-750ed2a87d.webp)", maskSize: "contain", WebkitMaskSize: "contain", maskRepeat: "no-repeat", WebkitMaskRepeat: "no-repeat", maskPosition: "center", WebkitMaskPosition: "center"}}>
                <img src="/img/img-750ed2a87d.webp" alt="Disney" className="h-8 md:h-10 w-auto invisible" />
              </div>
              <div className="relative shrink-0">
                <a className="group flex flex-col items-center shrink-0 transition-opacity hover:opacity-100" href="/case-studies/espn">
                  <div className="h-8 md:h-10 shrink-0 opacity-80 transition-opacity group-hover:opacity-100" style={{backgroundColor: "var(--hd-accent)", maskImage: "url(/img/img-c21e14197b.webp)", WebkitMaskImage: "url(/img/img-c21e14197b.webp)", maskSize: "contain", WebkitMaskSize: "contain", maskRepeat: "no-repeat", WebkitMaskRepeat: "no-repeat", maskPosition: "center", WebkitMaskPosition: "center"}}>
                    <img src="/img/img-c21e14197b.webp" alt="ESPN" className="h-8 md:h-10 w-auto invisible" />
                  </div>
                  <span className="text-[10px] md:text-[11px] font-mono text-[var(--hd-accent)] opacity-60 group-hover:opacity-100 transition-opacity -mt-1">Read Case Study</span>
                </a>
              </div>
              <div className="h-6 md:h-7 shrink-0 opacity-80" style={{backgroundColor: "var(--hd-accent)", maskImage: "url(/img/img-2b2399320e.webp)", WebkitMaskImage: "url(/img/img-2b2399320e.webp)", maskSize: "contain", WebkitMaskSize: "contain", maskRepeat: "no-repeat", WebkitMaskRepeat: "no-repeat", maskPosition: "center", WebkitMaskPosition: "center"}}>
                <img src="/img/img-2b2399320e.webp" alt="Ubiquity" className="h-6 md:h-7 w-auto invisible" />
              </div>
              <div className="h-5 md:h-6 shrink-0 opacity-80" style={{backgroundColor: "var(--hd-accent)", maskImage: "url(/img/img-c7ae9753b3.webp)", WebkitMaskImage: "url(/img/img-c7ae9753b3.webp)", maskSize: "contain", WebkitMaskSize: "contain", maskRepeat: "no-repeat", WebkitMaskRepeat: "no-repeat", maskPosition: "center", WebkitMaskPosition: "center"}}>
                <img src="/img/img-c7ae9753b3.webp" alt="Peak Support" className="h-5 md:h-6 w-auto invisible" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
