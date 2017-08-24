var jq  = require("jQuery");
var vue = require("vue");

jq(document).ready(function(){

  var callapi = function(verb, url, params){
    jq.ajax({
      type: verb,
      url : url,
      data: params,
      success: function(){

      },
      failure: function(){
        alert("operation failure...");
      }
    });
  };

  jq("#btn-get-all-user").on("click", function(event){
    console.log(event);


  });
});



// 次は、Vueを使ってapiコールまで
