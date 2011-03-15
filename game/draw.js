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
Dencity.draw={}

//drawing map to canvas functions
Dencity.draw.drawAll=function(){
	Dencity.util.mapToSel(
		Dencity.util.addToSel([],
			{x:0,y:0},
			{x:Dencity.map.length,y:Dencity.map[0].length}),
		Dencity.draw.drawTile);
};

Dencity.draw.drawTile=function(pos){
	var cPos=Dencity.util.tilePos(pos);
	if(Dencity.draw.tileInView(cPos)){
	}
};

Dencity.draw.tileInView=function(cPos){
	if((cPos[2].x>0 &&
		   cPos[1].y<Dencity.canvas.height &&
		   cPos[0].x<Dencity.canvas.width &&
		   cPos[3].y>0))
		return true;
	return false;
};

Dencity.draw.loadTileImage=function(pos){};


//procedural buildings
Dencity.draw.generateBuildingSprite=function(building,rotation,cameraheight){};

//terrain drawing
Dencity.draw.generateTileSprite=function(pos){};

	
