import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

// Main router for all paths.
// When you are sent to some particular URL, which route will you see?
// This determines that. 
Router.map(function() {
	// Overarching route of dealing-with-articles
	// (there would be another this.resource if we had
	//  another class of operations on the site)
  this.resource('articles', function() {
  	// for viewing a particular article
    this.route('view', {path: 'article/view/:article_id'});
    // for editing a particular article
    this.route('edit', {path: 'article/edit/:article_id'});
    // for creating a new article
    this.route('new');
  });
});

export default Router;
