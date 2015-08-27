$(document).ready(function(){
  console.log("jquery works");
  Post.fetch().then(function(posts){
    posts.forEach(function(post){
      var view = new PostView(post);
    })
  })
  $('button.createPostView').on("click", function(){
    var createPostView = new CreatePostView();
    
  })
});
