/*
Dencity City Simulator (0.0)
Filename:		lib/general.js
Description:	General library functions used by Dencity

Except where noted below,
Copyright (C) 2011, Ben Green ( ben@latenightsketches.com )

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

function isArray(obj) {
   if (obj.constructor.toString().indexOf("Array") == -1)
      return false;
   else
      return true;
}

function inArray(needle, haystack,notPoints) {
	var length = haystack.length;
	for(var i = 0; i < length; i++) {
		if(notPoints=='id'){
			if(haystack[i].id==needle) return true;
		}else if(notPoints){
			if(haystack[i]==needle) return true;
		}else{
			if(haystack[i].x == needle.x && haystack[i].y == needle.y) return true;
		}
	}
	return false;
}

Array.prototype.avg = function() {
	var av = 0;
	var cnt = 0;
	var len = this.length;
	for (var i = 0; i < len; i++) {
		var e = +this[i];
		if(!e && this[i] !== 0 && this[i] !== '0') e--;
		if (this[i] == e) {av += e; cnt++;}
	}
	return av/cnt;
}

Array.prototype.boolToInt=function(){
	var out=[];
	for(var i=0;i<this.length;i++){
		out.push((this[i] ? 1 : 0));
	}
	return out;
}

// Array Remove - By John Resig (MIT Licensed)
Array.prototype.remove = function(from, to) {
	var rest = this.slice((to || from) + 1 || this.length);
	this.length = from < 0 ? this.length + from : from;
	return this.push.apply(this, rest);
};

Object.prototype.clone = function() {
  var newObj = (this instanceof Array) ? [] : {};
  for (i in this) {
    if (i == 'clone') continue;
    if (this[i] && typeof this[i] == "object") {
      newObj[i] = this[i].clone();
    } else newObj[i] = this[i]
  } return newObj;
};

function genRandom(from, to){
	return Math.floor(Math.random() * (to - from + 1) + from);
}

function repeatString(str,count){
	var output="";
	for(var i=0;i<count;i++){
		output+=str;
	}
	return output;
}

function drawPath(context,tilePoints,fillStyle,strokeStyle,lineWidth){
	context.beginPath();
	if(strokeStyle) context.strokeStyle=strokeStyle;
	context.fillStyle = fillStyle;
	if(lineWidth) context.lineWidth = lineWidth;
	for(var i=0;i<tilePoints.length;i++){
		if(i==0){
			context.moveTo(Math.round(tilePoints[i].x),
							Math.round(tilePoints[i].y));
		}else{
			context.lineTo(Math.round(tilePoints[i].x),
							Math.round(tilePoints[i].y));
		}
	}


	context.fill();
	if(strokeStyle) context.stroke();
	context.closePath();
}

