/* KLIX Landing — pricing, statement, faq, cta, footer */

function Pricing() {
  const plans = [
    {
      name:'דף נחיתה בסיסי',
      desc:'לעסקים שרוצים עמוד ממוקד שמביא פניות מוואטסאפ, פרסום או רשתות חברתיות.',
      prefix:'החל מ־',
      price:'150',
      meta:'לחודש + מע״מ',
      featured:false,
      cta:'אני רוצה דף נחיתה',
      features:[
        'עיצוב ובניית דף נחיתה',
        'התאמה מלאה למובייל',
        'כפתור וואטסאפ',
        'טופס לידים',
        'חיבור דומיין',
        'תחזוקה בסיסית',
        'שינויים קטנים בשוטף',
      ]
    },
    {
      name:'אתר תדמית מנוהל',
      desc:'לעסקים שרוצים אתר מקצועי עם כמה עמודים, שירותים, תיק עבודות והצגת העסק בצורה רצינית.',
      prefix:'החל מ־',
      price:'489',
      meta:'לחודש + מע״מ',
      featured:true,
      badge:'הכי פופולרי',
      cta:'אני רוצה אתר לעסק',
      features:[
        'עיצוב ובניית אתר',
        'עמודי שירות',
        'אודות + תיק עבודות',
        'גלריה',
        'טפסים ווואטסאפ',
        'תחזוקה שוטפת',
        'עדכוני תוכן',
        'שיפור חוויית משתמש',
        'חיבור אנליטיקס בסיסי',
      ]
    },
    {
      name:'אתר + מעטפת צמיחה',
      desc:'לעסקים שרוצים לא רק אתר, אלא מערכת שמחוברת לשיווק, קמפיינים ואוטומציות.',
      prefix:'החל מ־',
      price:'789',
      meta:'לחודש + מע״מ',
      featured:false,
      cta:'בואו נבנה מערכת שעובדת',
      features:[
        'אתר / דף נחיתה מתקדם',
        'אוטומציות ללידים',
        'חיבור למערכות חיצוניות',
        'פיקסלים ואנליטיקס',
        'שיפורי המרה',
        'עמודי קמפיין',
        'ליווי שוטף',
        'אופציה לניהול קמפיינים',
      ]
    }
  ];
  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <img
          className="pricing-art"
          src="assets/coin-large.png"
          alt=""
          onError={(e)=>{ e.currentTarget.style.display='none'; }}
        />
        <div style={{textAlign:'center'}}>
          <span className="eyebrow"><span className="dot"></span>מסלולים לדוגמה</span>
        </div>
        <h2 className="section-title" style={{marginTop:18}}>
          תשלום חודשי קבוע. <span className="accent">בלי הפתעות.</span>
        </h2>
        <p className="section-sub">
          בוחרים את המסלול שמתאים לכם. אפשר לשדרג בכל שלב, בלי להתחיל הכל מחדש.
        </p>
        <div className="plans">
          {plans.map((p, i) => (
            <div className={`plan ${p.featured ? 'featured' : ''}`} key={i}>
              {p.badge && <span className="plan-badge">{p.badge}</span>}
              <h3>{p.name}</h3>
              <p className="plan-desc">{p.desc}</p>
              <div className="plan-price">
                <span className="price-prefix">{p.prefix}</span>
                <span className="price-num">{p.price}</span>
                <span className="price-currency">₪</span>
                <span className="price-meta">{p.meta}</span>
              </div>
              <ul className="features">
                {p.features.map((f, j) => (
                  <li className="feature" key={j}>
                    <span className="ck">{Icon.check(10)}</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#cta" className={`btn plan-cta ${p.featured ? 'btn-primary' : 'btn-dark'}`}>
                {p.cta}
                {Icon.arrow(14)}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Statement() {
  return (
    <section className="statement">
      <img
        className="statement-art"
        src="assets/chess-cubes.png"
        alt=""
        onError={(e)=>{ e.currentTarget.style.display='none'; }}
      />
      <div className="statement-inner">
        <h2>
          אתר יפה זה נחמד.<br/>
          <span className="accent">אתר שמביא פניות —</span> זה כבר עסק.
        </h2>
        <p>
          ב־KLIX אנחנו מסתכלים על האתר כמו על איש מכירות דיגיטלי.
          הוא צריך להסביר מהר, לבנות אמון, להראות הוכחות, לענות על התנגדויות ולגרום ללקוח לפנות.
        </p>
        <div className="statement-tag">→ כל עמוד מתוכנן סביב מטרה אחת: להפוך מבקרים לפניות.</div>
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    { q:'למה אתם לא גובים עלות הקמה?', a:'כי המודל שלנו מבוסס על שירות חודשי. במקום שתשלמו אלפי שקלים מראש ותישארו לבד, אנחנו מקימים, מתחזקים ומשפרים את האתר כחלק מהמנוי.' },
    { q:'מה קורה אם מפסיקים את השירות?', a:'האתר הוא חלק מהשירות המנוהל של KLIX. אם מפסיקים את המנוי, השירות והאתר יורדים מהאוויר. במקרים מסוימים ניתן לבצע רכישה מלאה של האתר בתשלום נפרד.' },
    { q:'האם אפשר לעשות שינויים אחרי שהאתר באוויר?', a:'כן. זה בדיוק היתרון של המודל. אפשר לעדכן טקסטים, תמונות, כפתורים, מבצעים, שירותים וחלקים באתר לפי הצורך.' },
    { q:'תוך כמה זמן האתר מוכן?', a:'ברוב המקרים דף נחיתה יכול להיות מוכן בתוך כמה ימים, ואתר מלא תלוי בהיקף, בתוכן ובמהירות קבלת החומרים מהלקוח.' },
    { q:'האם אתם עושים גם קידום ממומן?', a:'כן. אפשר לחבר את האתר לקמפיינים במטא או בגוגל, בהתאם לצורך של העסק ולתקציב הפרסום.' },
    { q:'האם אני צריך להבין בטכנולוגיה?', a:'לא. המטרה היא שאתה לא תצטרך להתעסק בזה. אנחנו מסבירים פשוט, מטפלים בצד הטכני ומעדכנים אותך רק במה שחשוב.' },
  ];
  const [open, setOpen] = useState(0);
  return (
    <section className="faq" id="faq">
      <div className="container">
        <div style={{textAlign:'center'}}>
          <span className="eyebrow"><span className="dot"></span>שאלות נפוצות</span>
        </div>
        <h2 className="section-title" style={{marginTop:18}}>
          לפני שתשאלו, <span className="accent">בטח חשבנו על זה.</span>
        </h2>
        <div className="faq-list">
          {items.map((it, i) => (
            <div className={`faq-item ${open === i ? 'open' : ''}`} key={i}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span>{it.q}</span>
                <span className="toggle">+</span>
              </button>
              <div className="faq-a"><div className="faq-a-inner">{it.a}</div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="final-cta" id="cta">
      <div className="container">
        <div className="final-card">
          <div className="grid-bg"></div>
          <img
            className="cta-art"
            src="assets/discs.png"
            alt=""
            onError={(e)=>{ e.currentTarget.style.display='none'; }}
          />
          <span className="eyebrow" style={{color:'var(--teal)', position:'relative'}}>
            מוכנים להתחיל?
          </span>
          <h2 style={{marginTop:18, position:'relative'}}>
            רוצים אתר שעובד בשבילכם<br/>ולא עוד <span className="accent">כרטיס ביקור דיגיטלי?</span>
          </h2>
          <p>
            בואו נבנה לעסק שלכם נוכחות דיגיטלית שנראית טוב, נטענת מהר, מחוברת לוואטסאפ ומכוונת לפניות.
          </p>
          <div className="final-cta-row">
            <a className="btn btn-primary" href="https://wa.me/972500000000">
              {Icon.whatsapp(18)}
              דברו איתנו בוואטסאפ
            </a>
            <a className="btn btn-secondary" href="#pricing">
              לראות מסלולים
              {Icon.arrow(16)}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div>
            <Logo />
            <p className="footer-tagline">
              KLIX — בונים, מנהלים ומשפרים את הדיגיטל של העסק שלך. כתובת אחת. אחריות מלאה. תשלום חודשי קבוע.
            </p>
          </div>
          <div>
            <h4>שירותים</h4>
            <ul>
              <li><a href="#">דפי נחיתה</a></li>
              <li><a href="#">אתרי תדמית</a></li>
              <li><a href="#">אוטומציות</a></li>
              <li><a href="#">קמפיינים</a></li>
            </ul>
          </div>
          <div>
            <h4>החברה</h4>
            <ul>
              <li><a href="#how">תהליך</a></li>
              <li><a href="#pricing">מסלולים</a></li>
              <li><a href="#faq">שאלות נפוצות</a></li>
              <li><a href="#cta">צור קשר</a></li>
            </ul>
          </div>
          <div>
            <h4>צור קשר</h4>
            <ul>
              <li><a href="https://wa.me/972500000000">וואטסאפ</a></li>
              <li><a href="mailto:hello@klix.co.il">hello@klix.co.il</a></li>
              <li><a href="#">טופס יצירת קשר</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 KLIX. כל הזכויות שמורות.</span>
          <span>נבנה באהבה למען עסקים קטנים בישראל.</span>
        </div>
      </div>
    </footer>
  );
}

function WhatsFab() {
  return (
    <a className="whats-fab" href="https://wa.me/972500000000" aria-label="וואטסאפ">
      {Icon.whatsapp(20)}
      <span>דברו איתנו</span>
    </a>
  );
}

Object.assign(window, { Pricing, Statement, FAQ, FinalCTA, Footer, WhatsFab });
