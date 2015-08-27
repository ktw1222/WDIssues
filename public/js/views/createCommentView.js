var CreateCommentView = function(){
  this.$el = this.template();
  this.$elements = {
    submitButton: this.$el.find(".submitComment")
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
  }.bind(this))
}
