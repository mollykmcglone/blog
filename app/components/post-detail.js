import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(post) {
      if (confirm('Are you sure you want to delete this post?')){
        this.sendAction('destroyPost', post);
      }
    },
    destroyComment(comment) {
      comment.destroyRecord();
      this.transitionTo('post');
    },
    // sortComments(comments.date){
    //   comments.sort(function(a,b){return a<b;})
    // }
  }
});
