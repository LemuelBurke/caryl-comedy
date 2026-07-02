import Database from 'better-sqlite3'
import path from 'path'
import { fileURLToPath } from 'url'
import { mkdirSync } from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const dbPath = path.join(__dirname, '../../data/carylcomedy.db')
mkdirSync(path.dirname(dbPath), { recursive: true })

const db = new Database(dbPath)
db.pragma('journal_mode = WAL')
db.pragma('foreign_keys = ON')

db.exec(`
  CREATE TABLE IF NOT EXISTS gigs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    date TEXT NOT NULL,
    date_display TEXT NOT NULL,
    show_name TEXT NOT NULL DEFAULT 'CARYL BURKE',
    venue TEXT NOT NULL,
    href TEXT,
    created_at TEXT DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS analytics_events (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    event_type TEXT NOT NULL,
    metadata TEXT,
    ip_hash TEXT,
    timestamp TEXT DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS admin_users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL
  );
`)

const gigCount = db.prepare('SELECT COUNT(*) as count FROM gigs').get()
if (gigCount.count === 0) {
  const insert = db.prepare(
    'INSERT INTO gigs (date, date_display, show_name, venue, href) VALUES (?, ?, ?, ?, ?)'
  )
  const seed = [
    ['2026-05-29', '29 May 2026', 'CARYL BURKE', "'Am Laff', Caernarfon", 'https://www.skiddle.com/whats-on/Llandudno/Jac-Y-Do%2C-Caernarfon/AM-LAFF---Cymraeg---29ain-Mai/42147623/'],
    ['2026-06-26', '26 Jun 2026', 'CARYL BURKE', 'Gwyl Bethel', null],
    ['2026-07-17', '17 Jul 2026', 'CARYL BURKE', 'Market Hall, Caernarfon', null],
    ['2026-07-19', '19 Jul 2026', 'CARYL BURKE', 'Sesiwn Fawr Dolgellau', 'https://sesiwnfawr.cymru/tickets/'],
    ['2026-08-08', '8 Aug 2026', 'CARYL BURKE', 'Caffi Maes B, Eisteddfod Genedlaethol', 'https://eisteddfod.cymru/tocynnau'],
  ]
  for (const row of seed) insert.run(...row)
}

export default db
