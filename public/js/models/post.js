var Post = function(info){
  for (var attribute in info){
    this[attribute] = info[attribute];
  };
};

Post.fetch = function(){
  var request = $.getJSON("/posts")
  .then(function(response){
    var posts = [];
    for (var i = 0; i < response.length; i++){
      posts.push(new Post(response[i]));
    };
    return posts;
  })
  .fail(function(response){
    console.log("failed to fetch posts");
  });
  return request;
};

Post.create = function(postData){
  var self = this;
  var url = "/posts";
  var request = $.ajax({
    url: url,
    method: "post",
    data: JSON.stringify(postData),
    contentType: "application/json"
  })
  .then(function(postData){
    return new Post(postData);   //Maybe include some error handling
  })
  return request;
}

Post.prototype.fetchComments = function(){
  var url = "/posts/" + this.id + "/comments";
  var request = $.getJSON(url)
  .then(function(response){
    var comments = [];
    for (var i = 0; i < response.length; i++){
      comments.push(new Comment(response[i]))
    }
    return comments;
  })
  .fail(function(response){
    console.log("failed to fetch comments");
  })
  return request;
}
