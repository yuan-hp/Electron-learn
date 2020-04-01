const {Menu,BrowserWindow}=require('electron')

template = [
    {
        label:'大保健',
        submenu:[
            {
                label:'单人服务',
                accelerator:'ctrl+o'
            },
            {
                label:'双人服务'
            }

        ]     
    },
    {
        label:'小保健',
        submenu:[
            {
                label:'爱情拍拍手',
            },
            {
                label:'牛奶凤凰沐浴'
            }

        ]          
    }
]

var m = Menu.buildFromTemplate(template)//将菜单样式载入模板

Menu.setApplicationMenu(m)//设置菜单样式




