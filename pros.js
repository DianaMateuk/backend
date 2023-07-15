var http = require('http');
const  time = new Date().getTime();

function onreq(req, res) {
    res.writeHeader(200, {'Content-Type': 'text/plain'});
    res.write('Hello, world ');
    res.end();
}
http.createServer(onreq).listen(8000);

const  timeaft = new Date().getTime();
console.log(timeaft-time);
