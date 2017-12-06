// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config({
    baseUrl: 'lib',
    shim : {
        "bootstrap" : { "deps" :['jquery'] }
    },
    paths: {
    	jquery: 'packages/jquery-2.2.4/jquery',
    	bootstrap: 'packages/bootstrap-3.3.7/bootstrap.min',
    	knockout: 'packages/knockout-3.4.2/knockout',
    	text: 'packages/text-2.0.15/text',
    	searchBarComp: 'components/search/searchBar',
    	register: 'packages/register/register',
        app: '../app'
    }
});

// Start loading the main app file.
requirejs(['jquery','bootstrap','knockout','text','app/view-model/searchModel','searchBarComp','register']);