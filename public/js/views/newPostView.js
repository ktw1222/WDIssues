var newPostView = function(post){
  var self = this;
  self.$el = $(".newPost");

  var templateScript = $("#newPostTemplate").html();
  var template = Handlebars.compile(templateScript);
  var html = template();
  self.$el.append(html);


  var showFormButton    = self.$el.find(".addPost");
  var form = self.$el.find("form");
  form.hide();
  var submitFormButton  = self.$el.find(".createPost");

  showFormButton.on("click", function() {
    form.toggle();
  });

  submitFormButton.on("click", function(event) {
    event.preventDefault();
    self.createPost();
  });

};

newPostView.prototype.createPost=function(){

  var self = this;
    var data = {  title:     self.$el.find('input[name=title]').val(),
                  body: self.$el.find('textarea').val(),
                  status:"open"
                };

    Post.create(data).then(function(newPost) {
      self.$el.find("input").val();  // clear the inputs
      self.$el.find("form").hide();  // hide the form

      var view = new PostView(newPost); // create the new artist view (renders)
      view.render();
    });

};
