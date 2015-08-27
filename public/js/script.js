$(document).ready(function(){
  console.log("jquery works");
  Post.fetch().then(function(posts){
    posts.forEach(function(post){
      var view = new PostView(post);
      $(".posts").append(view.$el);
    })
  })
  
  $('button.createPostView').on("click", function(){
    var createPostView = new CreatePostView();
    createPostView.$el.hide();
    $(".newPost").html(createPostView.$el);
    createPostView.$el.slideDown();

  })
});
