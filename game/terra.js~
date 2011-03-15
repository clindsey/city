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
Dencity.terrain={};

Dencity.terrain.generateMap=function(width,height,altitude){
	var output=[],
		curRow;
	for(var x=0;x<width;x++){
		curRow=[];
		for(var y=0;y<height;y++){
			curRow.push({alt:[altitude,altitude,altitude,altitude],water:false});
		}
		output.push(curRow);
	}
	return output;
};
