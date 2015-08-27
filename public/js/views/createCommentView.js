var CreateCommentView = function(postView){
  this.postView = postView;
  console.log(postView);
  this.$el = this.template();
  this.$elements = {
    textArea: this.$el.find("textArea"),
    submitButton: this.$el.find(".submitComment"),
  };
  this.listen();
};
CreateCommentView.prototype.template = function(){
  var templateScript = $("#createCommentTemplate").html();
  var template = Handlebars.compile(templateScript);
  var html = template();
  html = $(html);                            //Make html string a jquery object
  return html
};
CreateCommentView.prototype.listen = function(){
  this.$elements.submitButton.on("click", function(event){
    console.log("Listening from createCommentView.js");
    this.createComment();
  }.bind(this))
};

CreateCommentView.prototype.createComment = function(){

}
