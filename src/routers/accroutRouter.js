
const express = require('express')
const path = require('path')

const accroutRouter = express.Router()

const accroutCtl = require(path.join(__dirname,'../controllers/accroutControllers.js'))

//调用getLogin方法函数
accroutRouter.get('/login',accroutCtl.getLogin)
//调用getImg方法函数
accroutRouter.get('/vcode',accroutCtl.getImg)


module.exports = accroutRouter
