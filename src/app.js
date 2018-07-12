
const express = require('express')
const path = require('path')

//创建服务器
const app = express();

// //导入静态资源
app.use(express.static(path.join(__dirname,'statics')))


//执行文件处理
const accroutRouter = require(path.join(__dirname,'./routers/accroutRouter.js'))
app.use('/accrout',accroutRouter)


//开启监听
app.listen(3000,'127.0.0.1',err=>{
    if(err){
        console.log(err)
    }
    console.log('start OK')
})
