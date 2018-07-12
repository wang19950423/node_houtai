
const path = require('path')
const captchapng = require('captchapng');

exports.getLogin = (req,res)=>{
    res.sendFile(path.join(__dirname,'../views/login.html'))
}

exports.getImg = (req,res)=>{
    
        //提出随机生成的数字
        const random = parseInt(Math.random()*9000+1000)

        var p = new captchapng(80,30,random); // width,height,numeric captcha
        p.color(0, 0, 0, 0);  // First color: background (red, green, blue, alpha)
        p.color(80, 80, 80, 255); // Second color: paint (red, green, blue, alpha)
 
        var img = p.getBase64();
        var imgbase64 = new Buffer(img,'base64');
        res.writeHead(200, {
            'Content-Type': 'image/png'
        });
        res.end(imgbase64);
   
}
