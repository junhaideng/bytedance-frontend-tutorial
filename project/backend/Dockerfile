FROM golang
# 将文件全部复制到镜像中
# 并且构建mian.go 文件并且进行运行
COPY . /backend
ENV GIN_MODE=release
WORKDIR /backend
# 设置国内的GOPROXY
RUN go env -w GOPROXY=https://goproxy.io,direct && go build -o meituan main.go

CMD [ "./meituan" ]

EXPOSE 8080
