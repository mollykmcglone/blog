import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      posts: this.store.findAll('post'),
      comments: this.store.query('comment', {
        orderBy: 'date',
        limitToFirst: 5
      })
  })
},

  actions:{
    save3(params){
      var newPost = this.store.createRecord('post', params);
      newPost.save();
      this.transitionTo('index');
    }
    // sortComments(comments){
    //    return comments.sort(function(a,b){ return a.date<b.date;})
    // }
  }
});
