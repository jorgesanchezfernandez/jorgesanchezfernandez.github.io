define(['knockout'], function(ko) {
	function SearchModel() {
		this.searchInput = ko.observable();
	    this.startDate = ko.observable(new Date());
	    this.endDate = ko.observable(new Date());
	}
	return SearchModel;
});