
var $spiderfarm = 0
var $mordor = 0
var $hell = 0
var $darkplace = 0


// var foodSelector = ($("input:radio[name=food]:checked").val());

$(document).ready(function() {

$("form#quiz").submit(function(event) {
  event.preventDefault();



  function helperFood() {
    if($("input:radio[name=food]:checked").val() === "mordor") {
      $mordor++;
    } else if ($("input:radio[name=food]:checked").val() === "spiderfarm") {
      $spiderfarm++;
    } else if ($("input:radio[name=food]:checked").val() === "hell") {
      $hell++;
    } else if ($("input:radio[name=food]:checked").val() === "darkplace") {
      $darkplace++;
    }
  }
  function helperClimate() {
    if($("input:radio[name=climate]:checked").val() === "mordor") {
      $mordor++;
    } else if ($("input:radio[name=climate]:checked").val() === "spiderfarm") {
      $spiderfarm++;
    } else if ($("input:radio[name=climate]:checked").val() === "hell") {
      $hell++;
    } else if ($("input:radio[name=climate]:checked").val() === "darkplace") {
      $darkplace++;
    }
  }

  function helperSleep() {
    if($("input:radio[name=sleep]:checked").val() === "mordor") {
      $mordor++;
    } else if ($("input:radio[name=sleep]:checked").val() === "spiderfarm") {
      $spiderfarm++;
    } else if ($("input:radio[name=sleep]:checked").val() === "hell") {
      $hell++;
    } else if ($("input:radio[name=sleep]:checked").val() === "darkplace") {
      $darkplace++;
    }
  }
  function helperFun() {
    if($("input:radio[name=fun]:checked").val() === "mordor") {
      $mordor++;
    } else if ($("input:radio[name=fun]:checked").val() === "spiderfarm") {
      $spiderfarm++;
    } else if ($("input:radio[name=fun]:checked").val() === "hell") {
      $hell++;
    } else if ($("input:radio[name=fun]:checked").val() === "darkplace") {
      $darkplace++;
    }
  }
  function results() {
    helperFood();
    helperClimate();
    helperSleep();
    helperFun();

    if ($mordor > ($spiderfarm && $hell && $darkplace)) {
      $("#mordor").show();
      $("form#quiz").hide();
    }
    else if ($spiderfarm > ($mordor && $hell && darkplace)) {
      $("#spiderfarm").show();
      $("form#quiz").hide();
    }
    else if ($darkplace > ($mordor && $hell && $spiderfarm)) {
      $("#darkplace").show();
      $("form#quiz").hide();
    }
    else if ($hell > ($mordor && $darkplace && $spiderfarm)) {
      $("#hell").show();
      $("form#quiz").hide();
    }

  }
    // } else {
    //   $("#mordor").show();
    //
    // }
    results();
    })
  });
