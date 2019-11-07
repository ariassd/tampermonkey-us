// ==UserScript==
// @name         Postman helper
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Luis Arias
// @match        https://luisarias.postman.co/*
// @require http://code.jquery.com/jquery-3.4.1.min.js
// ==/UserScript==


$( document ).ready(function() {
    console.log( "ready!" );

    setTimeout(function(){
        console.log("done!");
        $("span.docs-desc-comments").remove();
        $(".docs-collection-info").append("<button class=\"la-helper\">Run Helper</button>");
        $("body").append("<textarea class='la-output' style='width:100%;' rows='1000'></textarea>")
        $(".la-helper").on("click", function() {
            var whole_result = "";
            $("div.docs-item").each(function() {
                var result = '';
                result = ("<summary>");
                $(this).find("div.docs-desc > div").each(function(item){
                    result += "\n" + ($(this).text());
                });
                result += "\n" + "</summary>";
                result += "\n" + ("<example>");
                result += "\n" + ("<code>");
                var ex = $(this).find("div.docs-example > div.docs-example__request > div.pm-snippet-container").text();
                result += "\n" + ("///" + ex)
                result += "\n" + ("</code>");
                result += "\n" + ("</example>");

                result += "\n" + ("<returns>");
                result += "\n" + ("<code>");
                var ex = $(this).find("div.docs-example > div.docs-example__response > div.pm-snippet-container").text();
                result += "\n" + (ex)
                result += "\n" + ("</code>")
                result += "\n" + ("</returns>");
                result += "\n" + ("---------------------------------------------------------")
                console.log(result)
                whole_result += "\n" + result;
            });
            $(".la-output").val(whole_result.replace(/\n/g, "\n/// "));
        });
    }, 2000);

})
