export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-lines relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-[var(--hd-border-subtle)] z-20" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[var(--hd-border-subtle)] z-20" />
      <div aria-hidden="true" className="pointer-events-none absolute top-0 bottom-0 hidden md:block z-0" style={{left: "var(--container-px)", right: "calc(50% + 550px)", maskImage: "linear-gradient(to bottom, transparent 0%, black 18%, black 55%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 18%, black 55%, transparent 100%)"}}>
        <div className="absolute inset-0 pointer-events-none">
          <div style={{position: "relative", overflow: "hidden", background: "transparent", touchAction: "none", width: "100%", height: "100%"}}>
            <canvas width="106" height="2103" style={{display: "block", width: "106px", height: "2103px", transform: "translateZ(0px)", willChange: "transform"}} />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute top-0 bottom-0 hidden md:block z-0" style={{left: "calc(50% + 550px)", right: "var(--container-px)", maskImage: "linear-gradient(to bottom, transparent 0%, black 18%, black 55%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 18%, black 55%, transparent 100%)"}}>
        <div className="absolute inset-0 pointer-events-none">
          <div style={{position: "relative", overflow: "hidden", background: "transparent", touchAction: "none", width: "100%", height: "100%"}}>
            <canvas width="106" height="2103" style={{display: "block", width: "106px", height: "2103px", transform: "translateZ(0px)", willChange: "transform"}} />
          </div>
        </div>
      </div>
      <div className="container relative z-10">
        <div className="max-w-[1100px] mx-auto relative">
          <div className="absolute top-0 bottom-0 pointer-events-none hidden md:block z-20" style={{left: "0", right: "0"}}>
            <div className="absolute top-0 bottom-0 left-0 w-px bg-[var(--hd-border-subtle)]" />
            <div className="absolute top-0 bottom-0 right-0 w-px bg-[var(--hd-border-subtle)]" />
          </div>
          <div className="relative">
            <div>
              <div className="relative grid grid-cols-1 md:grid-cols-12">
                <div className="hidden md:block absolute top-0 bottom-0 w-px bg-[var(--hd-border-subtle)]" style={{left: "calc(5 / 12 * 100%)"}} />
                <div className="col-span-full md:col-span-5 self-center px-5 pt-8 pb-4 md:px-10 md:pt-0 md:pb-0 md:px-12">
                  <div data-scroll="true" className="ls-fade-up is-inview">
                    <h3 className="font-serif text-[clamp(26px,3.5vw,40px)] font-normal tracking-[-0.3px] md:tracking-[-0.5px] leading-[1.1] mb-2.5 md:mb-3">Connect</h3>
                    <p className="text-[15px] leading-[1.45] md:text-[17px] md:leading-[22px] text-[var(--hd-text-tertiary)] max-w-[400px]">Systems of record, help centers, CRMs, runbooks, wikis.</p>
                  </div>
                </div>
                <div className="col-span-full md:col-span-7 relative overflow-hidden " style={{maskImage: "radial-gradient(ellipse 60% 160% at 50% 50%, black 65%, transparent 100%)", WebkitMaskImage: "radial-gradient(ellipse 60% 160% at 50% 50%, black 65%, transparent 100%)"}}>
                  <div className="relative z-10 px-3 md:px-8 pb-6 md:pb-0 pointer-events-none">
                    <div data-scroll="true" className="ls-fade-up relative md:h-[440px] mt-2 md:mt-0 h-[400px] is-inview" style={{transitionDelay: "0.1s"}}>
                      <div className="absolute inset-0">
                        <div className="absolute inset-0" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-px bg-[var(--hd-border-subtle)]" />
              <div className="py-5 md:py-14" style={{background: "radial-gradient(60% 100% at 50% 50%, color-mix(in srgb, var(--hd-navy-mist) 4%, transparent) 0%, transparent 90%), radial-gradient(40% 80% at 30% 50%, color-mix(in srgb, var(--hd-navy-whisper) 3%, transparent) 0%, transparent 85%), radial-gradient(40% 80% at 70% 50%, color-mix(in srgb, var(--hd-navy-mist) 2.5%, transparent) 0%, transparent 85%)"}} />
              <div className="h-px bg-[var(--hd-border-subtle)]" />
            </div>
            <div>
              <div className="relative grid grid-cols-1 md:grid-cols-12">
                <div className="hidden md:block absolute top-0 bottom-0 w-px bg-[var(--hd-border-subtle)]" style={{left: "calc(7 / 12 * 100%)"}} />
                <div className="col-span-full md:col-span-5 self-center px-5 pt-8 pb-4 md:px-10 md:pt-0 md:pb-0 md:col-start-8 md:row-start-1 md:px-12">
                  <div data-scroll="true" className="ls-fade-up is-inview">
                    <h3 className="font-serif text-[clamp(26px,3.5vw,40px)] font-normal tracking-[-0.3px] md:tracking-[-0.5px] leading-[1.1] mb-2.5 md:mb-3">Audit</h3>
                    <p className="text-[15px] leading-[1.45] md:text-[17px] md:leading-[22px] text-[var(--hd-text-tertiary)] max-w-[400px]">Conflicts, stale facts, broken links, GEO, plus any check you want.</p>
                  </div>
                </div>
                <div className="col-span-full md:col-span-7 relative overflow-hidden md:col-start-1 md:row-start-1" style={{maskImage: "radial-gradient(ellipse 60% 160% at 50% 50%, black 65%, transparent 100%)", WebkitMaskImage: "radial-gradient(ellipse 60% 160% at 50% 50%, black 65%, transparent 100%)"}}>
                  <div className="relative z-10 px-3 md:px-8 pb-6 md:pb-0 pointer-events-none">
                    <div data-scroll="true" className="ls-fade-up relative md:h-[440px] mt-2 md:mt-0 h-[380px] is-inview" style={{transitionDelay: "0.1s"}}>
                      <div className="absolute inset-0">
                        <div className="absolute inset-0" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-px bg-[var(--hd-border-subtle)]" />
              <div className="py-5 md:py-14" style={{background: "radial-gradient(60% 100% at 50% 50%, color-mix(in srgb, var(--hd-navy-mist) 4%, transparent) 0%, transparent 90%), radial-gradient(40% 80% at 30% 50%, color-mix(in srgb, var(--hd-navy-whisper) 3%, transparent) 0%, transparent 85%), radial-gradient(40% 80% at 70% 50%, color-mix(in srgb, var(--hd-navy-mist) 2.5%, transparent) 0%, transparent 85%)"}} />
              <div className="h-px bg-[var(--hd-border-subtle)]" />
            </div>
            <div>
              <div className="relative grid grid-cols-1 md:grid-cols-12">
                <div className="hidden md:block absolute top-0 bottom-0 w-px bg-[var(--hd-border-subtle)]" style={{left: "calc(5 / 12 * 100%)"}} />
                <div className="col-span-full md:col-span-5 self-center px-5 pt-8 pb-4 md:px-10 md:pt-0 md:pb-0 md:px-12">
                  <div data-scroll="true" className="ls-fade-up is-inview">
                    <h3 className="font-serif text-[clamp(26px,3.5vw,40px)] font-normal tracking-[-0.3px] md:tracking-[-0.5px] leading-[1.1] mb-2.5 md:mb-3">Evaluate</h3>
                    <p className="text-[15px] leading-[1.45] md:text-[17px] md:leading-[22px] text-[var(--hd-text-tertiary)] max-w-[400px]">Every answer graded against the source of truth, in production.</p>
                  </div>
                </div>
                <div className="col-span-full md:col-span-7 relative overflow-hidden " style={{maskImage: "radial-gradient(ellipse 60% 160% at 50% 50%, black 65%, transparent 100%)", WebkitMaskImage: "radial-gradient(ellipse 60% 160% at 50% 50%, black 65%, transparent 100%)"}}>
                  <div className="relative z-10 px-3 md:px-8 pb-6 md:pb-0 pointer-events-none">
                    <div data-scroll="true" className="ls-fade-up relative md:h-[440px] mt-2 md:mt-0 h-[400px] is-inview" style={{transitionDelay: "0.1s"}}>
                      <div className="absolute inset-0">
                        <div className="absolute inset-0" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-px bg-[var(--hd-border-subtle)]" />
              <div className="py-5 md:py-14" style={{background: "radial-gradient(60% 100% at 50% 50%, color-mix(in srgb, var(--hd-navy-mist) 4%, transparent) 0%, transparent 90%), radial-gradient(40% 80% at 30% 50%, color-mix(in srgb, var(--hd-navy-whisper) 3%, transparent) 0%, transparent 85%), radial-gradient(40% 80% at 70% 50%, color-mix(in srgb, var(--hd-navy-mist) 2.5%, transparent) 0%, transparent 85%)"}} />
              <div className="h-px bg-[var(--hd-border-subtle)]" />
            </div>
            <div>
              <div className="relative grid grid-cols-1 md:grid-cols-12">
                <div className="hidden md:block absolute top-0 bottom-0 w-px bg-[var(--hd-border-subtle)]" style={{left: "calc(7 / 12 * 100%)"}} />
                <div className="col-span-full md:col-span-5 self-center px-5 pt-8 pb-4 md:px-10 md:pt-0 md:pb-0 md:col-start-8 md:row-start-1 md:px-12">
                  <div data-scroll="true" className="ls-fade-up is-inview">
                    <h3 className="font-serif text-[clamp(26px,3.5vw,40px)] font-normal tracking-[-0.3px] md:tracking-[-0.5px] leading-[1.1] mb-2.5 md:mb-3">Remediate</h3>
                    <p className="text-[15px] leading-[1.45] md:text-[17px] md:leading-[22px] text-[var(--hd-text-tertiary)] max-w-[400px]">Enable continuous learning as every fix trains the next answer.</p>
                  </div>
                </div>
                <div className="col-span-full md:col-span-7 relative overflow-hidden md:col-start-1 md:row-start-1" style={{maskImage: "radial-gradient(ellipse 60% 160% at 50% 50%, black 65%, transparent 100%)", WebkitMaskImage: "radial-gradient(ellipse 60% 160% at 50% 50%, black 65%, transparent 100%)"}}>
                  <div className="relative z-10 px-3 md:px-8 pb-6 md:pb-0 pointer-events-none">
                    <div data-scroll="true" className="ls-fade-up relative md:h-[440px] mt-2 md:mt-0 h-[400px] is-inview" style={{transitionDelay: "0.1s"}}>
                      <div className="absolute inset-0">
                        <div className="absolute inset-0" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-px bg-[var(--hd-border-subtle)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
