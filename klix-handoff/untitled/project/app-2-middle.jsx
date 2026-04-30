/* KLIX Landing — middle sections (problem, model, three cards, how, why) */

function Problem() {
  const qs = [
    'מי מעדכן אותו?',
    'מי מתקן כשמשהו נשבר?',
    'מי משפר את ההמרות?',
    'מי מחבר את הלידים לוואטסאפ?',
    'מי בודק אם הדף באמת מביא פניות?',
  ];
  return (
    <section className="problem">
      <div className="problem-inner">
        <h2>
          כולם מדברים על <span style={{color:'var(--teal)'}}>"לבנות אתר"</span>.<br/>
          כמעט אף אחד לא מדבר על מה קורה אחר כך.
        </h2>
        <p className="lead">
          אז שאלנו את השאלות שאף אחד לא רוצה לשאול:
        </p>
        <div className="problem-questions">
          {qs.map((q, i) => (
            <div className="q-card" key={i}>
              <span className="qmark">?</span>
              <span>{q}</span>
            </div>
          ))}
        </div>
        <div className="problem-resolve">
          <strong>בדיוק בשביל זה הקמנו את KLIX.</strong>
          <p>
            אנחנו לא רק בונים אתר ונעלמים. אנחנו הופכים את האתר שלך לכלי עבודה שמשרת את העסק — מביא פניות, מסדר תהליך, נראה מקצועי, ומתעדכן כשצריך. דיגיטל שלא שואב תקציב. דיגיטל שעובד.
          </p>
        </div>
      </div>
    </section>
  );
}

