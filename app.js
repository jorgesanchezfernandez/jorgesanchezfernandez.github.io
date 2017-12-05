// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config({
    baseUrl: 'lib',
    shim : {
        "bootstrap" : { "deps" :['jquery'] }
    },
    paths: {
    	jquery: 'Packages/jquery-2.2.4/jquery',
    	bootstrap: 'Packages/bootstrap-3.3.7/bootstrap.min',
    	knockout: 'Packages/knockout-3.4.2/knockout',
    	text: 'Packages/text-2.0.15/text',
    	register: 'Packages/register/register',
    	componentOne: 'Components/example/component-like-widget',
        app: '../app'
    }
});

// Start loading the main app file.
requirejs(['jquery','bootstrap','knockout','text','register','componentOne','app/view-model/product']);
