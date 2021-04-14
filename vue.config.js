const path = require("path");
const name = "vue-ts";
const sourceMap = process.env.NODE_ENV === "development";

const devServerPort = 9527;
const mockServerPort = 9528;

module.exports = {
    publicPath: "/", // 基本路径
    outputDir: "dist", // 输出文件目录
    lintOnSave: process.env.NODE_ENV === "development", // eslint-loader 是否在保存的时候检查
    chainWebpack: config => {
            // Provide the app's title in webpack's name field, so that
            // it can be accessed in index.html to inject the correct title.
            config.set("name", name);
        },
    devServer: {
        open: true,
            compress: true,
            host: "localhost",
            port: devServerPort,
            hot: true,
            proxy: {
            '/ako/': {
                target: "https://cn.bing.com/search?q=ff&qs=n&form=QBLH&sp=-1&pq=ff&sc=0-2&sk=&cvid=2EE8B9E9713B49358E754C98D488EAE1",
                    ws: true,
                    changeOrigin: true,// 在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
                    pathRewrite:{  // 路径重写，
                    '^/ako': ''  // 替换target中的请求地址，也就是说以后你在请求http://api.douban.com/v2/XXXXX这个地址的时候直接写成/XXXXX即可。
                }
              }
            },
           // proxy:
       // "https://vue-typescript-admin-mock-server.armour.now.sh/mock-api/v1/",
            // proxy: {
            //   // 设置代理
            //   // proxy all requests starting with /api to jsonplaceholder
            //   [process.env.VUE_APP_BASE_API]: {
            //     target: `http://localhost:${mockServerPort}/mock-api/v1`,
            //     changeOrigin: true,
            //     pathRewite: {
            //       ["^" + process.env.VUE_APP_BASE_API]: ""
            //     }
            //   }
            // },
            before: app => {} // 用于在服务器内部所有中间件执行前定义自定义处理程序，即此选项可在本地模拟服务器数据返回。参考https://github.com/lbwa/set/issues/8
    },
};