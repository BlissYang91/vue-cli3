const goods = require('./data/goods.json');
const ratings = require('./data/ratings.json');
const seller = require('./data/seller.json');
module.exports = {
    baseUrl:'/',//跟路径
    outputDir:'dist',//构建输出
    assetsDir:'assets',//静态资源目录（js,css,img,fonts）
    lintOnSave:false,//是否开启eslint保存检测 true false error
    devServer:{
        open:true,//运行后自动打开浏览器页面
        host:'localhost',
        port:8081,
        https:false,
        hotOnly:false,
        proxy:{
            // 配置跨域
            '/api':{
                target:'http//localhost:8080/api/',
                ws:true,
                changeOrigin:true,
                pathRewrite:{
                    '^api':''
                }
            }
        },
        before(app){
            // 要访问地址： http://localhost:8080/api/goods
            app.get("/api/goods",(req,res) => {
                res.json(goods);
            });
            app.get("/api/ratings",(req,res) => {
                res.json(ratings);
            });
            app.get("/api/seller",(req,res) => {
                res.json(seller);
            })

        }
    }
}