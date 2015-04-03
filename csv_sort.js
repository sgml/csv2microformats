var foo = ["Malcolm X", "Denzel Washington", 1990, "Spike Lee"];
var bar = foo.slice(1);
bar.push(foo[0])
var baz = bar.slice(1)
baz.push(bar[0])
var rss = JSON.stringify(bar, toRSS)
