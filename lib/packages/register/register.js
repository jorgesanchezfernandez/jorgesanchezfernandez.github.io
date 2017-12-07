define(['knockout'], function(ko) {
    ko.components.register('search-bar', {
        viewModel: { require: 'searchBarComp' },
        template: { require: 'text!components/search/searchBar.html' }
    });

    ko.applyBindings();
});


