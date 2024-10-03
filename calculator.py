from flask import Flask, render_template, request

app = Flask(__name__)

# GLOBAL
YEAR = 2024

@app.route('/')
def myform():
    return render_template('my_form.html')

@app.route('/', methods=['POST'])
def myFormPost():
    birthYear = request.form.get['birth_year']
    totalContribution = request.form['total_contribution']
    withdrawnBefore = request.form['withdrawn_before']
    withdrawnThisYear = request.form['withdrawn_this_year']

    calculateContribution(birthYear, totalContribution, withdrawnBefore, withdrawnThisYear)

def calculateContribution():
    contributionAmount = 0

    if (YEAR - birthYear < 18):
        return contributionAmount
    else:
        


        return contributionAmount