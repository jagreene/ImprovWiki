import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  //this.resource('new-article');
  this.resource('articles', function() {
    this.route('view', {path: 'article/view/:article_id'});
    this.route('new');
  });
});

export default Router;
