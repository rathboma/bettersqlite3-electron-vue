
import { expose } from 'threads/worker'
import Database from 'better-sqlite3'



expose({
  test: () => {
    const db = new Database('/home/rathboma/foo.db')
    console.log("WORKER test", db)
  }
})