function Model() {
  return (
    <section className="model" id="model">
      <div className="container">
        <div className="model-grid">
          <div>
            <span className="eyebrow" style={{background:'rgba(45,212,191,0.12)', color:'var(--teal)'}}>
              <span className="dot" style={{background:'var(--teal)'}}></span>
              המודל של KLIX
            </span>
            <h2 style={{marginTop:18}}>
              בלי עלות הקמה.<br/>בלי כאב ראש.
            </h2>
            <p>
              במקום לשלם <strong>אלפי שקלים מראש</strong> על אתר ואז להישאר לבד —
              ב־KLIX אתם מקבלים אתר או דף נחיתה כחלק משירות חודשי מנוהל.
            </p>
            <p>
              אנחנו דואגים להקמה, לעיצוב, לתוכן, לתחזוקה, לשינויים ולשיפורים השוטפים.
              <br/><strong>אתם מתעסקים בעסק. אנחנו מתעסקים בדיגיטל.</strong>
            </p>
          </div>
          <div className="model-illu">
            <div style={{fontSize:13, color:'#94a3b8', marginBottom:14, fontFamily:'JetBrains Mono, monospace'}}>// השוואה</div>
            <div className="row strike">
              <span className="label">עלות הקמה ראשונית</span>
              <span className="val">₪4,500</span>
            </div>
            <div className="row strike">
              <span className="label">תיקונים נוספים</span>
              <span className="val">₪350/שעה</span>
            </div>
            <div className="row strike">
              <span className="label">תחזוקה ועדכונים</span>
              <span className="val">לא כלול</span>
            </div>
            <div className="row strike">
              <span className="label">שיפורי המרה</span>
              <span className="val">לא כלול</span>
            </div>
            <div className="row highlight">
              <span className="label" style={{color:'#fff', fontWeight:700}}>חודשי קבוע ב־KLIX</span>
              <span className="val" style={{color:'var(--teal)'}}>הכל כלול ✓</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ThreeCards() {
  const cards = [
    { num:'01', icon: Icon.build(), title:'בונים עבורך', text:'דפי נחיתה, אתרי תדמית, עמודי שירות, עמודי קמפיין ואתרים מותאמים אישית — לפי מה שהעסק באמת צריך, לא לפי תבנית גנרית.' },
    { num:'02', icon: Icon.improve(), title:'משפרים עבורך', text:'כותרות, טפסים, כפתורים, מבנה עמוד, מהירות, חוויית משתמש וחיבור נכון לוואטסאפ — כדי שהאתר לא רק ייראה טוב, אלא גם ימיר.' },
    { num:'03', icon: Icon.connect(), title:'מחברים עבורך', text:'טפסים, וואטסאפ, אוטומציות, מערכות תשלום, אנליטיקס, פיקסלים וכל מה שצריך כדי שהדיגיטל שלך יעבוד בצורה מסודרת.' },
  ];
  return (
    <section className="three-cards">
      <div className="container">
        <div style={{textAlign:'center'}}>
          <span className="eyebrow"><span className="dot"></span>מה אנחנו עושים</span>
        </div>
        <h2 className="section-title" style={{marginTop:18}}>
          שלושה דברים. <span className="accent">בלי תירוצים.</span>
        </h2>
        <p className="section-sub">
          לא חבילה גנרית. לא תבנית. שלושה תפקידים שאנחנו ממלאים כל חודש בשביל העסק שלך.
        </p>
        <div className="cards-row">
          {cards.map((c, i) => (
            <div className="svc-card" key={i}>
              <span className="num">{c.num}</span>
              <div className="svc-icon">{c.icon}</div>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { n:'01', title:'שיחת התאמה קצרה', body:'מבינים מה העסק מוכר, למי, מה המטרה של האתר, ומה צריך לקרות אחרי שלקוח משאיר פרטים.' },
    { n:'02', title:'אפיון מהיר', body:'מגדירים מבנה, מסרים, קהל יעד, הצעה, תמונות, המלצות, שאלות נפוצות וקריאות לפעולה.' },
    { n:'03', title:'עיצוב ובנייה', body:'אנחנו בונים עמוד שנראה מקצועי, נטען מהר, מותאם לנייד, ומכוון לפניות — לא רק ליופי.' },
    { n:'04', title:'תיקונים והשקה', body:'עוברים יחד על הגרסה הראשונה, משפרים מה שצריך, מחברים דומיין, טפסים, וואטסאפ ומעקב.' },
    { n:'05', title:'השירות האמיתי מתחיל', body:'אחרי שהאתר באוויר — אנחנו ממשיכים לתחזק, לשפר, לעדכן ולדאוג שהוא יישאר רלוונטי.' },
  ];
  const [open, setOpen] = useState(0);
  return (
    <section className="how" id="how">
      <div className="container">
        <div style={{textAlign:'center'}}>
          <span className="eyebrow"><span className="dot"></span>תהליך עבודה</span>
        </div>
        <h2 className="section-title" style={{marginTop:18}}>
          איך זה <span className="accent">עובד?</span>
        </h2>
        <p className="section-sub">חמישה שלבים. שום הפתעות. שקיפות מלאה לכל אורך הדרך.</p>
        <div className="how-steps">
          {steps.map((s, i) => (
            <div className={`step ${open === i ? 'open' : ''}`} key={i}>
              <button className="step-head" onClick={() => setOpen(open === i ? -1 : i)}>
                <span className="step-num">{s.n}</span>
                <h3 style={{textAlign:'right'}}>{s.title}</h3>
                <span className="step-arrow">{Icon.arrowDown(16)}</span>
              </button>
              <div className="step-body">
                <div className="step-body-inner">{s.body}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Why() {
  const items = [
    { neg:true, t:'בלי לרדוף אחרי מתכנתים' },
    { neg:true, t:'בלי להסתבך עם אחסון ושרתים' },
    { neg:true, t:'בלי לשלם אלפי שקלים מראש' },
    { neg:true, t:'בלי להישאר עם אתר שאף אחד לא נוגע בו שנה' },
    { neg:false, t:'עם כתובת אחת לכל הדיגיטל של העסק' },
  ];
  return (
    <section className="why" id="why">
      <div className="container">
        <div style={{textAlign:'center'}}>
          <span className="eyebrow"><span className="dot"></span>למה KLIX</span>
        </div>
        <h2 className="section-title" style={{marginTop:18}}>
          עסק קטן לא צריך<br/><span className="accent">"פרויקט אתר" מסובך.</span>
        </h2>
        <p className="section-sub">
          הוא צריך מישהו שייקח אחריות על הנוכחות הדיגיטלית שלו.
        </p>
        <div className="why-grid">
          <div className="why-list">
            {items.map((it, i) => (
              <div className={`why-item ${!it.neg ? 'pos' : ''}`} key={i}>
                <span className="x">{it.neg ? '×' : Icon.check(12)}</span>
                <p>{it.t}</p>
              </div>
            ))}
          </div>
          <div className="why-anchor">
            <div className="pin">{Icon.pin()}</div>
            <h3>כתובת אחת לדיגיטל של העסק</h3>
            <p>
              שיחה אחת. צוות אחד. אחריות מלאה. אנחנו הופכים את הדיגיטל שלך מסבך של ספקים — לערוץ עבודה אחד, ברור ומסודר.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Problem, Model, ThreeCards, HowItWorks, Why });
