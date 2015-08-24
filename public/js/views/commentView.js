var CommentView = function(comment){
  this.comment = comment;
}

CommentView.prototype = {
  render: function(){
    var el = $("<p>" + this.comment.body + "</p>");
    return(el)
  }
}
