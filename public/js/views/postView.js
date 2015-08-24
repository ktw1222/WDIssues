var PostView = function(post){
  this.post = post;
  this.$el = $("<div class='post'></div>");
};

PostView.prototype.render = function(){   //Render methods for postView and commentView don't match
  var self = this;
  self.$el.html(self.postTemplate(self.post));
  var showButton = self.$el.find(".showComments");
  var editButton = self.$el.find(".editPost");
  var commentsDiv = self.$el.find(".comments");
  commentsDiv.hide();
  showButton.on("click", function(){
    self.toggleComments(commentsDiv);
  });
  editButton.on("click", function(){
    self.renderEditForm();
  })

  $(".posts").append(this.$el);
};

PostView.prototype.renderEditForm = function(){
  var self = this;
  self.$el.html(self.postEditTemplate(self.post));
  self.$el.find(".updatePost").on("click", function(){
    self.updatePost();
  })
  self.$el.find(".deletePost").on("click", function(){
    self.post.destroy()
    .then(function(){
      self.$el.slideUp();
    });
  })
};

PostView.prototype.updatePost = function(){
  var self = this;
  var data = {
    title: $("input[name=title]").val(),
    status: $("input[name=status]").val(),
    body: $("textarea").val()
  };
  self.post.update(data).then(function(){
    self.render();
  });
}

PostView.prototype.postTemplate = function(post){ //Think postTemplate shouldn't require an argument
  var html = $("<div>");
  html.append("<h3>" + post.title + "</h3>");
  html.append("<p> status: " + post.status + "</p>")
  html.append("<p>" + post.body + "</p>");
  html.append("<button class='editPost'>Edit Post</button>");
  html.append("<button class='showComments'>Show Comments</button>");
  html.append("<div class='comments'></div>");
  return (html);
};

PostView.prototype.postEditTemplate = function(post){
  var html = $("<div>");
  html.append("<input name='title' value='"+ post.title +"'><br>");
  html.append("<input name='status' value='"+ post.status +"'><br>");
  html.append("<textarea name='body'>" + post.body + "</textarea>"); //figuring how to make this a text box rather than text field
  html.append("<button class='updatePost'>Update</button>");
  html.append("<button class='deletePost'>Delete</button>");
  return (html);
}
PostView.prototype.toggleComments = function(commentsDiv){
  var self = this;
  if (commentsDiv.children().length === 0){
    self.post.fetchComments()
    .then(function(comments){
      self.appendComments(comments, commentsDiv)
    })
  }
  commentsDiv.toggle();
  self.toggleButton(commentsDiv);
};

PostView.prototype.appendComments = function(comments, commentsDiv){
  comments.forEach(function(comment){
    var commentView = new CommentView(comment);
    commentsDiv.append(commentView.render());
  })
};

PostView.prototype.toggleButton = function(commentsDiv){
  if (commentsDiv.is(":visible")){
    commentsDiv.siblings("button.showComments").text("Hide Comments");
  }
  else {
    commentsDiv.siblings("button.showComments").text("Show Comments");
  }
};
