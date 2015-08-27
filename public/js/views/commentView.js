var CommentView = function(comment){
  this.comment = comment;
  this.$el = $("<p>" + this.comment.body + "</p>")
};
