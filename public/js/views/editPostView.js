var EditPostView = function(post){
  this.post = post;
  this.$el = this.template();
  this.$elements = {
    titleInput: this.$el.find("input[name=title]"),
    statusInput: this.$el.find("input[name=status]"),
    bodyTextArea: this.$el.find("textArea[name=body]"),
    updateButton: this.$el.find("button.updatePost"),
    deleteButton: this.$el.find("button.deletePost")
  };
  this.listen();
};

EditPostView.prototype.template = function(){
  var templateScript = $("#editPostTemplate").html();
  var template = Handlebars.compile(templateScript);
  var html = template(this.post);
  html = $(html);
  return html;
}

EditPostView.prototype.listen = function(){
  this.$elements.updateButton.on("click", function(){
    this.updatePost();
  }.bind(this));
  this.$elements.deleteButton.on("click", function(){
    this.post.destroy();
    this.$el.slideUp();
  }.bind(this));
};

EditPostView.prototype.updatePost = function(){
  var data = {
    title: this.$elements.titleInput.val(),
    status: this.$elements.statusInput.val(),
    body: this.$elements.bodyTextArea.val()
  };
  this.post.update(data)
  .then(function(updatedData){          //Can this be broken up?
    this.post = new Post(updatedData); //Sort of uncomfortable with this -- didn't need to change it in retrospect but don't think this is hurting anything
    var updatedPostView = new PostView(this.post);
    this.$el.replaceWith(updatedPostView.$el);
  }.bind(this))
}
