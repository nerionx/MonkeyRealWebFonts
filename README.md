# MonkeyRealWebFonts
Exposes real web fonts to monkey for HTML5 Targets, allows you to draw text onto the monkey game canvas without creating bitmaps
Also compatible with web based fonts e.g. fonts.google.com

Use:

import html5text

Functions:

DrawCt(text, x, y, fill:bool[optional]) - DrawCanvasText, the message as a string and then the position, 
if fill is ommited the text is solid, set to false for outline only

SetCtFont(fontname:string,size:int)     - Set the font and size e.g. Comic Sans MS, 40
SetCtFont(font:string)                  - Set the font as u you would a css style
SetCtAlign(align:string)                - Left right center

Colour is set using the standard mojo function setcolor
