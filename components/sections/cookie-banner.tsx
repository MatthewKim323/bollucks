export function CookieBanner() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 backdrop-blur-md backdrop-saturate-150 bg-white/90 border-t border-[var(--hd-border-subtle)]">
      <div className="max-w-[1100px] mx-auto border-l border-r border-[var(--hd-border-subtle)] px-4 sm:px-6 py-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
          <div className="flex-1">
            <p className="text-eyebrow font-mono uppercase text-[var(--hd-text-muted)] mb-1">Cookies</p>
            <p className="text-[14px] sm:text-[15px] leading-[1.5] text-[var(--hd-text-tertiary)]">We use cookies to improve your experience and analyze site usage.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto sm:flex-shrink-0">
            <button className="accent-surface w-full sm:w-auto px-4 h-[36px] rounded-[10px] text-[14px] text-white transition-opacity hover:opacity-90">Accept all</button>
            <div className="flex gap-2">
              <button className="flex-1 sm:flex-none px-4 h-[36px] rounded-[10px] text-[14px] border border-[var(--hd-border-subtle)] text-[var(--hd-text-primary)] bg-transparent hover:bg-[var(--hd-bg-raised)] transition-colors">Reject</button>
              <button className="flex-1 sm:flex-none px-4 h-[36px] rounded-[10px] text-[14px] border border-[var(--hd-border-subtle)] text-[var(--hd-text-primary)] bg-transparent hover:bg-[var(--hd-bg-raised)] transition-colors">Manage</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
