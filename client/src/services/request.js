const Request = function(url) {
  this.url = url;
};

Request.prototype.get = function(callback) {
  const request = new XMLHttpRequest();
  request.open("GET", this.url);
  request.addEventListener('load', function(){
    if(this.status != 200){
      return;
    }
    const responseBody = JSON.parse(this.responseText);
    callback(responseBody);
  });
  request.send();
};

<<<<<<< HEAD
Request.prototype.post = function(callback, body) {
  const request = new XMLHttpRequest();
  request.open("POST", this.url);
  request.setRequestHeader("Content-Type", "application/json");
  request.addEventListener('load', function(){
    if(this.status !== 201){
=======
Request.prototype.post = function (callback, body) {
  const request = new XMLHttpRequest();
  request.open("POST", this.url);
  request.setRequestHeader("Content-Type", "application/json");
  request.addEventListener("load", function(){
    if(this.status != 201){
>>>>>>> e3a1a2c48a309535173f9bfad94d71f5b6f0e5d7
      return;
    }
    const responseBody = JSON.parse(this.responseText);
    callback(responseBody);
  })
  request.send(JSON.stringify(body));
<<<<<<< HEAD
}
=======
};

Request.prototype.delete = function (callback) {
  const request = new XMLHttpRequest();
  request.open("DELETE", this.url);
  request.addEventListener('load', function(){
    if(this.status != 204){
      return;
    }
    callback();
  })
  request.send();
};
>>>>>>> e3a1a2c48a309535173f9bfad94d71f5b6f0e5d7

module.exports = Request;
