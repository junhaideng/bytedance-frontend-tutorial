const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;
const base = `http://127.0.0.1:${PORT}`;

http
  .createServer((req, resp) => {
    const link = new URL(req.url, base);

    const filename = path.resolve(__dirname, link.pathname.replace(/^\//, ""));
    
    // 如果访问目录或者不存在的文件
    if (!fs.existsSync(filename) || fs.statSync(filename).isDirectory() ) {
      console.log(fs.existsSync(filename))
      console.log(fs.statSync(filename))
      resp.statusCode = 404;
      resp.write("Not found");
      resp.end();
      return;
    }
    // 获取到参数
    cache_type = link.searchParams.get("cache-type");
    console.log("get cache type: ", cache_type)
    if (cache_type) {
      if (cache_type == "no-store") {
        resp.setHeader("Cache-Control", "no-store");
      } else if (cache_type == "no-cache") {
        resp.setHeader("Cache-Control", "no-cache");
      } else if (/^[0-9]+$/.test(cache_type)){
        resp.setHeader("Cache-Control", "max-age="+cache_type)
      } else /*if (cache_type == "max-age") */  {
        // 其他默认情况下
        resp.setHeader("Cache-Control", "max-age=999999");
      }
    } else {
      // 如果不指定cache_type，那么设置为no-cache
      resp.setHeader("Cache-Control", "no-cache");
    }

    fs.createReadStream(filename).pipe(resp);
  })
  .listen(PORT, () => {
    console.log(`listening port: ${PORT}`);
  });
