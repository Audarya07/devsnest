from flask import Flask, request

app = Flask('__name__')
defMethods = ['GET', 'POST']

globalData = []


@app.route('/', methods=defMethods)
def home():
    return '''
    <h1>API</h1>
    <ol>
    <li>To add string: /add/your_string</li>
    <li>To concat strings: /concat</li>
    <ol>
    '''


@app.route("/add", methods=["POST"])
@app.route('/add/<string:ip>')
def add_string(ip=None):
    if request.method == "GET":
        globalData.append(ip)
        return f"'{ip}' succesfully stored via GET !"
    elif request.method == "POST":
        string_json = request.get_json()
        print(string_json)
        globalData.append(string_json['data'])
        return f"'{string_json['data']}' succesfully stored via POST !"


@app.route('/concat', methods=defMethods)
def concat():
    return "".join(globalData)


if __name__ == "__main__":
    app.run(debug=True)
