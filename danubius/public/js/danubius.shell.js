/*
 * danubius.shell.js
 * Danilo Zekovic
 * Summer 2015
 * Makes the logic of the app going
 */

/*jslint         browser : true, continue : true,
  devel  : true, indent  : 2,    maxerr   : 50,
  newcap : true, nomen   : true, plusplus : true,
  regexp : true, sloppy  : true, vars     : false,
  white  : true
 */

  danubius.shell = (function () {
  //------------------BEGIN MODULE SCOPE VAR--------------
  
  var
    configMap = {
      main_html : String()
  + '<div class="header-pic">'
    + '<h1 class="header-pic">'
      + 'Kosarkaski Klub Danubius'
    + '</h1>'
  + '</div>'
  + '<nav class="navbar navbar-inverse navbars">'
    + '<div class="container navb" id="top-navbar">'
      + '<div class="navbar-header">'
        + '<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">'
          + '<span class="sr-only">Toggle navigation</span>'
          + '<span class="icon-bar"></span>'
          + '<span class="icon-bar"></span>'
          + '<span class="icon-bar"></span>'
          + '<span class="icon-bar"></span>'
        + '</button>'
        + '<a class="navbar-brand" href="#">KK Danubius</a>'
      + '</div>'
      + '<div id="navbar" class="navbar-collapse collapse" aria-expanded="false" styleheight: 1px;">'
        + '<ul class="nav navbar-nav">'
            + '<li><a href="#/"><i class="fa fa-home"></i>  Pocetna</a></li>'
            + '<li><a href="#/selekcije"><i class="fa fa-child"></i>  Selekcije</a></li>'
            + '<li><a href="#/takmicenja"><i class="fa fa-trophy"></i>  Takmicenja</a></li>'
            + '<li><a href="#/galerija"><i class="fa fa-camera-retro"></i>  Galerija</a></li>'
            + '<li><a href="#/treneri"><i class="fa fa-users"></i>  Treneri</a></li>'
            + '<li><a href="#/o-klubu"><i class="fa fa-shield"></i>  O Klubu</a></li>'
            + '<li><a href="#/kontant"><i class="fa fa-envelope"></i>  Kontakt</a></li>'
        + '</ul>'
      + '</div>'
    + '</div>'
  + '</nav>'
  + '<div id="main" class="container main-container" ng-view>'
    + '<div ng-view></div>'
  + '</div>'
    },
    stateMap = { $container : null },
    jqueryMap = {},
    
    hideDiv,
    setJqueryMap, initModule;
  //------------------END MODULE SCOPE VAR----------------

  //------------------BEGIN UTILITY METHODS---------------
  
  
  // hide any div in $main
  hideDiv = function () {
    jqueryMap.$match.hide();
    jqueryMap.$multchoice.hide();
    jqueryMap.$fillin.hide();
    jqueryMap.$tf.hide();
  }

  // When screen resized some classes should be added and some removed
  screenChange = function () {
    jq(window).resize(function(){

//console.log("Screen is resized <<<<<<<<<<<<<<<<<<<<<<<<<<<----- " + jq(this).width());

      /*
       * the number compared should be 768
       * but for some reason when I test it in the browser it is of by 15 always
       * that is why I lovered the number by 15
       * TODO
       */
      var size = (jq(this).width() > 768) ? true : false;
      var mobile = (jq(this).width() <= 768) ? true : false;
//console.log("Screen is resized <<<<<<<<<<<<<<<<<<<<<<<<<<< " + size + "  -----  " + mobile);
      jq('nav').toggleClass("navbars", size);
      jq('nav').toggleClass("navbar-fixed-top", mobile);

      jq('#top-navbar').toggleClass("navb", size);

      // call the function when the screan is not less then 764
      if (size) screenScroll();

    }).resize();
  }

  /* if it is not a mobile device it will be performed when screen is scroled */
  screenScroll = function () {
    /* to deal with the header and navbar movement */
    var navb = jq('.navb');
    var pos = navb.offset().top;   // get the offset distance from the top
      console.log(pos + " offset value");
    /* gets run when scrolling happens */  
    jq(window).scroll(function () {
      // if it is scroled more then offset of the navbar, set fix to true
      var fix = (jq(this).scrollTop() > pos) ? true : false;
      // if fix is true add specific class to it, and remove it if it is false
      jq('nav').toggleClass("navbar-fixed-top", fix);
      //navb.toggleClass("fix-nav", fix);  // causes the navbar to be alighned left
      jq('body').toggleClass("fix-body", fix);
    });
  }

  //------------------END UTILITY METHODS-----------------

  //------------------BEGIN DOM METHODS-------------------

  setJqueryMap = function () {
    var $container = stateMap.$container;
    jqueryMap = {
      $container     : $container,
      $main          : $container.find('.main-container'),
      $nav           : $container.find('.nav-navbar')
    }
  };  // end setJqueryMap

  //------------------END DOM METHODS---------------------
  
  //------------------BEGIN EVENT HANDLERS----------------
  
  // switch to page1, match
  pageOne = function( event ) {
    console.log("Match clicked");
    console.log(document.location.hash);
   
    hideDiv(); // hide curent content of the main div
    
    // add requested page content
    jqueryMap.$main.append(match_form( jqueryMap, visited.match ));

    visited.match = true; // when page visited change it to true
  }

  // switch to page2, fillin
  pageTwo = function ( event ) {
    console.log("Page2 clicked " + visited.page2);
    console.log(document.location.hash);
    
    hideDiv(); // hide curent content of the main div
    
    // add requested page content to the main div
    jqueryMap.$main.append(fillin_form( jqueryMap, visited.page2 ));

    visited.page2 = true; // page visited
  }

  pageThree = function ( event ) {
    console.log("Page3 clicked " + visited.page3);
    console.log(document.location.hash);
    hideDiv();   // hide curent content of the main div

    // add requested page content to the main div TODO
    jqueryMap.$main.append(multchoice_form( jqueryMap, visited.page3));

    visited.page3 = true; // page visited

  }

  pageFour = function ( event ) {
    console.log("Page4 clicked " + visited.page4);
    console.log(document.location.hash);
    hideDiv();  // hide curent content of the main div

    // add requested page content to the main div
    jqueryMap.$main.append(true_false_form( jqueryMap, visited.page4 ));

    visited.page4 = true; // page visited
  }

  
  //------------------END EVENT HANDLERS------------------
  
  //------------------BEGIN PUBLIC METHODS----------------
  
  initModule = function ( $container ) {
    stateMap.$container = $container;
    //$container.html( configMap.main_html );
    setJqueryMap();

    screenChange();

   
    
  };
  

  return { initModule : initModule };
  //------------------END PUBLIC METHODS------------------

}());
