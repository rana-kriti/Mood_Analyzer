import sqlite3

conn = sqlite3.connect("mood.db")
cursor = conn.cursor()

cursor.execute("""
CREATE TABLE IF NOT EXISTS mood_history (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    mood TEXT,
    feeling TEXT,
    date TEXT,
    time TEXT
)
""")

conn.commit()
conn.close()
print("Database ready")