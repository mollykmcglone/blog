import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      posts: this.store.findAll('post'),
      tags: this.store.findAll('tag'),
      comments: this.store.query('comment', {
        orderBy: 'date',
        limitToFirst: 5
      }),
  })
},
  foundPosts: {},
  actions:{
    save3(params){
      var newPost = this.store.createRecord('post', params);
      newPost.save();
      this.transitionTo('index');
    }
  }
});
