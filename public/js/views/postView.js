var PostView = function(post){
  this.post = post;
  this.$el = this.postTemplate();
  this.$elements = {
    editPostButton: this.$el.find(".editPost"),
    showCommentsButton: this.$el.find(".showComments"),
    commentsDiv: this.$el.find(".comments")
  };
  this.listen();
  this.render();
};

PostView.prototype.postTemplate = function(){
  var templateScript = $("#postTemplate").html();
  var template = Handlebars.compile(templateScript);
  var html = template(this.post);
  html = $(html);                            //Make html string a jquery object
  return html
};

PostView.prototype.render = function(){   //Render methods for postView and commentView don't match
  $(".posts").append(this.$el);
};

PostView.prototype.listen = function(){
  this.$elements.editPostButton.on("click", function(event){
    console.log("edit post listening");
  });
  this.$elements.showCommentsButton.on("click", function(event){
    this.$elements.commentsDiv.is(':empty') ? this.populateCommentsDiv() : this.toggleCommentsDiv()
  }.bind(this));
};

PostView.prototype.populateCommentsDiv = function(){
  console.log("preparing to populate comments div");
  this.post.fetchComments()
  .then(function(comments){
    comments.forEach(function(comment){
      var commentView = new CommentView(comment);
      this.$elements.commentsDiv.append(commentView.$el);
    }.bind(this));
    var createCommentView = new CreateCommentView();
    this.$elements.commentsDiv.hide();
    this.$elements.commentsDiv.append(createCommentView.$el);
    this.$elements.commentsDiv.slideDown();
    this.$elements.showCommentsButton.text("Hide Comments")
  }.bind(this));
}

PostView.prototype.toggleCommentsDiv = function(){
  this.$elements.commentsDiv.is(':hidden') ? this.$elements.showCommentsButton.text("Hide Comments") : this.$elements.showCommentsButton.text("Show Comments");
  this.$elements.commentsDiv.slideToggle()
}

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


PostView.prototype.postEditTemplate = function(post){
  var templateScript = $('#postEditTemplate').html();
  var template = Handlebars.compile(templateScript);
  var html = template(post);
  return html
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
