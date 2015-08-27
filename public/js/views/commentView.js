var CommentView = function(comment){
  this.comment = comment;
  this.$el = $("<p>" + this.comment.body + "<button>X</button></p>");
  this.listen();
};

CommentView.prototype.listen = function(){
  this.$el.find("button").on('click', function(){
    console.log('listening');
    this.comment.destroy();
    this.$el.slideUp();
  }.bind(this))
}
