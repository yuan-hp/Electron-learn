const bnt = this.document.querySelector('#btn')

const BrowserWindow = require('electron').remote.BrowserWindow

window.onload=()=>{
    bnt.onclick = ()=>{
        newWin=new BrowserWindow({
            width:400,
            height:300,
        })
        //require('./main/menu.js');
        newWin.loadFile('yellow.html');
        newWin.on('closed',()=>{
            newWin = null
       })
    }

}

const {remote} = require('electron')
var rightClick=[
    {
        label:'粘贴',
        accelerator:'ctrl+c'   
    },
    {
        label:'复制',
        accelerator:'ctrl+v'   
    }   
]
var m = remote.Menu.buildFromTemplate(rightClick)//将菜单样式载入模板

window.addEventListener('contextmenu',(e)=>{//右键菜单编写
    e.preventDefault()
    m.popup({window:remote.getCurrentWindow()})
})

