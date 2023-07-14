var http = require('http');

function onreq(req, res){
    res.writeHeader(200, {'Content-Type': 'text/plain'});
    res.write('Hello, world');
    res.end();
}
http.createServer(onreq).listen(8000);
