
//ray = point + t * vector
function rayIntersection(p1x, p1y, d1x, d1y, p2x, p2y, d2x, d2y){
	//get vector pieces
	var v1x = d1x - p1x, v1y = d1y - p1y;
	var v2x = d2x - p2x, v2y = d2y - p2y;
	//calculate t's for rays that meet
	var t1 = (v2x*(p1y - p2y) - v2y*(p1x - p2x))/(v1x*v2y - v1y*v2x);
	var t2 = (v1y*(p2x - p1x) - v1x*(p2y - p1y))/(v1x*v2y - v1y*v2x);
	//if either t's are negative, they don't meet
	if (t1 < 0 || t2 < 0)
		return false;
	//otherwise return the x and y coordinates of the point the rays meet
	return { 
		x: p1x + t1 * v1x,
		y: p1y + t1 * v1y
	}
}
console.log(rayIntersection(3,1,3,2,1,3,2,3))
console.log(rayIntersection(3,2,3,1,1,3,2,3))
console.log(rayIntersection(3,1,3,2,2,3,1,3))
console.log(rayIntersection(-293,279,-281,277,-223,604,-233,613))