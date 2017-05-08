var txtcanvas = document.getElementById("GameCanvas");

var ctx = txtcanvas.getContext("2d");

function DrawRealText(str,x,y,fill){

   if(fill==false){ctx.strokeText(str,x,y)}else{ctx.fillText(str,x,y)}
}

function SetRealFont(str,size,align){
if(size==null){
   ctx.font = str; 
}else{
   ctx.font = size + "px " + str ; 
}
}
function SetFontAlign(str){
    ctx.align=str;
}