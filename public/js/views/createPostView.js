var CreatePostView = function(){
  this.$el = this.template();
  this.$elements = {
    titleInput: this.$el.find("input[name=title]"),
    bodyTextArea: this.$el.find("textArea[name=body]"),
    postButton: this.$el.find(".createPost"),
    cancelButton: this.$el.find(".cancel")
  };
  this.listen();
  this.render();
};

CreatePostView.prototype.render = function(){
  this.$el.hide();
  $(".newPost").html(this.$el);
  this.$el.slideDown();
}

CreatePostView.prototype.listen = function(){
  this.$elements.postButton.on("click", function(){
    this.createPost();
  }.bind(this))
}

CreatePostView.prototype.template = function(){
  var templateScript = $("#createPostTemplate").html();
  var template = Handlebars.compile(templateScript);
  var html = template();
  html = $(html);                            //Make html string a jquery object
  return html;
};

CreatePostView.prototype.createPost = function(){
    var data = {
      title: this.$elements.titleInput.val(),
      status:"open",
      body: this.$elements.bodyTextArea.val()
    };

    Post.create(data).then(function(newPost) {
      self.$el.find("input").val();  // clear the inputs
      self.$el.find("form").hide();  // hide the form

      var view = new PostView(newPost); // create the new artist view (renders)
      view.render();
    });

};
