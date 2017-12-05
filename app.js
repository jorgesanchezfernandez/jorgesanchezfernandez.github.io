// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config({
    baseUrl: 'lib',
    paths: {
    	knockout: 'Packages/knockout-3.4.2/knockout',
    	text: 'Packages/text-2.0.15/text',
    	register: 'Packages/register/register',
    	likeWidget: 'Components/example/component-like-widget',
        app: '../app'
    }
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['knockout','text','register','likeWidget','app/view-model/product']);
