/* KLIX Landing — main app */
const { useState, useEffect, useRef } = React;

/* ---------- ICONS (inline SVG) ---------- */
const Icon = {
  whatsapp: (s = 18) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.464 3.488"/>
    </svg>
  ),
  arrow: (s = 18) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="19" y1="12" x2="5" y2="12"/>
      <polyline points="12 19 5 12 12 5"/>
    </svg>
  ),
  arrowDown: (s = 18) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9"/>
    </svg>
  ),
  check: (s = 12) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  ),
  build: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18"/><path d="M5 21V8l7-4 7 4v13"/><path d="M9 21V12h6v9"/>
    </svg>
  ),
  improve: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
      <polyline points="16 7 22 7 22 13"/>
    </svg>
  ),
  connect: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
    </svg>
  ),
  bolt: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  ),
  trend: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
      <polyline points="16 7 22 7 22 13"/>
    </svg>
  ),
  bell: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
      <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
    </svg>
  ),
  pin: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21s-7-7.5-7-12a7 7 0 0 1 14 0c0 4.5-7 12-7 12z"/>
      <circle cx="12" cy="9" r="2.5"/>
    </svg>
  ),
};

/* ---------- LOGO ---------- */
function Logo() {
  return (
    <a className="logo" href="#top" aria-label="KLIX">
      <span className="logo-mark">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3l7 17 2.5-7 7-2.5z"/>
        </svg>
      </span>
      <span>KLIX</span>
    </a>
  );
}

/* ---------- NAV ---------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <div className="nav-links">
          <a href="#how">איך זה עובד</a>
          <a href="#why">למה אנחנו</a>
          <a href="#pricing">מסלולים</a>
          <a href="#faq">שאלות</a>
        </div>
        <Logo />
      </div>
    </nav>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  const bullets = [
    'אפס עלות הקמה',
    'תחזוקה שוטפת',
    'חיבור לוואטסאפ',
    'אוטומציות לעסק',
  ];
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div className="hero-text">
          <span className="eyebrow">
            <span className="dot"></span>
            דיגיטל מנוהל לעסקים קטנים
          </span>
          <h1 style={{marginTop: 22}}>
            הדיגיטל <span className="accent">שעובד</span> בשביל העסק שלך.
          </h1>
          <p className="hero-sub">
            הקמה וניהול אתרים, דפי נחיתה ואוטומציות — בתשלום חודשי קבוע, בלי עלות הקמה. אתם מתעסקים בעסק, אנחנו מתעסקים בדיגיטל.
          </p>
          <div className="hero-bullets">
            {bullets.map((b, i) => (
              <span className="pill" key={i}>
                <span className="check">{Icon.check(10)}</span>
                {b}
              </span>
            ))}
          </div>
          <div className="hero-cta">
            <a className="btn btn-primary" href="#cta">
              {Icon.whatsapp(18)}
              דברו איתנו בוואטסאפ
            </a>
            <a className="btn btn-secondary" href="#pricing">
              לראות מסלולים
              {Icon.arrow(16)}
            </a>
          </div>
          <div className="hero-trust">
            <strong>50+</strong>
            <span>עסקים פעילים מקבלים פניות בכל יום</span>
          </div>
        </div>

        <div className="hero-visual">
          <img
            className="hero-art"
            src="assets/hero-king.png"
            alt=""
            onError={(e)=>{ e.currentTarget.style.display='none'; }}
          />
          <img
            className="hero-art-coin"
            src="assets/coin-small.png"
            alt=""
            onError={(e)=>{ e.currentTarget.style.display='none'; }}
          />
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Icon, Logo, Nav, Hero });
