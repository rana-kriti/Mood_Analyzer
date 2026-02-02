from flask import Flask, render_template, request, redirect, url_for, send_file

# import mysql.connector
import pymysql

from datetime import datetime

app = Flask(__name__)

# Database config
db_config = {
    'user': 'root',
    'password': 'admin@1234',
    'host': 'localhost',
    'database': 'mood_tracker',
}

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/mood')
def mood():
    return render_template('mood.html')


@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/games')
def games():
    return render_template('games.html')

@app.route('/games/rps')
def rps():
    return render_template('rps.html')

@app.route('/games/guess-number')
def guess_number():
    return render_template('guess.html')

@app.route('/games/word')
def guess_word():
    return render_template('word.html')

@app.route('/games/hangman')
def hangman():
    return render_template('hangman.html')

@app.route('/games/mind_read')
def mind_read():
    return render_template('mind_read.html')

@app.route('/mood')
def mood_page():
    return render_template('mood.html')

@app.route('/save_feeling', methods=['POST'])
def save_feeling():
    # Correct field names from your form
    mood = request.form.get('mood')
    feelings = request.form.get('feelings')  # optional

    if not mood:
        return "Mood is required", 400

    timestamp = datetime.now()

    # Save to database
    cnx = pymysql.connect(host="localhost", user="root", password="admin@1234", database="mood_tracker")
    cursor = cnx.cursor()
    sql = "INSERT INTO moods (description, created_at) VALUES (%s, %s)"
    # Combine mood and extra feelings if provided
    description = mood
    if feelings:
        description += f" - {feelings}"
    cursor.execute(sql, (description, timestamp))
    cnx.commit()
    cursor.close()
    cnx.close()

    # Redirect to home page after saving
    return redirect(url_for('home'))

@app.route('/history')
def history():
    # Connect to database
    cnx = pymysql.connect(
        host="localhost",
        user="root",
        password="admin@1234",
        database="mood_tracker"
    )
    cursor = cnx.cursor(pymysql.cursors.DictCursor)
    cursor.execute("SELECT * FROM moods ORDER BY created_at DESC")
    moods = cursor.fetchall()
    cursor.close()
    cnx.close()

    return render_template("history.html", moods=moods)




if __name__ == '__main__':
    app.run(debug=True)