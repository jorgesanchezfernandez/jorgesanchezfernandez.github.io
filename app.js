// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config({
    baseUrl: 'lib',
    paths: {
    	knockout: 'Packages/knockout-3.4.2/knockout',
    	domReady: 'Packages/domReady/domReady',
    	text: 'Packages/text-2.0.15/text',
    	knockoutReg: 'Packages/knockout-register/main',
    	likeWidget: 'Components/example/component-like-widget',
    	likeWidgetTemplate: 'text!Components/example/component-like-widget.html',
        app: '../app'
    }
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['knockout','knockoutReg','app/view-model/product']);
