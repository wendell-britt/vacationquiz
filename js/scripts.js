
var $spiderfarm = 0
var $mordor = 0
var $hell = 0
var $darkplace = 0


// var foodSelector = ($("input:radio[name=food]:checked").val());
var foodSelector
var climateSelector = ($("input:radio[name=climate]:checked").val());
var funSelector = ($("input:radio[name=fun]:checked").val());
var sleepSelector = ($("input:radio[name=sleep]:checked").val());
var result

$(document).ready(function() {

$("form#quiz").submit(function(event) {
  event.preventDefault();



  function helper() {
    if((foodSelector || climateSelector || funSelector || sleepSelector) === "mordor") {
      $mordor++;
    } else if ((foodSelector || climateSelector || funSelector || sleepSelector) ==="spiderfarm") {
      $spiderfarm++;
    } else if ((foodSelector || climateSelector || funSelector || sleepSelector) ==="hell") {
      $hell++;
    } else if ((foodSelector || climateSelector || funSelector || sleepSelector) ==="darkplace") {
      $darkplace++;
    }
  }

  function results() {
    // helper();
    if ($mordor > ($spiderfarm && $hell && $darkplace)) {
      $("#mordor").show();
    }
    else if ($spiderfarm > ($mordor && $hell && darkplace)) {
      $("#spiderfarm").show();
    }
    else if ($darkplace > ($mordor && $hell && $spiderfarm)) {
      $("#darkplace").show();
    }
    else if ($hell > ($mordor && $darkplace && $spiderfarm)) {
      $("#hell").show();
    }

  }
    // } else {
    //   $("#mordor").show();
    //
    // }
results();
    })
  });
