var markup = function(index, value)
  {
  var open = {
  0: "<time class=|published| datetime=|value|>value",
  1: "<h1 class=|entry-title|><a class=|bookmark| href=|http://www.allmovie.com/movie/value:/| rel=|bookmark|>value",
  2: "<p class=|entry-summary|>value",
  3: "<article class=|hentry|"
  };
  
  var close = {
  0: "</time>",
  1: "</a> </h1>",
  2: "</p>",
  3: "</article>"
  };
  
  return String().concat(open[index].replace("|","\u0022","g").replace("value",value,"g") , close[index]); 
  }
  
var transform = function(value, index, source){return markup(index,value)}

var foo = "2014, Beyond the Lights, Gugu Mbatha-Raw, Gina Prince-Bythewood, http://www.allmovie.com/movie/beyond-the-lights-v592866".split(",");

var bar = foo.map(transform)


