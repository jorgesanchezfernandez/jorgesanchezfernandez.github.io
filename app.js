// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config({
    baseUrl: 'lib',
    paths: {
    	knockout: 'Packages/knockout-3.4.2/knockout',
    	text: 'Packages/text-2.0.15/text',
    	register: 'Packages/register/register',
    	componentOne: 'Components/example/component-like-widget',
        app: '../app'
    }
});

// Start loading the main app file.
requirejs(['knockout','text','register','componentOne','app/view-model/product']);
