define(['knockout'], function(ko) {
    ko.components.register('like-widget', {
        viewModel: { require: 'componentOne' },
        template: { require: 'text!components/example/component-like-widget.html' }
    });

    ko.applyBindings();

    ko.components.register('search-bar', {
        viewModel: { require: 'searchBarComp' },
        template: { require: 'text!components/search/searchBar.html' }
    });
    
    ko.applyBindings();
});


