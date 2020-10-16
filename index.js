const http = require('http');
const axios = require('axios');


const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    try{
        axios.get('https://api.github.com/repos/nodejs/node').then(response =>{
                const {data} = response;
                const { stargazers_count, forks_count, open_issues_count } = data;
                res.end(`Stargazers: ${stargazers_count}\nForks: ${forks_count}\nOpen Issues: ${open_issues_count}`);
        });
    } catch(e) {
        res.statusCode = 500;
        res.end('Internal error issued.\n');
    }

});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});