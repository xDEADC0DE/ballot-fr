// YES, TAU.
Math.TAU = Math.PI*2;

// For the election sandbox code
function _icon(name){
	return "<img src='img/icon/"+name+".png'/>";
}

// Translating the candidate's names
var _translation = function(winner) {
	ppl = {"square": "carré", "pentagon": "pentagone", "bob": "bob", "triangle": "triangle", "hexagon": "hexagone"};
	return ppl[winner];
}
