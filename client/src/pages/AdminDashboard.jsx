import { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

const emptyGigForm = { date: '', date_display: '', venue: '', href: '' }

function authHeaders() {
  return {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('admin_token')}`,
  }
}

function StatCard({ label, value, sub }) {
  return (
    <div className="stat-card">
      <div className="stat-value">{value ?? '—'}</div>
      <div className="stat-label">{label}</div>
      {sub && <div className="stat-sub">{sub}</div>}
    </div>
  )
}

function DailyChart({ data }) {
  if (!data || data.length === 0) return <p className="admin-empty">No data yet.</p>
  const max = Math.max(...data.map(d => d.n), 1)
  return (
    <div className="daily-chart">
      {data.map(d => (
        <div key={d.day} className="chart-bar-wrap" title={`${d.day}: ${d.n} views`}>
          <div className="chart-bar" style={{ height: `${(d.n / max) * 100}%` }} />
          <div className="chart-label">{d.day.slice(5)}</div>
        </div>
      ))}
    </div>
  )
}

export function AdminDashboard() {
  const navigate = useNavigate()
  const [stats, setStats] = useState(null)
  const [gigs, setGigs] = useState([])
  const [tab, setTab] = useState('stats')
  const [gigForm, setGigForm] = useState(emptyGigForm)
  const [editingId, setEditingId] = useState(null)
  const [gigError, setGigError] = useState('')
  const [gigSaving, setGigSaving] = useState(false)

  const token = localStorage.getItem('admin_token')

  const logout = () => {
    localStorage.removeItem('admin_token')
    navigate('/admin')
  }

  const fetchStats = useCallback(async () => {
    const res = await fetch('/api/analytics/stats', { headers: authHeaders() })
    if (res.status === 401) { logout(); return }
    setStats(await res.json())
  }, [])

  const fetchGigs = useCallback(async () => {
    const res = await fetch('/api/gigs/all', { headers: authHeaders() })
    if (res.status === 401) { logout(); return }
    setGigs(await res.json())
  }, [])

  useEffect(() => {
    if (!token) { navigate('/admin'); return }
    fetchStats()
    fetchGigs()
  }, [token])

  const handleDeleteGig = async (id) => {
    if (!confirm('Delete this gig?')) return
    await fetch(`/api/gigs/${id}`, { method: 'DELETE', headers: authHeaders() })
    if (editingId === id) cancelEdit()
    fetchGigs()
  }

  const handleEditGig = (gig) => {
    setEditingId(gig.id)
    setGigForm({ date: gig.date, date_display: gig.date_display, venue: gig.venue, href: gig.href || '' })
    setGigError('')
  }

  const cancelEdit = () => {
    setEditingId(null)
    setGigForm(emptyGigForm)
    setGigError('')
  }

  const handleDateChange = (e) => {
    const iso = e.target.value
    const [y, m, d] = iso.split('-')
    const display = iso ? `${parseInt(d)} ${['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][parseInt(m)-1]} ${y}` : ''
    setGigForm(f => ({ ...f, date: iso, date_display: display }))
  }

  const handleSubmitGig = async (e) => {
    e.preventDefault()
    setGigError('')
    setGigSaving(true)
    try {
      const res = await fetch(editingId ? `/api/gigs/${editingId}` : '/api/gigs', {
        method: editingId ? 'PUT' : 'POST',
        headers: authHeaders(),
        body: JSON.stringify(gigForm),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error)
      cancelEdit()
      fetchGigs()
    } catch (err) {
      setGigError(err.message)
    } finally {
      setGigSaving(false)
    }
  }

  const today = new Date().toISOString().slice(0, 10)

  return (
    <div className="admin-shell">
      <nav className="admin-nav">
        <div className="admin-logo">Caryl <span>Admin</span></div>
        <div className="admin-nav-tabs">
          <button className={tab === 'stats' ? 'active' : ''} onClick={() => setTab('stats')}>Analytics</button>
          <button className={tab === 'gigs' ? 'active' : ''} onClick={() => setTab('gigs')}>Gigs</button>
        </div>
        <div className="admin-nav-right">
          <a href="/" className="admin-site-link" target="_blank" rel="noopener noreferrer">View Site ↗</a>
          <button className="admin-logout" onClick={logout}>Sign Out</button>
        </div>
      </nav>

      <main className="admin-main">

        {tab === 'stats' && (
          <div className="admin-section">
            <h2>Analytics Overview</h2>
            <div className="stats-grid">
              <StatCard label="Total Page Views" value={stats?.totalViews} />
              <StatCard label="Views (Last 30 Days)" value={stats?.views30} />
              <StatCard label="Views (Last 7 Days)" value={stats?.views7} />
              <StatCard label="Unique Visitors (30d)" value={stats?.unique30} sub="Estimated" />
              <StatCard label="Ticket Link Clicks" value={stats?.ticketClicks} />
              <StatCard label="Contact Submissions" value={stats?.contactSubmits} />
            </div>

            <h3 className="admin-sub-heading">Daily Page Views (30 days)</h3>
            <DailyChart data={stats?.dailyViews} />

            {stats?.ticketClicksByGig?.length > 0 && (
              <>
                <h3 className="admin-sub-heading">Ticket Clicks by Venue</h3>
                <table className="admin-table">
                  <thead><tr><th>Venue</th><th>Clicks</th></tr></thead>
                  <tbody>
                    {stats.ticketClicksByGig.map(row => (
                      <tr key={row.venue}><td>{row.venue}</td><td>{row.n}</td></tr>
                    ))}
                  </tbody>
                </table>
              </>
            )}
          </div>
        )}

        {tab === 'gigs' && (
          <div className="admin-section">
            <h2>Manage Gigs</h2>

            <form className="gig-form" onSubmit={handleSubmitGig}>
              <h3 className="admin-sub-heading">{editingId ? 'Edit Gig' : 'Add New Gig'}</h3>
              <div className="gig-form-grid">
                <div className="admin-field">
                  <label>Date</label>
                  <input type="date" value={gigForm.date} onChange={handleDateChange} required />
                </div>
                <div className="admin-field">
                  <label>Display Date</label>
                  <input
                    type="text"
                    value={gigForm.date_display}
                    onChange={e => setGigForm(f => ({ ...f, date_display: e.target.value }))}
                    placeholder="e.g. 15 Aug 2026"
                    required
                  />
                </div>
                <div className="admin-field">
                  <label>Venue</label>
                  <input
                    type="text"
                    value={gigForm.venue}
                    onChange={e => setGigForm(f => ({ ...f, venue: e.target.value }))}
                    placeholder="Venue name"
                    required
                  />
                </div>
                <div className="admin-field">
                  <label>Ticket URL (optional)</label>
                  <input
                    type="url"
                    value={gigForm.href}
                    onChange={e => setGigForm(f => ({ ...f, href: e.target.value }))}
                    placeholder="https://..."
                  />
                </div>
              </div>
              {gigError && <p className="admin-error">{gigError}</p>}
              <div className="gig-form-actions">
                <button type="submit" className="admin-btn" disabled={gigSaving}>
                  {gigSaving ? 'Saving…' : editingId ? 'Save Changes' : 'Add Gig'}
                </button>
                {editingId && (
                  <button type="button" className="admin-btn-secondary" onClick={cancelEdit}>
                    Cancel
                  </button>
                )}
              </div>
            </form>

            <h3 className="admin-sub-heading">All Gigs</h3>
            {gigs.length === 0 ? (
              <p className="admin-empty">No gigs in the database.</p>
            ) : (
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Venue</th>
                    <th>Tickets</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {gigs.map(gig => (
                    <tr key={gig.id} className={gig.date < today ? 'gig-past' : ''}>
                      <td>{gig.date_display}</td>
                      <td>{gig.venue}</td>
                      <td>
                        {gig.href
                          ? <a href={gig.href} target="_blank" rel="noopener noreferrer">Tickets ↗</a>
                          : '—'
                        }
                      </td>
                      <td>
                        <span className={`gig-badge ${gig.date < today ? 'gig-badge--past' : 'gig-badge--upcoming'}`}>
                          {gig.date < today ? 'Past' : 'Upcoming'}
                        </span>
                      </td>
                      <td>
                        <div className="admin-row-actions">
                          <button className="admin-edit-btn" onClick={() => handleEditGig(gig)}>
                            Edit
                          </button>
                          <button className="admin-delete-btn" onClick={() => handleDeleteGig(gig.id)}>
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}
      </main>
    </div>
  )
}

