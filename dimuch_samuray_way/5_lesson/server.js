const http = require('http')

let requestCount = 0

const server = http.createServer((req, res) => {
 //   if (req.url === '/favicon.ico') return res.end()
    if (req.url === '/favicon.ico') {
        const emojiFavicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><text y="50" font-size="50">😎</text></svg>`
        res.statusCode = 200
        res.setHeader('Content-Type', 'image/svg+xml')
           return res.end(emojiFavicon)
    }


    switch (req.url) {
        case '/students':
            requestCount++
            res.write('Students')
            break
        case '/':
        case '/courses':
            requestCount++
            res.write('FRONT+BACK')
            break
        default:
            res.write('404 not found')
    }

    res.write(' IT-KAMASUTRA: ' + requestCount)
    res.end()
})

server.listen(4000)