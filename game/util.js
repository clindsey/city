/*
Dencity City Simulator (0.0)
Copyright (C) 2011, Ben Green

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
Dencity.util={}

Dencity.util.tilePos=function(pos){ return [{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0}] };

Dencity.util.loadImage=function(){};
Dencity.util.getImage=function(){};

Dencity.util.addToSel=function(sel,posA,posB){
	var range={x:{start:(posA.x<posB.x ? posA.x : posB.x),
			  end:(posA.x>posB.x ? posA.x : posB.x)},
		   y:{start:(posA.y<posB.y ? posA.y : posB.y),
			  end:(posA.y>posB.y ? posA.y : posB.y)}};
			 
	for(var x=range.x.start; x<range.x.end+1; x++)
		for(var y=range.y.start; y<range.y.end+1; y++)
			sel.push({x:x,y:y});
			
	return sel;
};
	
Dencity.util.mapToSel=function(sel,func){
	for(var i=0;i<sel.length;i++)
		func.call(this,sel[i]);
};

