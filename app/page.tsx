export default function Home() {
  return (
    <main className="min-h-screen p-8">

      <h1 className="text-3xl font-bold mb-2"
        style={{ color: 'var(--cs-purple3)' }}>
        CrimeScript
      </h1>

      <p style={{ color: 'var(--cs-muted)' }} className="mb-8">
        AI-Powered Detective Mystery Platform
      </p>

      <div className="flex flex-col gap-3">

        <div className="p-4 rounded-xl"
          style={{ background: 'var(--cs-surface)', border: '1px solid var(--cs-border)' }}>
          Surface card — this is glassmorphism base
        </div>

        <div className="flex gap-3">
          <div className="p-3 rounded-lg text-sm"
            style={{ background: 'var(--cs-safe)', color: '#0d0b18' }}>
            Safe
          </div>
          <div className="p-3 rounded-lg text-sm"
            style={{ background: 'var(--cs-suspect)', color: '#0d0b18' }}>
            Suspect
          </div>
          <div className="p-3 rounded-lg text-sm"
            style={{ background: 'var(--cs-danger)', color: '#0d0b18' }}>
            Accused
          </div>
        </div>

        <div className="p-4 rounded-xl"
          style={{ background: 'var(--cs-surface2)', border: '1px solid var(--cs-border2)' }}>
          <span style={{ color: 'var(--cs-purple2)' }}>Purple 2 —</span>
          <span style={{ color: 'var(--cs-purple3)' }}> Purple 3 —</span>
          <span style={{ color: 'var(--cs-accent)' }}> Accent</span>
        </div>

      </div>
    </main>
  )
}