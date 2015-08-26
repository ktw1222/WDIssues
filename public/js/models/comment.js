var Comment = function(info){
  for (var attribute in info){
    this[attribute] = info[attribute];
  };
};

Comment.fetch = function(postId){
  var url = "/posts/" + postId + "/comments";
  var request = $.getJSON(url)
  .then(function(response){
    var comments = [];
    for (var i = 0; i < response.length; i++){
      comments.push(new Comment(response[i]))
    }
    return comments;
  })
  .fail(function(response){
    console.log("failed to fetch comments for Post with id: " +postId);
  })
  return request;
};
