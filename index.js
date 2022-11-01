const http=require('http');

const server=http.createServer((request,response)=>{
    if(request.url==='/about'){
        return response.end("The about Page")
    }else if(request.url==='/contact'){
        return response.end("The contact Page")
    }else if(request.url==='/'){
        return response.end("The home Page")
    }else{
        response.writeHead(404)
        response.end("The page was not found")
    }

})
server.listen(3000)