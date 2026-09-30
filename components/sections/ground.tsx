"use client";

import { useRef } from "react";
import { AgentCard, AgentLines, Connector, DocCard, SourceCard, StatusPill, useSourceSlots, useStageLoop } from "@/components/ground/demo";

export function Ground() {
  const rootRef = useRef<HTMLDivElement>(null);
  const contourRef = useRef<HTMLDivElement>(null);
  const { scenario, stageId } = useStageLoop(rootRef);
  const sources = useSourceSlots();
  const isDoc = stageId === "document";
  const isSync = stageId === "sync";
  return (
    <section className="relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-[var(--hd-border-subtle)] z-20" />
      <div className="container">
        <div className="max-w-[1100px] mx-auto">
          <div ref={rootRef} className="relative px-4 md:px-8 pt-10 md:pt-32 pb-12 md:pb-36 overflow-hidden" style={{isolation: "isolate"}}>
            <div aria-hidden="true" className="pointer-events-none absolute z-30" style={{top: "0", bottom: "0", left: "calc(50% - 50vw)", right: "calc(50% - 50vw)", opacity: "0.6", background: "radial-gradient(45% 55% at 100% 58%, rgba(234, 240, 248, 0.09) 0%, transparent 80%), radial-gradient(35% 45% at 95% 68%, rgba(195, 210, 234, 0.07) 0%, transparent 75%), radial-gradient(15% 25% at 100% 50%, rgba(195, 210, 234, 0.06) 0%, transparent 70%), radial-gradient(20% 25% at 100% 88%, rgba(138, 165, 216, 0.06) 0%, transparent 75%), radial-gradient(45% 55% at 0% 58%, rgba(234, 240, 248, 0.09) 0%, transparent 80%), radial-gradient(35% 45% at 5% 68%, rgba(195, 210, 234, 0.07) 0%, transparent 75%), radial-gradient(15% 25% at 0% 50%, rgba(195, 210, 234, 0.06) 0%, transparent 70%), radial-gradient(20% 25% at 0% 88%, rgba(138, 165, 216, 0.06) 0%, transparent 75%), radial-gradient(70% 18% at 50% 100%, rgba(234, 240, 248, 0.09) 0%, transparent 80%), radial-gradient(40% 15% at 32% 100%, rgba(195, 210, 234, 0.07) 0%, transparent 80%), radial-gradient(40% 15% at 68% 100%, rgba(195, 210, 234, 0.06) 0%, transparent 80%)"}} />
            <div className="relative z-10 text-center mb-12 md:mb-16 max-w-[680px] mx-auto">
              <h2 data-scroll="true" className="ls-fade-up font-serif text-section font-normal mb-3 text-[var(--hd-text-primary)] [text-wrap:balance] is-inview">Ground your agents in truth</h2>
              <p data-scroll="true" className="ls-fade-up text-[16px] md:text-[17px] leading-[1.5] text-[var(--hd-text-tertiary)] max-w-[520px] mx-auto [text-wrap:balance] is-inview" style={{transitionDelay: "0.05s"}}>One reliability loop across every agent your enterprise deploys.</p>
            </div>
            <div className="relative z-10 flex justify-center">
              <div className="flex items-center">
                <div className="relative z-10 hidden md:flex flex-col justify-center gap-8 py-12">
                  {sources.map((src, i) => {
                    const active = isDoc && scenario.sourceIndex === i;
                    return (
                      <div key={`slot-${i}`} className="relative flex items-center justify-start">
                        <div className="relative z-10">
                          <div className="relative shrink-0">
                            <SourceCard logo={src.logo} alt={src.name} active={active} size={src.size} />
                          </div>
                        </div>
                        <div className="relative z-0">
                          <Connector active={active} direction="right" />
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="relative z-20">
                  <div aria-hidden="true" className="pointer-events-none absolute -top-36 -left-36 w-[608px] h-[688px] md:w-[748px] md:h-[748px]" style={{zIndex: "0", maskImage: "radial-gradient(ellipse at center, black 55%, transparent 100%)", WebkitMaskImage: "radial-gradient(ellipse at center, black 55%, transparent 100%)"}}>
                    <div className="absolute inset-0 pointer-events-none">
                      <div style={{position: "relative", overflow: "hidden", background: "transparent", touchAction: "none", width: "100%", height: "100%"}}>
                        <canvas width="748" height="748" style={{display: "block", width: "748px", height: "748px", transform: "translateZ(0px)", willChange: "transform"}} />
                      </div>
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute top-0 left-0 w-[320px] h-[544px] md:w-[460px] md:h-[604px] bg-[var(--hd-bg-base)] rounded-t-xl" style={{zIndex: "5"}} />
                  <div ref={contourRef} className="relative z-10 w-[320px] h-[400px] md:w-[460px] md:h-[460px]">
                    <div className="absolute inset-0" style={{WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 65%, rgba(0,0,0,0.85) 80%, rgba(0,0,0,0.4) 92%, transparent 100%)", maskImage: "linear-gradient(to bottom, black 0%, black 65%, rgba(0,0,0,0.85) 80%, rgba(0,0,0,0.4) 92%, transparent 100%)"}}>
                      <DocCard scenario={scenario} stageId={stageId} />
                    </div>
                    <div className="absolute inset-0 z-30 pointer-events-none">
                      <StatusPill stageId={stageId} />
                    </div>
                  </div>
                </div>
                <div className="relative z-10 hidden md:flex items-center">
                  <AgentLines sync={isSync} sourceIndex={scenario.sourceIndex} />
                  <AgentCard sync={isSync} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
