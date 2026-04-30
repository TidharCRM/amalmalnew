/* KLIX Landing — App root + Tweaks */

const KLIX_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accentHue": 178,
  "accentChroma": 0.13,
  "darkSections": true,
  "headlineWeight": 900,
  "showFAB": true,
  "ctaStyle": "whatsapp",
  "fontFamily": "Aviv"
}/*EDITMODE-END*/;

function App() {
  const [tweaks, setTweak] = useTweaks(KLIX_DEFAULTS);

  // Apply tweaks live to CSS vars
  useEffect(() => {
    const root = document.documentElement;
    const c = tweaks.accentChroma;
    const h = tweaks.accentHue;
    root.style.setProperty('--teal', `oklch(0.68 ${c} ${h})`);
    root.style.setProperty('--teal-deep', `oklch(0.55 ${c} ${h})`);
    root.style.setProperty('--teal-soft', `oklch(0.94 ${c * 0.3} ${h})`);
    document.body.style.fontFamily = `'${tweaks.fontFamily}', 'Heebo', system-ui, sans-serif`;
  }, [tweaks.accentHue, tweaks.accentChroma, tweaks.fontFamily]);

  return (
    <>
      <Nav />
      <Hero />
      <Problem />
      <Model />
      <ThreeCards />
      <HowItWorks />
      <Why />
      <Pricing />
      <Statement />
      <FAQ />
      <FinalCTA />
      <Footer />
      {tweaks.showFAB && <WhatsFab />}

      <TweaksPanel title="Tweaks">
          <TweakSection title="צבע מותג">
            <TweakSlider
              label="Hue (גוון)"
              value={tweaks.accentHue}
              min={0} max={360} step={1}
              onChange={(v) => setTweak('accentHue', v)}
            />
            <TweakSlider
              label="Chroma (רוויה)"
              value={tweaks.accentChroma}
              min={0} max={0.25} step={0.01}
              onChange={(v) => setTweak('accentChroma', v)}
            />
            <div style={{display:'flex', gap:6, flexWrap:'wrap', marginTop:8}}>
              {[
                {h:178, c:0.13, name:'Teal'},
                {h:230, c:0.16, name:'Blue'},
                {h:300, c:0.18, name:'Magenta'},
                {h:25, c:0.16, name:'Orange'},
                {h:140, c:0.15, name:'Green'},
              ].map(p => (
                <button
                  key={p.name}
                  onClick={() => { setTweak({accentHue: p.h, accentChroma: p.c}); }}
                  style={{
                    background: `oklch(0.68 ${p.c} ${p.h})`,
                    color:'#0f172a', fontWeight:700, fontSize:11,
                    border:'none', padding:'6px 10px', borderRadius:999, cursor:'pointer'
                  }}
                >{p.name}</button>
              ))}
            </div>
          </TweakSection>
          <TweakSection title="רכיבים">
            <TweakRadio
              label="פונט"
              value={tweaks.fontFamily}
              options={['Aviv', 'Nesher', 'Begin']}
              onChange={(v) => setTweak('fontFamily', v)}
            />
            <TweakToggle
              label="כפתור וואטסאפ צף"
              value={tweaks.showFAB}
              onChange={(v) => setTweak('showFAB', v)}
            />
          </TweakSection>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
