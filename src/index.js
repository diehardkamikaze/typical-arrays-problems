
exports.min = function min (array) {
	var min;
	var i;
	
	if (arguments.length == 0 || array.length == 0)
		return (0);
	min = +Infinity;
	i = 0;
	while (i < array.length)
	{
		if (array[i] < min)
			min = array[i];
		i++;
	}
  return (min);
}

exports.max = function max (array) {
	var max;
	var i;
	
	if (arguments.length == 0 || array.length == 0)
		return (0);
	max = -Infinity;
	i = 0;
	while (i < array.length)
	{
		if (array[i] > max)
			max = array[i];
		i++;
	}
  return (max);
}

exports.avg = function avg (array) {
	var result;
	var i;
	
	if (arguments.length == 0 || array.length == 0)
		return (0);
	i = 0;
	result = 0;
	while (i < array.length)
		result += array[i++];
  return (result/array.length);
}
