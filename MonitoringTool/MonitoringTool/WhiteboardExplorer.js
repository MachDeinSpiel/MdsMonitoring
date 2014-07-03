function explorer_whiteboard(whiteboard) {
	
	delete_explorer();
	
//	bedingung zu player isnt undefined
	if (whiteboard) {
//		save whiteboard content to an array
		var expWhiteboard = new Array(whiteboard);
		var expPlayers = whiteboard.Players;
		
		var div = document.getElementById("controlPanel");
		var frameDiv = document.createElement('div');
		frameDiv.id = 'frameDiv';
		
		console.log('expPlayers: ' + expPlayers);
		if (expPlayers) {
			console.log('expPlayers: ' + expPlayers);
			for (x=0; x<expWhiteboard.length; x++) {
//			for (x=0; x<1; x++) {
//				if (expWhiteboard[x] != 'undefined') {
//					console.log('expWhiteboard[' + x + ']: ' + expWhiteboard[x].health);
//				creates player node
				var playerNumber = x + 1;
				var rootDiv = document.createElement("div");
				rootDiv.id = 'rootDiv' + x;
				rootDiv.setAttribute("onclick", "clickEvent()");
			
//				image einfügen
				var img = document.createElement("IMG");
				img.src = 'images/player_icon_small.png';
				rootDiv.appendChild(img);
				var rootNode = document.createTextNode('Player' + playerNumber);
				rootDiv.appendChild(rootNode);
			
//				Anzahl der Elemente ermitteln
				var iLength = objectLength(expPlayers[x]);		
				for (y=0; y<iLength; y++) {
//				for (y=0; y<1; y++) {
//					kreiert player childnode
//					dynamische numerierung z.b. 'childDiv' + y
					var childDiv = document.createElement("div");
					childDiv.id = 'childDiv' + x + y;
				
					var childDiv0 = document.createElement("div");
					childDiv0.id = 'childDiv' + x + '.0';
					var childNode = document.createTextNode('pathKey: ' + expPlayers[x].pathKey);
					childDiv0.appendChild(childNode);
					rootDiv.appendChild(childDiv0);
					
					var childDiv1 = document.createElement("div");
					childDiv1.id = 'childDiv' + x + '.1';
					childNode = document.createTextNode('health: ' + expPlayers[x].health);
					childDiv1.appendChild(childNode);
					rootDiv.appendChild(childDiv1);
					
					var childDiv2 = document.createElement("div");
					childDiv2.id = 'childDiv' + x + '.2';
					childNode = document.createTextNode('latitude: ' + expPlayers[x].latitude);
					childDiv2.appendChild(childNode);
					rootDiv.appendChild(childDiv2);
					
					var childDiv3 = document.createElement("div");
					childDiv3.id = 'childDiv' + x + '.3';
					childNode = document.createTextNode('longitude: ' + expPlayers[x].longitude);
					childDiv3.appendChild(childNode);
					rootDiv.appendChild(childDiv3);
					
					var childDiv4 = document.createElement("div");
					childDiv4.id = 'childDiv' + x + '.4';
					childNode = document.createTextNode('inventory');
					childDiv4.appendChild(childNode);
					rootDiv.appendChild(childDiv4);
//					for (z=0; z<expPlayers[x].inventory.length; z++) {
//						var childDiv = document.createElement('div');
//						childDiv.id = 'childDiv' + x + '.4.' + z;
//						var childNode = document.createTextNode(expPlayers[x].inventory[z]);	
//						childDiv.appendChild(childNode);
//						childDiv4.appendChild(childDiv);
//					}			
				}
				frameDiv.appendChild(rootDiv);
				div.appendChild(frameDiv);
				
//				} else {
//					console.log('is undefined!')
//				}
				
			}
		}
	} else {
		console.log('keine daten empfangen :(');
	}
}

function delete_explorer()	{

	if (document.getElementById('frameDiv')) {
		$(document.getElementById('frameDiv')).remove();
	}
}

function path(obj, path, def) {

    for(var i = 0,path = path.split('.'),len = path.length; i < len; i++){
        if(!obj || typeof obj !== 'object') return def;
        obj = obj[path[i]];
    }

    if(obj === 'undefined') return def;
    return obj;
}

//returns the length of any objekt
function objectLength(tmpObject) {
	var iLength = 0;
	for (var sKey in tmpObject) 
	{
		if (tmpObject.hasOwnProperty(sKey)) iLength++;
	}
	return iLength;
};

//change childDivX.Y.style.display between 'none' and 'block'
function clickEvent (e) {
	
	if( !e ) e = window.event;
	var x = e.target || e.srcElement;
	console.log(document.getElementById(x.id));
	var targetNo = x.id.substring(x.id.length-1, x.id.length);
	var forInt = document.getElementById(x.id).childNodes.length-2;
	var childString = (targetNo * forInt);
	var childNumber = childString;
	if (/rootDiv/.test(x.id)) {
//		if (document.getElementById('childDiv' + childString) != null) {
			if (document.getElementById('childDiv' + targetNo + '.' + childString).style.display != 'none') {
				for (x=0; x<forInt; x++) {
					var child = 'childDiv' + targetNo + '.' + childNumber;
					document.getElementById(child).style.display = "none";
					childNumber++;
				}
			} else {
				for (x=0; x<5; x++){
					var child = 'childDiv' + targetNo + '.' + childNumber;
					document.getElementById(child).style.display= "block";
					childNumber++;
				}
			}
//		}
	}
}
