var electron = require('electron')
var app = electron.app
var BrowserWindow=electron.BrowserWindow

var mainWindow = null

app.on('ready',()=>{
    mainWindow = new BrowserWindow({
        width:800,
        height:600,
        webPreferences:{nodeIntegration:true}//保证可以使用node下的组件
    });
    //require('./main/menu.js');//自定义菜单
    mainWindow.loadFile('demo9_kugou.html')
    // 打开开发者工具
    mainWindow.webContents.openDevTools()
    //嵌入子窗口
    /*
    var BrowserViev = electron.BrowserView
    var view = new BrowserViev()
    mainWindow.setBrowserView(view)
    view.setBounds({x:0,y:100,width:800,height:500})
    view.webContents.loadURL('http://www.baidu.com')
    */

    mainWindow.on('closed',()=>{//关闭窗口时需要释放内存
        mainWindow = null;
    });
})

