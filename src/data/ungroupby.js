r3.data.prototype.ungroupBy = function () {
	this.dataset.data = jQuery.extend(true, [], this.Dataset);
	var columns = jQuery.extend(true, [], this.dimensions), i, length;
	
	this.dimensions = [];
	
	for (i = 0, length = columns.length; i < length; i = i + 1) {
		this.Dimensions[columns[i]] = true;
	}
	
	this.groupby(columns);
}; 

r3.data.prototype.ungroupby = function (columns) {
	if(!(columns instanceof Array)) {
		if(this.Dimensions[columns] === false) {
			this.Dimensions[columns] = true;
			if(this.dimensions.indexOf(columns) != -1){
				this.dimensions.splice(this.dimensions.indexOf(columns),1);
			}
		}
	} else {
		for(var i=0, length=columns.length; i<length; i++) {
			if(this.Dimensions[columns[i]] === false) {
				this.Dimensions[columns[i]] = true; this.dimensions.push(columns[i]);
				if(this.dimensions.indexOf(columns[i]) != -1){
					this.dimensions.splice(this.dimensions.indexOf(columns[i]),1);
				}
			}
		}
	}
	
	this.ungroupBy();
};