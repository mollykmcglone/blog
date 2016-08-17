import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions:{
    postFormShow(){
      this.set('addNewPost', true);
    },

    save1(){
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        body: this.get('body'),
        date: this.get('date'),
        image: this.get('image'),
      };
      this.set('addNewPost', false);
      this.sendAction('save2', params);
    }
  }
});
