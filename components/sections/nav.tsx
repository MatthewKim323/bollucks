export function Nav() {
  return (
    <div className="fixed inset-x-0 z-50 transition-transform duration-300 bg-white" style={{top: "var(--banner-height, 0px)", transform: "translateY(0px)", paddingLeft: "var(--container-px)", paddingRight: "var(--container-px)"}}>
      <header className="relative flex items-center pt-4 pb-4 md:pt-4 md:pb-4 px-5 max-w-[1100px] mx-auto border-l border-r border-[var(--hd-border-subtle)] leading-none">
        <a className="flex items-center" href="/">
          <div style={{width: "90px", height: "30px", backgroundColor: "var(--hd-accent)", maskImage: "url(/img/img-0976693802.webp)", WebkitMaskImage: "url(/img/img-0976693802.webp)", maskSize: "contain", WebkitMaskSize: "contain", maskRepeat: "no-repeat", WebkitMaskRepeat: "no-repeat", maskPosition: "center", WebkitMaskPosition: "center"}} />
        </a>
        <nav className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-8">
          <a className="text-[16px] font-sans text-[var(--hd-text-tertiary)] hover:text-[var(--hd-text-primary)] transition-colors" href="/blog">Blog</a>
          <button type="button" aria-expanded="false" aria-haspopup="menu" className="text-[16px] font-sans text-[var(--hd-text-tertiary)] hover:text-[var(--hd-text-primary)] transition-colors inline-flex items-center gap-1">
            Solutions
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true" className="opacity-60" style={{transform: "none", transition: "transform 0.2s cubic-bezier(0.16,1,0.3,1)"}}>
              <path d="M2 4l3 3 3-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <a className="text-[16px] font-sans text-[var(--hd-text-tertiary)] hover:text-[var(--hd-text-primary)] transition-colors" href="/integrations">Integrations</a>
          <a className="text-[16px] font-sans text-[var(--hd-text-tertiary)] hover:text-[var(--hd-text-primary)] transition-colors" href="/careers">Careers</a>
        </nav>
        <div className="flex items-center gap-4 ml-auto">
          <a className="btn-primary inline-flex items-center" href="/contact">Contact</a>
          <button className="md:hidden flex flex-col justify-center gap-[4px] w-7 h-7 -mr-2" aria-label="Toggle menu">
            <span className="block h-px w-[18px] bg-[var(--hd-text-primary)] transition-all duration-200 origin-center" style={{transform: "none", opacity: "1"}} />
            <span className="block h-px w-[18px] bg-[var(--hd-text-primary)] transition-all duration-200 origin-center" style={{opacity: "1"}} />
            <span className="block h-px w-[18px] bg-[var(--hd-text-primary)] transition-all duration-200 origin-center" style={{transform: "none", opacity: "1"}} />
          </button>
        </div>
      </header>
      <div className="hidden md:grid bg-white max-w-[1100px] mx-auto border-l border-r border-[var(--hd-border-subtle)] transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]" style={{gridTemplateRows: "0fr", opacity: "0"}}>
        <div className="overflow-hidden">
          <div className="border-t border-[var(--hd-border-subtle)]">
            <div role="menu" className="grid grid-cols-2 gap-x-10 px-8 py-8">
              <div>
                <p className="text-label font-mono uppercase text-[var(--hd-text-muted)] mb-3 px-3">Departments</p>
                <ul className="flex flex-col gap-1">
                  <li>
                    <a role="menuitem" className="group flex items-center gap-3 px-3 py-2.5 rounded-[10px] hover:bg-[var(--hd-bg-raised)] transition-colors" href="/case-studies/espn">
                      <span className="shrink-0" style={{color: "var(--hd-accent)"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" color="currentColor" className="" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                          <path d="M17 10.8045C17 10.4588 17 10.286 17.052 10.132C17.2032 9.68444 17.6018 9.51076 18.0011 9.32888C18.45 9.12442 18.6744 9.02219 18.8968 9.0042C19.1493 8.98378 19.4022 9.03818 19.618 9.15929C19.9041 9.31984 20.1036 9.62493 20.3079 9.87302C21.2513 11.0188 21.7229 11.5918 21.8955 12.2236C22.0348 12.7334 22.0348 13.2666 21.8955 13.7764C21.6438 14.6979 20.8485 15.4704 20.2598 16.1854C19.9587 16.5511 19.8081 16.734 19.618 16.8407C19.4022 16.9618 19.1493 17.0162 18.8968 16.9958C18.6744 16.9778 18.45 16.8756 18.0011 16.6711C17.6018 16.4892 17.2032 16.3156 17.052 15.868C17 15.714 17 15.5412 17 15.1955V10.8045Z" stroke="currentColor" strokeWidth="1.5" />
                          <path d="M7 10.8046C7 10.3694 6.98778 9.97821 6.63591 9.6722C6.50793 9.5609 6.33825 9.48361 5.99891 9.32905C5.55001 9.12458 5.32556 9.02235 5.10316 9.00436C4.43591 8.9504 4.07692 9.40581 3.69213 9.87318C2.74875 11.019 2.27706 11.5919 2.10446 12.2237C1.96518 12.7336 1.96518 13.2668 2.10446 13.7766C2.3562 14.6981 3.15152 15.4705 3.74021 16.1856C4.11129 16.6363 4.46577 17.0475 5.10316 16.996C5.32556 16.978 5.55001 16.8757 5.99891 16.6713C6.33825 16.5167 6.50793 16.4394 6.63591 16.3281C6.98778 16.0221 7 15.631 7 15.1957V10.8046Z" stroke="currentColor" strokeWidth="1.5" />
                          <path d="M5 9C5 5.68629 8.13401 3 12 3C15.866 3 19 5.68629 19 9" stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d="M19 17V17.8C19 19.5673 17.2091 21 15 21H13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        </svg>
                      </span>
                      <span className="text-[15px] text-[var(--hd-text-primary)] group-hover:text-[var(--hd-accent)] transition-colors leading-[1.2]">Customer Support</span>
                    </a>
                  </li>
                  <li>
                    <a role="menuitem" className="group flex items-center gap-3 px-3 py-2.5 rounded-[10px] hover:bg-[var(--hd-bg-raised)] transition-colors" href="/case-studies/it">
                      <span className="shrink-0" style={{color: "var(--hd-accent)"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" color="currentColor" className="" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                          <path d="M16 3H8C5.17157 3 3.75736 3 2.87868 3.87868C2 4.75736 2 6.17157 2 9V11C2 13.8284 2 15.2426 2.87868 16.1213C3.75736 17 5.17157 17 8 17H16C18.8284 17 20.2426 17 21.1213 16.1213C22 15.2426 22 13.8284 22 11V9C22 6.17157 22 4.75736 21.1213 3.87868C20.2426 3 18.8284 3 16 3Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d="M14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9H9.5C8.39543 9 7.5 9.89543 7.5 11C7.5 12.1046 8.39543 13 9.5 13H14.5C15.6046 13 16.5 12.1046 16.5 11C16.5 9.89543 15.6046 9 14.5 9H14Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d="M14 21H16M14 21C13.1716 21 12.5 20.3284 12.5 19.5V17L12 17M14 21H10M10 21H8M10 21C10.8284 21 11.5 20.3284 11.5 19.5V17L12 17M12 17V21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        </svg>
                      </span>
                      <span className="text-[15px] text-[var(--hd-text-primary)] group-hover:text-[var(--hd-accent)] transition-colors leading-[1.2]">IT</span>
                    </a>
                  </li>
                  <li>
                    <a role="menuitem" className="group flex items-center gap-3 px-3 py-2.5 rounded-[10px] hover:bg-[var(--hd-bg-raised)] transition-colors" href="/case-studies/contact-centers">
                      <span className="shrink-0" style={{color: "var(--hd-accent)"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" color="currentColor" className="" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                          <path d="M4.91186 10.5413L7.55229 7.90088C8.09091 7.36227 8.27728 6.56642 8.05944 5.83652C7.8891 5.26577 7.69718 4.57964 7.56961 3.99292C7.45162 3.45027 6.97545 3 6.42012 3H4.91186C3.8012 3 2.88911 3.90384 3.01094 5.0078C3.93709 13.3996 10.6004 20.0629 18.9922 20.9891C20.0962 21.1109 21 20.1988 21 19.0881V17.5799C21 17.0246 20.5479 16.569 20.0015 16.4696C19.3988 16.36 18.7611 16.1804 18.2276 16.0103C17.4611 15.7659 16.6091 15.9377 16.0403 16.5065L13.4587 19.0881" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        </svg>
                      </span>
                      <span className="text-[15px] text-[var(--hd-text-primary)] group-hover:text-[var(--hd-accent)] transition-colors leading-[1.2]">Contact Centers</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-label font-mono uppercase text-[var(--hd-text-muted)] mb-3 px-3">Industry</p>
                <ul className="flex flex-col gap-1">
                  <li>
                    <a role="menuitem" className="group flex items-center gap-3 px-3 py-2.5 rounded-[10px] hover:bg-[var(--hd-bg-raised)] transition-colors" href="/solutions/industries/media-entertainment">
                      <span className="shrink-0" style={{color: "var(--hd-accent)"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" color="currentColor" className="" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                          <path d="M14 3H10C6.22876 3 4.34315 3 3.17157 4.17157C2 5.34315 2 7.22876 2 11C2 14.7712 2 16.6569 3.17157 17.8284C4.34315 19 6.22876 19 10 19H14C17.7712 19 19.6569 19 20.8284 17.8284C22 16.6569 22 14.7712 22 11C22 7.22876 22 5.34315 20.8284 4.17157C19.6569 3 17.7712 3 14 3Z" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
                          <path d="M18 19L19 21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d="M6 19L5 21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        </svg>
                      </span>
                      <span className="text-[15px] text-[var(--hd-text-primary)] group-hover:text-[var(--hd-accent)] transition-colors leading-[1.2]">Media & Entertainment</span>
                    </a>
                  </li>
                  <li>
                    <a role="menuitem" className="group flex items-center gap-3 px-3 py-2.5 rounded-[10px] hover:bg-[var(--hd-bg-raised)] transition-colors" href="/solutions/industries/retail">
                      <span className="shrink-0" style={{color: "var(--hd-accent)"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" color="currentColor" className="" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                          <path d="M7 6C7 7.65685 8.34315 9 10 9C11.6569 9 13 7.65685 13 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d="M11.1117 3H8.88824C6.2172 3 4.88168 3 4.01968 3.82064C3.15769 4.64128 3.08361 5.98325 2.93545 8.66719L2.60424 14.6672C2.44025 17.6379 2.35826 19.1233 3.2403 20.0616C4.12235 21 5.60058 21 8.55703 21H11.443C14.3994 21 15.8777 21 16.7597 20.0616C17.6417 19.1233 17.5597 17.6379 17.3957 14.6672L17.0645 8.66717C16.9163 5.98324 16.8423 4.64127 15.9803 3.82064C15.1183 3 13.7828 3 11.1117 3Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d="M12.8882 3H15.1117C17.7827 3 19.1182 3 19.9802 3.82064C20.8422 4.64127 20.9163 5.98324 21.0645 8.66717L21.3957 14.6672C21.5597 17.6379 21.6417 19.1233 20.7597 20.0616C19.8776 21 18.3994 21 15.4429 21H12.557" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        </svg>
                      </span>
                      <span className="text-[15px] text-[var(--hd-text-primary)] group-hover:text-[var(--hd-accent)] transition-colors leading-[1.2]">Retail</span>
                    </a>
                  </li>
                  <li>
                    <a role="menuitem" className="group flex items-center gap-3 px-3 py-2.5 rounded-[10px] hover:bg-[var(--hd-bg-raised)] transition-colors" href="/solutions/industries/financial-services">
                      <span className="shrink-0" style={{color: "var(--hd-accent)"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" color="currentColor" className="" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                          <path d="M12.125 5.75H12M12.25 5.75C12.25 5.88807 12.1381 6 12 6C11.8619 6 11.75 5.88807 11.75 5.75C11.75 5.61193 11.8619 5.5 12 5.5C12.1381 5.5 12.25 5.61193 12.25 5.75Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d="M5 9V19M9 9V19" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d="M15 9V19M19 9V19" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d="M21.3518 9H2.64822C2.29022 9 2 8.70651 2 8.34447C2 8.12259 2.11099 7.91577 2.29495 7.79485L8.73007 3.56485C10.3171 2.52162 11.1107 2 12 2C12.8893 2 13.6829 2.52162 15.2699 3.56485L21.7051 7.79485C21.889 7.91577 22 8.12259 22 8.34447C22 8.70651 21.7098 9 21.3518 9Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d="M21.0397 20.2929L20.3519 19.5858C20.0707 19.2968 19.9301 19.1522 19.7514 19.0761C19.5726 19 19.3738 19 18.9762 19H5.02382C4.62621 19 4.4274 19 4.24863 19.0761C4.06987 19.1522 3.92929 19.2968 3.64814 19.5858L2.9603 20.2929C2.25356 21.0194 1.9002 21.3827 2.02456 21.6913C2.14893 22 2.64867 22 3.64814 22H20.3519C21.3513 22 21.8511 22 21.9754 21.6913C22.0998 21.3827 21.7464 21.0194 21.0397 20.2929Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        </svg>
                      </span>
                      <span className="text-[15px] text-[var(--hd-text-primary)] group-hover:text-[var(--hd-accent)] transition-colors leading-[1.2]">Financial Services</span>
                    </a>
                  </li>
                  <li>
                    <a role="menuitem" className="group flex items-center gap-3 px-3 py-2.5 rounded-[10px] hover:bg-[var(--hd-bg-raised)] transition-colors" href="/solutions/industries/telecommunication">
                      <span className="shrink-0" style={{color: "var(--hd-accent)"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" color="currentColor" className="" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                          <circle cx="12" cy="12" r="2" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
                          <path d="M4 18.001C2.74418 16.3295 2 14.2516 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 14.2516 21.2558 16.3295 20 18.001" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
                          <path d="M7.52779 16C6.57771 14.9385 6 13.5367 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 13.5367 17.4223 14.9385 16.4722 16" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
                          <path d="M12 14L12 19" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
                          <path d="M13.2623 19H10.7377C10.4667 19 10.3312 19 10.2019 19.0183C9.94003 19.0552 9.69171 19.1474 9.4774 19.2873C9.37156 19.3564 9.27574 19.4423 9.08411 19.614C8.45381 20.1791 8.13866 20.4616 8.05571 20.6884C7.88399 21.1577 8.12031 21.6692 8.61197 21.8923C8.84946 22 9.29515 22 10.1865 22H13.8135C14.7049 22 15.1505 22 15.388 21.8923C15.8797 21.6692 16.116 21.1577 15.9443 20.6884C15.8613 20.4616 15.5462 20.1791 14.9159 19.614C14.7243 19.4423 14.6284 19.3564 14.5226 19.2873C14.3083 19.1474 14.06 19.0552 13.7981 19.0183C13.6688 19 13.5333 19 13.2623 19Z" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
                        </svg>
                      </span>
                      <span className="text-[15px] text-[var(--hd-text-primary)] group-hover:text-[var(--hd-accent)] transition-colors leading-[1.2]">Telecommunication</span>
                    </a>
                  </li>
                  <li>
                    <a role="menuitem" className="group flex items-center gap-3 px-3 py-2.5 rounded-[10px] hover:bg-[var(--hd-bg-raised)] transition-colors" href="/solutions/industries/healthcare">
                      <span className="shrink-0" style={{color: "var(--hd-accent)"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" color="currentColor" className="" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                          <path d="M14 2V4M14 4V6M14 4H10M10 2V4M10 4V6" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
                          <path d="M3 22V11.3808C3 7.8766 3 6.12452 4.15327 5.03591C4.88623 4.34404 5.90312 4.09189 7.5 4M21 22V11.3808C21 7.8766 21 6.12452 19.8467 5.03591C19.1138 4.34404 18.0969 4.09189 16.5 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d="M14 10H16" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
                          <path d="M14 14H16" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
                          <path d="M7 14H9" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
                          <path d="M7 10H9" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
                          <path d="M2 22H9.5M22 22H14.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d="M9.5 22V19.5C9.5 18.5654 9.5 18.0981 9.70096 17.75C9.83261 17.522 10.022 17.3326 10.25 17.201C10.5981 17 11.0654 17 12 17C12.9346 17 13.4019 17 13.75 17.201C13.978 17.3326 14.1674 17.522 14.299 17.75C14.5 18.0981 14.5 18.5654 14.5 19.5V22" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
                        </svg>
                      </span>
                      <span className="text-[15px] text-[var(--hd-text-primary)] group-hover:text-[var(--hd-accent)] transition-colors leading-[1.2]">Healthcare</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden grid bg-white max-w-[1100px] mx-auto border-l border-r border-[var(--hd-border-subtle)] transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]" style={{gridTemplateRows: "0fr", opacity: "0"}}>
        <div className="overflow-hidden">
          <nav className="flex flex-col gap-4 px-5 py-4 border-t border-[var(--hd-border-subtle)]">
            <a className="text-[16px] font-sans text-[var(--hd-text-tertiary)] hover:text-[var(--hd-text-primary)] transition-colors" href="/blog">Blog</a>
            <div>
              <button type="button" aria-expanded="false" className="w-full flex items-center justify-between text-[16px] font-sans text-[var(--hd-text-tertiary)] hover:text-[var(--hd-text-primary)] transition-colors">
                <span>Solutions</span>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true" className="opacity-60" style={{transform: "none", transition: "transform 0.2s cubic-bezier(0.16,1,0.3,1)"}}>
                  <path d="M2 4l3 3 3-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div className="grid transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]" style={{gridTemplateRows: "0fr", opacity: "0"}}>
                <div className="overflow-hidden">
                  <div className="pt-3 pl-3 flex flex-col gap-3">
                    <p className="text-label font-mono uppercase text-[var(--hd-text-muted)]">Departments</p>
                    <a className="flex items-center gap-2 text-[15px] text-[var(--hd-text-tertiary)] hover:text-[var(--hd-text-primary)] transition-colors" href="/case-studies/espn">
                      <span style={{color: "var(--hd-accent)"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" color="currentColor" className="" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                          <path d="M17 10.8045C17 10.4588 17 10.286 17.052 10.132C17.2032 9.68444 17.6018 9.51076 18.0011 9.32888C18.45 9.12442 18.6744 9.02219 18.8968 9.0042C19.1493 8.98378 19.4022 9.03818 19.618 9.15929C19.9041 9.31984 20.1036 9.62493 20.3079 9.87302C21.2513 11.0188 21.7229 11.5918 21.8955 12.2236C22.0348 12.7334 22.0348 13.2666 21.8955 13.7764C21.6438 14.6979 20.8485 15.4704 20.2598 16.1854C19.9587 16.5511 19.8081 16.734 19.618 16.8407C19.4022 16.9618 19.1493 17.0162 18.8968 16.9958C18.6744 16.9778 18.45 16.8756 18.0011 16.6711C17.6018 16.4892 17.2032 16.3156 17.052 15.868C17 15.714 17 15.5412 17 15.1955V10.8045Z" stroke="currentColor" strokeWidth="1.5" />
                          <path d="M7 10.8046C7 10.3694 6.98778 9.97821 6.63591 9.6722C6.50793 9.5609 6.33825 9.48361 5.99891 9.32905C5.55001 9.12458 5.32556 9.02235 5.10316 9.00436C4.43591 8.9504 4.07692 9.40581 3.69213 9.87318C2.74875 11.019 2.27706 11.5919 2.10446 12.2237C1.96518 12.7336 1.96518 13.2668 2.10446 13.7766C2.3562 14.6981 3.15152 15.4705 3.74021 16.1856C4.11129 16.6363 4.46577 17.0475 5.10316 16.996C5.32556 16.978 5.55001 16.8757 5.99891 16.6713C6.33825 16.5167 6.50793 16.4394 6.63591 16.3281C6.98778 16.0221 7 15.631 7 15.1957V10.8046Z" stroke="currentColor" strokeWidth="1.5" />
                          <path d="M5 9C5 5.68629 8.13401 3 12 3C15.866 3 19 5.68629 19 9" stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d="M19 17V17.8C19 19.5673 17.2091 21 15 21H13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        </svg>
                      </span>
                      <span>Customer Support</span>
                    </a>
                    <a className="flex items-center gap-2 text-[15px] text-[var(--hd-text-tertiary)] hover:text-[var(--hd-text-primary)] transition-colors" href="/case-studies/it">
                      <span style={{color: "var(--hd-accent)"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" color="currentColor" className="" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                          <path d="M16 3H8C5.17157 3 3.75736 3 2.87868 3.87868C2 4.75736 2 6.17157 2 9V11C2 13.8284 2 15.2426 2.87868 16.1213C3.75736 17 5.17157 17 8 17H16C18.8284 17 20.2426 17 21.1213 16.1213C22 15.2426 22 13.8284 22 11V9C22 6.17157 22 4.75736 21.1213 3.87868C20.2426 3 18.8284 3 16 3Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d="M14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9H9.5C8.39543 9 7.5 9.89543 7.5 11C7.5 12.1046 8.39543 13 9.5 13H14.5C15.6046 13 16.5 12.1046 16.5 11C16.5 9.89543 15.6046 9 14.5 9H14Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d="M14 21H16M14 21C13.1716 21 12.5 20.3284 12.5 19.5V17L12 17M14 21H10M10 21H8M10 21C10.8284 21 11.5 20.3284 11.5 19.5V17L12 17M12 17V21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        </svg>
                      </span>
                      <span>IT</span>
                    </a>
                    <a className="flex items-center gap-2 text-[15px] text-[var(--hd-text-tertiary)] hover:text-[var(--hd-text-primary)] transition-colors" href="/case-studies/contact-centers">
                      <span style={{color: "var(--hd-accent)"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" color="currentColor" className="" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                          <path d="M4.91186 10.5413L7.55229 7.90088C8.09091 7.36227 8.27728 6.56642 8.05944 5.83652C7.8891 5.26577 7.69718 4.57964 7.56961 3.99292C7.45162 3.45027 6.97545 3 6.42012 3H4.91186C3.8012 3 2.88911 3.90384 3.01094 5.0078C3.93709 13.3996 10.6004 20.0629 18.9922 20.9891C20.0962 21.1109 21 20.1988 21 19.0881V17.5799C21 17.0246 20.5479 16.569 20.0015 16.4696C19.3988 16.36 18.7611 16.1804 18.2276 16.0103C17.4611 15.7659 16.6091 15.9377 16.0403 16.5065L13.4587 19.0881" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        </svg>
                      </span>
                      <span>Contact Centers</span>
                    </a>
                    <p className="text-label font-mono uppercase text-[var(--hd-text-muted)] mt-2">Industry</p>
                    <a className="flex items-center gap-2 text-[15px] text-[var(--hd-text-tertiary)] hover:text-[var(--hd-text-primary)] transition-colors" href="/solutions/industries/media-entertainment">
                      <span style={{color: "var(--hd-accent)"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" color="currentColor" className="" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                          <path d="M14 3H10C6.22876 3 4.34315 3 3.17157 4.17157C2 5.34315 2 7.22876 2 11C2 14.7712 2 16.6569 3.17157 17.8284C4.34315 19 6.22876 19 10 19H14C17.7712 19 19.6569 19 20.8284 17.8284C22 16.6569 22 14.7712 22 11C22 7.22876 22 5.34315 20.8284 4.17157C19.6569 3 17.7712 3 14 3Z" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
                          <path d="M18 19L19 21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d="M6 19L5 21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        </svg>
                      </span>
                      <span>Media & Entertainment</span>
                    </a>
                    <a className="flex items-center gap-2 text-[15px] text-[var(--hd-text-tertiary)] hover:text-[var(--hd-text-primary)] transition-colors" href="/solutions/industries/retail">
                      <span style={{color: "var(--hd-accent)"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" color="currentColor" className="" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                          <path d="M7 6C7 7.65685 8.34315 9 10 9C11.6569 9 13 7.65685 13 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d="M11.1117 3H8.88824C6.2172 3 4.88168 3 4.01968 3.82064C3.15769 4.64128 3.08361 5.98325 2.93545 8.66719L2.60424 14.6672C2.44025 17.6379 2.35826 19.1233 3.2403 20.0616C4.12235 21 5.60058 21 8.55703 21H11.443C14.3994 21 15.8777 21 16.7597 20.0616C17.6417 19.1233 17.5597 17.6379 17.3957 14.6672L17.0645 8.66717C16.9163 5.98324 16.8423 4.64127 15.9803 3.82064C15.1183 3 13.7828 3 11.1117 3Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d="M12.8882 3H15.1117C17.7827 3 19.1182 3 19.9802 3.82064C20.8422 4.64127 20.9163 5.98324 21.0645 8.66717L21.3957 14.6672C21.5597 17.6379 21.6417 19.1233 20.7597 20.0616C19.8776 21 18.3994 21 15.4429 21H12.557" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        </svg>
                      </span>
                      <span>Retail</span>
                    </a>
                    <a className="flex items-center gap-2 text-[15px] text-[var(--hd-text-tertiary)] hover:text-[var(--hd-text-primary)] transition-colors" href="/solutions/industries/financial-services">
                      <span style={{color: "var(--hd-accent)"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" color="currentColor" className="" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                          <path d="M12.125 5.75H12M12.25 5.75C12.25 5.88807 12.1381 6 12 6C11.8619 6 11.75 5.88807 11.75 5.75C11.75 5.61193 11.8619 5.5 12 5.5C12.1381 5.5 12.25 5.61193 12.25 5.75Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d="M5 9V19M9 9V19" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d="M15 9V19M19 9V19" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d="M21.3518 9H2.64822C2.29022 9 2 8.70651 2 8.34447C2 8.12259 2.11099 7.91577 2.29495 7.79485L8.73007 3.56485C10.3171 2.52162 11.1107 2 12 2C12.8893 2 13.6829 2.52162 15.2699 3.56485L21.7051 7.79485C21.889 7.91577 22 8.12259 22 8.34447C22 8.70651 21.7098 9 21.3518 9Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d="M21.0397 20.2929L20.3519 19.5858C20.0707 19.2968 19.9301 19.1522 19.7514 19.0761C19.5726 19 19.3738 19 18.9762 19H5.02382C4.62621 19 4.4274 19 4.24863 19.0761C4.06987 19.1522 3.92929 19.2968 3.64814 19.5858L2.9603 20.2929C2.25356 21.0194 1.9002 21.3827 2.02456 21.6913C2.14893 22 2.64867 22 3.64814 22H20.3519C21.3513 22 21.8511 22 21.9754 21.6913C22.0998 21.3827 21.7464 21.0194 21.0397 20.2929Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        </svg>
                      </span>
                      <span>Financial Services</span>
                    </a>
                    <a className="flex items-center gap-2 text-[15px] text-[var(--hd-text-tertiary)] hover:text-[var(--hd-text-primary)] transition-colors" href="/solutions/industries/telecommunication">
                      <span style={{color: "var(--hd-accent)"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" color="currentColor" className="" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                          <circle cx="12" cy="12" r="2" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
                          <path d="M4 18.001C2.74418 16.3295 2 14.2516 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 14.2516 21.2558 16.3295 20 18.001" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
                          <path d="M7.52779 16C6.57771 14.9385 6 13.5367 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 13.5367 17.4223 14.9385 16.4722 16" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
                          <path d="M12 14L12 19" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
                          <path d="M13.2623 19H10.7377C10.4667 19 10.3312 19 10.2019 19.0183C9.94003 19.0552 9.69171 19.1474 9.4774 19.2873C9.37156 19.3564 9.27574 19.4423 9.08411 19.614C8.45381 20.1791 8.13866 20.4616 8.05571 20.6884C7.88399 21.1577 8.12031 21.6692 8.61197 21.8923C8.84946 22 9.29515 22 10.1865 22H13.8135C14.7049 22 15.1505 22 15.388 21.8923C15.8797 21.6692 16.116 21.1577 15.9443 20.6884C15.8613 20.4616 15.5462 20.1791 14.9159 19.614C14.7243 19.4423 14.6284 19.3564 14.5226 19.2873C14.3083 19.1474 14.06 19.0552 13.7981 19.0183C13.6688 19 13.5333 19 13.2623 19Z" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
                        </svg>
                      </span>
                      <span>Telecommunication</span>
                    </a>
                    <a className="flex items-center gap-2 text-[15px] text-[var(--hd-text-tertiary)] hover:text-[var(--hd-text-primary)] transition-colors" href="/solutions/industries/healthcare">
                      <span style={{color: "var(--hd-accent)"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" color="currentColor" className="" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                          <path d="M14 2V4M14 4V6M14 4H10M10 2V4M10 4V6" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
                          <path d="M3 22V11.3808C3 7.8766 3 6.12452 4.15327 5.03591C4.88623 4.34404 5.90312 4.09189 7.5 4M21 22V11.3808C21 7.8766 21 6.12452 19.8467 5.03591C19.1138 4.34404 18.0969 4.09189 16.5 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d="M14 10H16" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
                          <path d="M14 14H16" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
                          <path d="M7 14H9" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
                          <path d="M7 10H9" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
                          <path d="M2 22H9.5M22 22H14.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d="M9.5 22V19.5C9.5 18.5654 9.5 18.0981 9.70096 17.75C9.83261 17.522 10.022 17.3326 10.25 17.201C10.5981 17 11.0654 17 12 17C12.9346 17 13.4019 17 13.75 17.201C13.978 17.3326 14.1674 17.522 14.299 17.75C14.5 18.0981 14.5 18.5654 14.5 19.5V22" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
                        </svg>
                      </span>
                      <span>Healthcare</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <a className="text-[16px] font-sans text-[var(--hd-text-tertiary)] hover:text-[var(--hd-text-primary)] transition-colors" href="/integrations">Integrations</a>
            <a className="text-[16px] font-sans text-[var(--hd-text-tertiary)] hover:text-[var(--hd-text-primary)] transition-colors" href="/careers">Careers</a>
          </nav>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[var(--hd-border-subtle)]" />
    </div>
  );
}
