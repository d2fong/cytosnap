// prep the phantomjs page and expose globals that we can reference from node

var cytoscape = window.cytoscape = require('cytoscape');
var coseBilkent = require('cytoscape-cose-bilkent');

coseBilkent( cytoscape );

window.addEventListener('DOMContentLoaded', function(){
  var cy = window.cy = cytoscape({
    container: document.getElementById('cy')
  });
});
