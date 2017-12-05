define(['knockout'], function(ko) {
	ko.components.register('like-widget', {
	    viewModel: { require: 'likeWidget' },
	    template: { require: 'text!Components/example/component-like-widget.html' }
	});
});