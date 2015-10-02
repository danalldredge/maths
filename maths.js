var maths = (function () {
	var math = {};
	
	math.multiplinus = function (x, y) {
		if (y > -1) {
			return x - y;
		}
		else {
			return (x - 1) * Math.abs(y);
		}
	};
	
	return math;
}());
