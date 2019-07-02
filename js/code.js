
var actualLanguage = "sp";


function Init(){

    $("#buttonLanguage").click(function() { changeLanguage(); });

}

function changeLanguage(){

    if(actualLanguage == "sp"){
        actualLanguage = "en";

        $(".en").show();
        $(".sp").hide();

    }
    else{

        actualLanguage = "sp";

        $(".sp").show();
        $(".en").hide();

    }

}