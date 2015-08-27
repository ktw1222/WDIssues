var CommentView = function(comment){
  this.comment = comment;
  this.$el = $("<p>" + this.comment.body + (currentUser && currentUser.id === comment.userId ? "<button>X</button>" : "") +"</p>");
  this.$el.append("<p><small> by: " + this.comment.author + "</small></p>")
  this.listen();
};

CommentView.prototype.listen = function(){
  this.$el.find("button").on('click', function(){
    console.log('listening');
    this.comment.destroy();
    this.$el.slideUp();
  }.bind(this))
}
