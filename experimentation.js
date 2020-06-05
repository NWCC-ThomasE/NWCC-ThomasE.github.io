/* Navbar Section */ {
  function navbarTabAdd() {
    $( "#navbar" ).children(1).append( "<li><a>New Tab</a></li>" );
  }

  function navbarTabRemove() {
    $( "#navbar" ).children(1).children(4).filter(":contains('New Tab')").last().remove();
  }

  function navbarObliterate() {
    $( "#navbar").remove();
  }

  function navbarRevive() {
  if ( $( "#navbar" ).length < 1 ) {
    $( "body" ).prepend('<nav class="navigation" id="navbar">');
    $( "#navbar" ).append('<ul>');
    $( "#navbar").children(1).append('<li><a href="index.html">Home</a></li>');
    $( "#navbar").children(1).append('<li><a href="work.html">Work</a></li>');
    $( "#navbar").children(1).append('<li><a href="about.html">About</a></li>');
    $( "#navbar").children(1).append('<li><a href="experimentation.html">Experimentation</a></li>');
  }
}
}

/* Box Section */ {
  function boxMakeRed() {
    $( "#box" ).css("background-color", "red");
  }

  function boxMakeBlue() {
    $( "#box" ).css("background-color", "blue");
  }

  function boxMakeGreen() {
    $( "#box" ).css("background-color", "green");
  }

  function boxMakeYellow() {
    $( "#box" ).css("background-color", "yellow");
  }

  function boxDestroy() {
    $( "#box" ).remove();
  }

  function boxRevive() {
  if ( $( "#box" ).length < 1) {
    $( '<div class="box" id="box"></div>' ).insertAfter(" #boxHeading ");
  }
}
}