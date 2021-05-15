const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
// 是否在产生模式
const prod = process.env.NODE_ENV === 'production'

// 支持PWA
module.exports = withPWA({
    // 声明外部域名，以便next/image调用
    images: {
        domains: ["p0.meituan.net", "p1.meituan.net", "img.meituan.net"]
    },
    pwa: {
        dest: 'public',
        disable: !prod, // 生产模式下禁用
        runtimeCaching, // cache 条件
    },
    // 使用webpack5
    future: {
        webpack5: true,
    },
})
