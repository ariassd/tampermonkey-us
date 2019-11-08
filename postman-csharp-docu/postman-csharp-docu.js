// ==UserScript==
// @name         Postman to CSharp documentation
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Convert postman documentation to C# comments
// @author       Luis Arias
// @updateURL https://github.com/ariassd/tampermonkey-us/postman-csharp-docu/postman-csharp-docu.js
// @downloadURL https://github.com/ariassd/tampermonkey-us/postman-csharp-docu/postman-csharp-docu.js
// @match        https://*.postman.co/*
// @require http://code.jquery.com/jquery-3.4.1.min.js
// ==/UserScript==


$( document ).ready(function() {


    setTimeout(function(){
        console.log("done!");
        $(".pm-link .docs-desc-comments").off()
        $("span.docs-desc-comments").text("").append("<span class=\"la-helper\" style=\"color:red\">View C# docu</span>");
        $(".docs-collection-info").append("<button class=\"la-helper\">Run Helper</button>");
        //$(".div.docs-item").append("<button class=\"la-helper\">View C# documentation</button>");
        $("body").append("<textarea class='la-output' style='width:100%;' rows='1000'></textarea>")
        $(".la-helper").on("click", function() {
            var whole_result = "";
            $(".pm-popover").remove();
            $(this).closest("div.docs-item").each(function() {
                var result = '';
                result = ("<summary>");
                var eCloned = $(this).clone();
                $(eCloned).find("span.docs-desc-comments").remove()
                $(eCloned).find("div.docs-desc > div").each(function(item){
                    result += "\n" + ($(this).text());
                });
                result += "\n" + "</summary>";
                result += "\n" + ("<example>");
                result += "\n" + ("<code>");
                var ex = $(this).find("div.docs-example > div.docs-example__request > div.pm-snippet-container").text();
                result += "\n" + (ex)
                result += "\n" + ("</code>");
                result += "\n" + ("</example>");

                result += "\n" + ("<returns>");
                result += "\n" + ("<code>");
                var re = $(this).find("div.docs-example > div.docs-example__response > div.pm-snippet-container").text();
                result += "\n" + (re)
                result += "\n" + ("</code>")
                result += "\n" + ("</returns>");
                //result += "\n" + ("---------------------------------------------------------")
                //console.log(result)
                whole_result += "\n" + result;
            });
            var nModal = $(modal)
            nModal.find(".modal-content").text(whole_result.replace(/\n/g, "\n/// "));
            nModal.find(".la-close").on("click", function(){$("div.ReactModalPortal").text("")});
            $("div.ReactModalPortal").text("").append(nModal);
            //alert(whole_result.replace(/\n/g, "\n/// "));
            $(".la-output").val(whole_result.replace(/\n/g, "\n/// "));
            $(".pm-popover").remove();
        });
    }, 2000);

})

var modal = `<div class="ReactModal__Overlay ReactModal__Overlay--after-open pm-modal-background" aria-modal="true">
<div class="ReactModal__Content ReactModal__Content--after-open pm-modal" tabindex="-1" aria-label="pm-modal">
<div class="pm-snippet-modal">
<div class="pm-snippet-modal-header">
<div class="pm-snippet-modal-title">Code</div>
<button class="pm-btn pm-btn-alternate pm-btn-sm pm-btn-icon pm-snippet-modal-close la-close"><i class="pm-icon pm-icon-sm pm-icon-secondary pm-btn__default-icon">
<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3.7336 2.297c-.3965-.3966-1.0394-.3966-1.436 0-.3966.3965-.3966 1.0394 0 1.436l4.2662 4.2662-4.2662 4.2662c-.3968.3968-.3968 1.0402 0 1.437.3968.3968 1.0402.3968 1.437 0l4.2662-4.2662 4.2655 4.2655c.3966.3965 1.0395.3965 1.4361 0 .3965-.3966.3965-1.0395 0-1.436L9.4369 8.0001l4.2655-4.2655c.3968-.3968.3968-1.0402 0-1.437-.3968-.3968-1.0402-.3968-1.437 0L7.9999 6.5631 3.7336 2.297z" fill="#A9A9A9"></path></svg>
</i></button>
<div class="pm-snippet-actions pm-snippet-modal-actions">

</div></div><div class="pm-snippet-modal-body"><div class="pm-snippet pm-snippet-wrap"><pre class="pm-snippet-body">
<code class="modal-content hljs json javascript">
</code></pre></div></div></div></div></div>`;
