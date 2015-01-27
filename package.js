Package.describe({
    name: 'mirrorcell:card',
    summary: ' A meteor wrapper for Card by jessepollak  ',
    version: '1.0.1',
    git: '',
    documentation: 'README.md'
});

Npm.depends({'jquery.payment' : "1.1.3"});

Package.onUse(function(api) {
    api.versionsFrom('1.0.3.1');

    api.use(['jquery', 'coffeescript']);
    api.imply(['jquery', 'coffeescript']);
 
    api.addFiles([
  	    'card/lib/css/card.css',
  	    'card/lib/js/card.js',
  	    'card/src/coffee/card.coffee',
  	    'card/src/scss/card.scss',
  	    'card/src/scss/_mixins.scss',
  	    'card/src/scss/cards/_amex.scss',
  	    'card/src/scss/cards/_card.scss',
  	    'card/src/scss/cards/_discover.scss',
  	    'card/src/scss/cards/_mastercard.scss',
  	    'card/src/scss/cards/_visa.scss'],
        'client');

    api.export('Card');
});
//Tests
Package.onTest(function(api) {
    api.use('tinytest');
    //api.use('mirrorcell:card');
    api.addFiles('mirrorcell:card-tests.js');
});
