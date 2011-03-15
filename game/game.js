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
var Dencity={
	settings:	{
					defaultMap:{width:10,height:10,altitude:0}
				},
	init:		function(canvas,map){
					this.canvas=canvas;
					this.context=this.canvas.getContext("2d");
					this.map=map||this.terrain.generateMap(
								this.settings.defaultMap.width,
								this.settings.defaultMap.height,
								this.settings.defaultMap.altitude);
				},
	viewport:	{x:0,y:0,z:30,ch:0.5,rot:0},
	loadedImages:[]
}


