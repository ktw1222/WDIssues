$(document).ready(function(){
  console.log("jquery works");
  // ajax request to store currentUser as global variable
   $.getJSON("/currentUserData", function(userData) {
      currentUser = userData[0];
      return currentUser;
  }).then(function(){
    console.log(currentUser);
    Post.fetch().then(function(posts){
      posts.forEach(function(post){
        var view = new PostView(post);
        $(".posts").append(view.$el);
      })
    })
    if (!currentUser) $('button.createPostView').hide();
  })



  $('button.createPostView').on("click", function(){
    var createPostView = new CreatePostView();
    createPostView.$el.hide();
    $(".newPost").html(createPostView.$el);
    createPostView.$el.slideDown();
  })

});
