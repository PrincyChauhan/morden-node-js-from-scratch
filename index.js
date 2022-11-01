const http=require('http');

const server=http.createServer((request,response)=>{
console.log(request.url)
response.end("hello Nodejs")

})
server.listen(3000)