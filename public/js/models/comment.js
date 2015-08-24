var Comment = function(info){
  for (var attribute in info){
    this[attribute] = info[attribute];
  };
};
