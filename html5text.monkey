Import "html5text.js"

Extern
Function DrawCt(str:String,x:Int,y:Int) = "DrawRealText"
Function DrawCt(str:String,x:Int,y:Int,fill:Bool) = "DrawRealText"
Function SetCtFont(str:String,size:Int)="SetRealFont"
Function SetCtFont(str:String) = "SetRealFont"
Function SetCtAlign(str:String)="SetFontAlign"
Function SetCtColor(str)="SetFontColor"
Public
