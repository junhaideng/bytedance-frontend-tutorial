### 使用方式
首先使用下面的命令开启服务
```bash
node server.js
```

访问网页 http://127.0.0.1:3000/static/1.png 查看结果

可以携带url参数示例
```
http://127.0.0.1:3000/static/1.png?cache-type=max-age # 设置默认为max-age=999999
http://127.0.0.1:3000/static/1.png?cache-type=99 # 设置指定的max-age
http://127.0.0.1:3000/static/1.png?cache-type=no-cache
http://127.0.0.1:3000/static/1.png?cache-type=no-store
```