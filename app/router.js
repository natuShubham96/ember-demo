import EmberRouter from '@ember/routing/router';
import config from 'ember-demo/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('clothes', function() {
    this.route('t-shirt');
  });
  this.route('item', {path: '/item/:item_id'});  //For creating dynamic routes
  this.route('not-found', {path: '/*path'});   //For handling un-known routes
});
