define(['knockout'], function(ko, component) {
	ko.components.register('like-widget', {
	    viewModel: { require: 'likeWidget' },
	    template: {  require: 'likeWidgetTemplate' }
	});
});