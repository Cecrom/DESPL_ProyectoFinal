$(document).ready(function () {
    var elements = 0;

    // Conteo de los items del carrito para ponerlos en pantalla

    $(".li_productos").each(function () {
        elements++;
        $("#shopping-cart span").text(elements);
    });

    $(".delete_item").click(function () {
        $(this).parent().parent().parent().parent().remove();
        elements--;
        $("#shopping-cart span").text(elements);
    });
});