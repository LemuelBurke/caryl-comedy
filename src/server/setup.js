import 'dotenv/config'
import bcrypt from 'bcryptjs'
import db from './db.js'

const args = process.argv.slice(2)
const usernameIdx = args.indexOf('--username')
const passwordIdx = args.indexOf('--password')

const username = usernameIdx !== -1 ? args[usernameIdx + 1] : 'admin'
const password = passwordIdx !== -1 ? args[passwordIdx + 1] : null

if (!password) {
  console.error('Usage: node src/server/setup.js --password <password> [--username <username>]')
  process.exit(1)
}

const hash = bcrypt.hashSync(password, 12)

db.prepare(`
  INSERT INTO admin_users (username, password_hash) VALUES (?, ?)
  ON CONFLICT(username) DO UPDATE SET password_hash = excluded.password_hash
`).run(username, hash)

console.log(`Admin user "${username}" created/updated successfully.`)
process.exit(0)
