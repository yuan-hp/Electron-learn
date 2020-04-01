var {shell}=require('electron')
var mybtn = document.querySelector('#mybtn')


var aHref = document.querySelector('#aHref')

//aHref.onclick(function(e){
   // e.preventDefault()
   // var href = this.getAttribute('href')
  //  shell.openExternal(href)
  //shell.open(href)
//})


mybtn.onclick = function(e){
    window.open('./messg_send.html')
}

window.addEventListener('message',(msg)=>{//父窗口添加信息监听，接收子窗口过来的信息
    var mytext=document.getElementById('mytext')
    mytext.innerHTML=JSON.stringify(msg)
})
