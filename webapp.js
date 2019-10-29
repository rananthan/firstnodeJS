var http= require('http')
var url = require('url')

http.createServer(onRequest).listen(8888);
console.log('Server has Started');

function onRequest(request,response) 
{
var pathName = url.parse(request.url).pathname
console.log('pathname' + pathName);
showPage(response,pathName);
} 

function showPage(response, pathName)
{
	if (contentMap[pathName])
	{
		response.writeHead(200, {'Content-Type' : 'text/html'});
		response.write(contentMap[pathName]);
		response.end();
	}
	else
	{
		response.writeHead(404, {'Content-Type' : 'text/html'});
		response.write('404 Page Not Found');
		response.write('Try other names')
		response.end();
	}
}

var contentMap = 
{

	'/' : '<h1>Welcome to the Site</h1>',
	'/contact' : '<h1>Contact Page</h1>',
	'/about' : '<h1>About Page</h1>',
	'/users' : '<h1>Users Page</h1>',
	'/privacy' : '<h1>Privacy Page</h1>'
}
	
