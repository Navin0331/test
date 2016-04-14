
function(username, pass) {
    var ajax = document.querySelector("#ajax")
    ajax.method = "POST"
    ajax.contentType = "application/x-www-form-urlencoded"
    ajax.body = {"username": username, "password": pass}
    ajax.url = "http://localhost:8080/api/auth/login"
    var req = ajax.generateRequest()
    req.completes.then(function(v) {console.log(v)}, function(e){console.log(e)})
}