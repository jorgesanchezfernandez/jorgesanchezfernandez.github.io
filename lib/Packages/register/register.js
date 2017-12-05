define(['knockout'], function(ko) {
    ko.components.register('like-widget', {
        viewModel: { require: 'componentOne' },
        template: { require: 'text!Components/example/component-like-widget.html' }
    });
});


