$(document).ready(function () {
    $("#colorir").click(function () {
        $("p:even").removeClass("branco")
        $("p:even").addClass("amarelo");
    })

    $("#retiraCor").click(function () {
        $("p").addClass("branco")
    })
});