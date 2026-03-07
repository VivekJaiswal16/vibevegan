'use client'
import { useState } from 'react'
import { quizQuestions, calcImpact } from '@/data/quiz'

export default function FootprintQuiz() {
  const [step,     setStep]     = useState(0)       // current question index
  const [answers,  setAnswers]  = useState([])      // accumulated scores
  const [selected, setSelected] = useState(null)    // selected option index
  const [result,   setResult]   = useState(null)    // final impact object

  function choose(idx) { setSelected(idx) }

  function next() {
    if (selected === null) return
    const newAnswers = [...answers, quizQuestions[step].scores[selected]]
    if (step < quizQuestions.length - 1) {
      setAnswers(newAnswers)
      setStep(step + 1)
      setSelected(null)
    } else {
      const total = newAnswers.reduce((a, b) => a + b, 0)
      setResult(calcImpact(total))
    }
  }

  function reset() { setStep(0); setAnswers([]); setSelected(null); setResult(null) }

  const q = quizQuestions[step]

  return (
    <section id="quiz" style={{ padding: '100px 5%', background: 'var(--muted)' }}>
      <div className="reveal">
        <div className="section-tag">🎮 Find Out</div>
        <h2 className="section-title">What&apos;s Your<br />Footprint?</h2>
        <p className="section-sub">5 quick questions. See exactly how much CO₂, water and land you&apos;d save by going vegan.</p>
      </div>

      <div className="reveal" style={{ marginTop: 60, background: 'var(--card)', borderRadius: 24, padding: 52, maxWidth: 760, border: '1px solid rgba(61,219,110,.1)' }}>

        {/* Progress dots */}
        <div style={{ display: 'flex', gap: 6, marginBottom: 32 }}>
          {quizQuestions.map((_, i) => (
            <div key={i} style={{ height: 4, flex: 1, borderRadius: 2, background: result || i < step ? 'var(--green)' : i === step ? 'rgba(61,219,110,.5)' : 'rgba(255,255,255,.1)', transition: 'background .3s' }} />
          ))}
        </div>

        {!result ? (
          <>
            <div style={{ fontFamily: "'Syne',sans-serif", fontSize: '1.4rem', fontWeight: 700, marginBottom: 28, lineHeight: 1.3 }}>{q.q}</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 28 }}>
              {q.opts.map((opt, i) => (
                <button key={i} onClick={() => choose(i)} style={{
                  background: selected === i ? 'rgba(61,219,110,.1)' : 'var(--muted)',
                  border: `1.5px solid ${selected === i ? 'var(--green)' : 'rgba(255,255,255,.07)'}`,
                  borderRadius: 12, padding: '14px 18px', cursor: 'pointer', fontSize: '.92rem',
                  textAlign: 'left', color: selected === i ? 'var(--green)' : 'var(--text)',
                  fontWeight: selected === i ? 600 : 400, fontFamily: "'DM Sans',sans-serif",
                  transition: 'all .2s',
                }}>{opt}</button>
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: 'var(--sub)', fontSize: '.85rem' }}>Question {step + 1} of {quizQuestions.length}</span>
              <button onClick={next} disabled={selected === null} className="btn-sm btn-sm-green" style={{ opacity: selected === null ? .4 : 1, cursor: selected === null ? 'not-allowed' : 'pointer' }}>Next →</button>
            </div>
          </>
        ) : (
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: "'Syne',sans-serif", fontSize: '5rem', fontWeight: 800, color: 'var(--green)', lineHeight: 1 }}>{result.co2}</div>
            <div style={{ fontSize: '1.1rem', color: 'var(--sub)', marginBottom: 12 }}>kg CO₂ saved per week 🌍</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, margin: '28px 0' }}>
              {[
                { val: result.water  + 'L',  label: 'Water Saved' },
                { val: result.land   + 'm²', label: 'Land Saved' },
                { val: result.animals,        label: 'Animals Spared/yr' },
              ].map(r => (
                <div key={r.label} style={{ background: 'var(--muted)', borderRadius: 12, padding: '16px 12px', textAlign: 'center' }}>
                  <div style={{ fontFamily: "'Syne',sans-serif", fontSize: '1.6rem', fontWeight: 800, color: 'var(--lime)' }}>{r.val}</div>
                  <div style={{ fontSize: '.78rem', color: 'var(--sub)', marginTop: 4 }}>{r.label}</div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.6, color: 'var(--text)', marginBottom: 28, maxWidth: 480, marginLeft: 'auto', marginRight: 'auto' }}>{result.message}</p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://challenge22.com" target="_blank" rel="noreferrer" className="btn-primary">Start My 22-Day Journey →</a>
              <button onClick={reset} className="btn-outline">Retake Quiz</button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
