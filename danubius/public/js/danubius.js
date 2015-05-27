/*
 * danubius.js
 * Danilo Zekovic
 * Summer 2015
 */

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, danubius */

var danubius = (function () {
  var initModule = function ( $container ) {
    danubius.shell.initModule( $container );
  }

  return {initModule: initModule};
}());
