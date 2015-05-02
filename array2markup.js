function markup(value, index)
{
var open = {
0: "<time class=|published| datetime=|value|>value",
1: "<h1 class=|entry-title|>value",
2: "<p class=|entry-summary|>value",
3: "<article class=|hentry|>",
4: "<a class=|bookmark| href=|value| rel=|bookmark|>"
};

var close = {
0: "</time>",
1: "</h1>",
2: "</p>",
3: "</article>",
4: "</a>"
};

if (index)
  {
  return open[index].replace("|","\u0022","g").replace("value",value,"g") + close[index];
  }
else
  {
  return "";
  }
};

var foo = "2014, Beyond the Lights, Gugu Mbatha-Raw, Gina Prince-Bythewood, http://www.allmovie.com/movie/beyond-the-lights-v592866".split(", ");
var bar = foo.map(markup)
