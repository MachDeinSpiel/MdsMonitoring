//function explorer_whiteboard(whiteboard) {
function explorer_whiteboard(whiteboard) {
	
//	save whiteboard content to an array
	if (whiteboard) {
		var expWhiteboard = new Array(whiteboard);
		console.log("expWhiteboard: " + expWhiteboard[0]);
	} else {
		console.log('keine daten empfangen :(');
	}
	
//	delete_explorer();
	
	var div = document.getElementById("controlPanel");
	
	for (x=0; x<expWhiteboard.length; x++) {
		rootNumber = x + 1;
//		console.log('counter: ' + x);
//	for (x=0; x<1; x++) {
//		kreiert player node
		var number = x+1;
//		var divName = 'rootDiv' + x;
		var rootDiv = document.createElement("div");
		rootDiv.id = 'rootDiv' + x;
		rootDiv.setAttribute("onclick", "clickEvent()");
		var rootNode = document.createTextNode('player' + number);
		rootDiv.appendChild(rootNode);
//		console.log(rootDiv);
//		var child = expWhiteboard[x].childNodes.length;
//		console.log('anz childNodes: ' + child);
//		var elem = document.getElementById
//		for (y=0; y<expWhiteboard[x].childNodes.length; y++) {
//			console.log('counter: ' + );
		for (y=0; y<1; y++) {
//			kreiert player childnode
//			dynamische numerierung z.b. 'childDiv' + y
			var childDiv0 = document.createElement("div");
			childDiv0.id = 'childDiv0';
			var childDiv1 = document.createElement("div");
			childDiv1.id = 'childDiv1';
			var childDiv2 = document.createElement("div");
			childDiv2.id = 'childDiv2';
			var childNode = document.createTextNode(expWhiteboard[x].pathKey);
//			var childNode = document.createTextNode('pathKey');
			childDiv0.appendChild(childNode);
			rootDiv.appendChild(childDiv0);
			childNode = document.createTextNode(expWhiteboard[x].health);
//			childNode = document.createTextNode('health');
			childDiv1.appendChild(childNode);
			rootDiv.appendChild(childDiv1);
			childNode = document.createTextNode(expWhiteboard[x].inventory);
//			childNode = document.createTextNode('inventory');	
			childDiv2.appendChild(childNode);
			rootDiv.appendChild(childDiv2);
//			for (z=0; z<expWhiteboard.Player[x].inventory.length; z++) {
//				var childDiv2 = document.createElement('div');
//				childDiv2.id = 'childDiv2';
//				var childNode2 = document.createTextNode(expWhiteboard.Player[x].inventory);	
//				childDiv2.appendChild(childNode2);
//				childDiv1.appendChild(childDiv2);
//			}
			
		}
		div.appendChild(rootDiv);
	}
	
}

function delete_explorer()	{

	if (document.getElementById("explorer")) {
		$(document.getElementById("explorer")).remove();
	}
}

function clickEvent () {
	var target = event.target.id;
	var subString = target.substring(target.length-1, target.length);
	var childString = (subString * 3);
	var childNumber = childString;
	if (/rootDiv/.test(target)) {
		if (document.getElementById('childDiv' + childString).style.display != 'none') {
//			anzahl der childNodes fehlt noch für for ()
			for (x=0; x<document.getElementById(target).childNodes.length-1; x++) {
//			for (x=0; x<3; x++) {
				var child = 'childDiv' + childNumber;
				document.getElementById(child).style.display = "none";
				childNumber++;
			}
		} else {
			for (x=0; x<3; x++){
				var child = 'childDiv' + childNumber;
				document.getElementById(child).style.display= "block";
				childNumber++;
			}
		}
	}
}
