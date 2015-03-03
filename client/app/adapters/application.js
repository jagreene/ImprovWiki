import DS from 'ember-data';

//main rest adapter that links the client side code to the server-side api
export default DS.RESTAdapter.extend({
	namespace: 'api'
});
