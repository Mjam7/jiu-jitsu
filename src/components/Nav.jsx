import { useState } from 'react'
import { User } from 'lucide-react'
import ProfilePanel from './ProfilePanel'
import { BELTS } from '../constants'

export default function Nav({ activeHub, setActiveHub, profile }) {
  const [profileOpen, setProfileOpen] = useState(false)
  const belt = BELTS.find(b => b.id === profile.belt) || BELTS[0]

  const hubs = [
    { id: 'library', label: 'Technique Library' },
    { id: 'session', label: 'Session Log' },
    { id: 'game', label: 'Game Hub' },
  ]

  return (
    <>
      <nav style={{
        background: 'var(--bg-card)',
        borderBottom: '1px solid var(--border)',
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 40,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 24px', height: '56px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div className="font-display" style={{ fontSize: '18px', color: 'var(--accent)', letterSpacing: '0.08em' }}>
            THE GENTLE ART
          </div>
          <div className="font-mono" style={{ fontSize: '10px', color: 'var(--text-muted)' }}>TRACKER</div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          {hubs.map(hub => (
            <button key={hub.id} onClick={() => setActiveHub(hub.id)} style={{
              color: activeHub === hub.id ? 'var(--text-primary)' : 'var(--text-secondary)',
              borderBottom: activeHub === hub.id ? '2px solid var(--accent)' : '2px solid transparent',
              background: 'transparent', border: 'none',
              borderTop: 'none', borderLeft: 'none', borderRight: 'none',
              borderBottomWidth: '2px', borderBottomStyle: 'solid',
              borderBottomColor: activeHub === hub.id ? 'var(--accent)' : 'transparent',
              cursor: 'pointer', padding: '6px 14px', fontSize: '13px',
              fontWeight: '500', fontFamily: "'DM Sans', sans-serif",
            }}>
              {hub.label}
            </button>
          ))}
        </div>

        <button onClick={() => setProfileOpen(true)} style={{
          display: 'flex', alignItems: 'center', gap: '8px',
          padding: '6px 12px', borderRadius: '100px',
          background: 'var(--bg-elevated)', border: '1px solid var(--border)',
          cursor: 'pointer', color: 'var(--text-primary)',
        }}>
          <div style={{
            width: '20px', height: '20px', borderRadius: '50%',
            background: belt.color, color: belt.textColor,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '10px', fontWeight: '700',
          }}>
            {profile.stripes ?? '—'}
          </div>
          <span style={{ fontSize: '12px', color: 'var(--text-secondary)', fontFamily: "'DM Sans', sans-serif" }}>
            {profile.name || 'Profile'}
          </span>
          <User size={13} style={{ color: 'var(--text-muted)' }} />
        </button>
      </nav>

      {profileOpen && <ProfilePanel onClose={() => setProfileOpen(false)} />}
    </>
  )
}
