const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require('querystring');

const template = {
  HTML:function (title, list, body, control) {
    return `
    <!doctype html>
    <html>
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">WEB</a></h1> 
      ${list}
      ${control}
      ${body}
    </body>
    </html>
    `;},
  list: function(fileList) {
    let list = '<ul>';
    for (i = 0; i < fileList.length; i++) {
      list += `<li><a href="/?id=${fileList[i]}">${fileList[i]}</a></li>`;
    }
    list = list + '</ul>';
    return list;
  },
}

const app = http.createServer(function (request, response) {
  const _url = request.url;
  const queryData = url.parse(_url, true).query;
  const pathname = url.parse(_url, true).pathname;
  if (pathname === '/') {
    if (queryData.id === undefined) {
      fs.readdir('./data', function (err, fileList) {
        const title = 'Welcome';
        const description = 'Hello, Node.js';
        let list = template.list(fileList);
        let html = template.HTML(title, list, `<h2>${title}</h2>${description}`,
        `<a href="/create">create</a>`
        );
        response.writeHead(200);
        response.end(html);
      });
    } else {
      fs.readdir('./data', function (err, fileList) {
        fs.readFile(`data/${queryData.id}`, 'utf8', function (err, description) {
          let title = queryData.id;
          let list = template.list(fileList);
          let html = template.HTML(title, list,
            `<h2>${title}</h2>${description}`,
            ` <a href="/create">create</a>
              <a href="/update?id=${title}">update</a>
              <form action="delete_process" method="post">
                <input type="hidden" name="id" value="${title}">
                <input type="submit" value="delete">
              </form>`
          );
          response.writeHead(200);
          response.end(html);
        });
      });
    }
  } else if(pathname === '/create') {
    fs.readdir('./data', function (err, fileList) {
      const title = 'WEb - create';
      let list = template.list(fileList);
      let html = template.HTML(title, list, `
      <form action="/create_process" method="post">
        <p><input type="text" name="title" placeholder="title"></p>
        <p>
          <textarea name="description" placeholder="description"></textarea>
        </p>
        <p>
          <input type="submit">
        </p>
      </form>
      `, '');
      response.writeHead(200);
      response.end(html);
    })
  } else if (pathname === '/create_process') {
    let body = '';
    request.on('data', function(data) {
      body += data;
    });
    request.on('end', function() {
      let post = qs.parse(body);
      let title = post.title;
      let description = post.description;
      fs.writeFile(`data/${title}`, description, 'utf8', function(err) {
        response.writeHead(302, {Location: `/?id=${title}`});
        response.end();
      })
    });
  } else if (pathname === '/update') {
    fs.readdir('./data', function (err, fileList) {
      fs.readFile(`data/${queryData.id}`, 'utf8', function (err, description) {
        let title = queryData.id;
        let list = template.list(fileList);
        let html = template.HTML(title, list,
        `
        <form action="/update_process" method="post">
          <input type="hidden" "text" name="id" value="${title}">
          <p><input type="text" name="title" placeholder="title" value="${title}"></p>
          <p>
            <textarea name="description" placeholder="description">${description}</textarea>
          </p>
          <p>
            <input type="submit">
          </p>
        </form>
        `,
        `<a href="/create">create</a> <a href="/update?id=${title}">update</a>`
        );
        response.writeHead(200);
        response.end(html);
      });
    });
  } else if (pathname === '/update_process') {
    let body = '';
    request.on('data', function(data) {
      body += data;
    });
    request.on('end', function() {
      let post = qs.parse(body);
      let id = post.id;
      let title = post.title;
      let description = post.description;
      fs.rename(`data/${id}`, `data/${title}`, function(err) {
        fs.writeFile(`data/${title}`, description, 'utf8', function(err) {
          response.writeHead(302, {Location: `/?id=${title}`});
          response.end();
        });
      });
    });
  } else if (pathname === '/delete_process') {
    let body = '';
    request.on('data', function(data) {
      body += data;
    });
    request.on('end', function() {
      let post = qs.parse(body);
      let id = post.id;
      fs.unlink(`data/${id}`, function(err) {
        response.writeHead(302, {location: `/`});
        response.end();
      })
    });
  } else {
    response.writeHead(404);
    response.end('Not found');
  }
});
app.listen(3000);