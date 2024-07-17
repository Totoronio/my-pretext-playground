var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  My Website   copyright  "
},
{
  "id": "sec-section-name",
  "level": "1",
  "url": "sec-section-name.html",
  "type": "Section",
  "number": "1.1",
  "title": "Section Title",
  "body": " Section Title  Text of section.   Two Sage plots on one set of axes   f(x) = x^4 g(x) = -x^4 up = plot(f, (x, -1.5, 1.5), color='blue', thickness=2) down = plot(g, (x, -1.5, 1.5), color='red', thickness=2) up + down    "
},
{
  "id": "figure-sage-double-plot-2",
  "level": "2",
  "url": "sec-section-name.html#figure-sage-double-plot-2",
  "type": "Figure",
  "number": "1.1.1",
  "title": "",
  "body": " Two Sage plots on one set of axes   f(x) = x^4 g(x) = -x^4 up = plot(f, (x, -1.5, 1.5), color='blue', thickness=2) down = plot(g, (x, -1.5, 1.5), color='red', thickness=2) up + down   "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
