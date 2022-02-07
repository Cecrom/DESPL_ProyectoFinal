var elements = 0;
var total = 0;
var conEnvio = 0;

$(document).ready(function () {

    // Preparación de la web
    $(".producto_rebajado").css("text-decoration", "line-through");
    $(".producto_rebajado").parent().append("<span> 49,99</span>€");

    // Conteo de los items del carrito para ponerlos en pantalla y cálculo de precios

    $(".li_productos").each(function () {
        var precio = parseFloat($(this).find(".cantidad_producto span").text()) * parseFloat($(this).find(".precio_producto span:not([class*='producto_rebajado'])").text());
        total = total + precio;
        elements++;
        $("#shopping-cart span").text(elements);
        $("#precioProductos").text(total.toFixed(2));
        var envio = parseFloat($("#precioEnvio").text());
        conEnvio = total + envio;
        $("#precioTotal").text(conEnvio.toFixed(2));
    });


    // Borrar items de la lista y actualizar precios

    $(".delete_item").click(function () {
        $(this).parent().remove();
        elements = 0;
        total = 0;
        if ($(".li_productos").length) {
            $(".li_productos").each(function () {
                var precio = parseFloat($(this).find(".cantidad_producto span").text()) * parseFloat($(this).find(".precio_producto span:not([class*='producto_rebajado'])").text());
                total = total + precio;
                elements++;
                $("#shopping-cart span").text(elements);
                $("#precioProductos").text(total.toFixed(2));
                var envio = parseFloat($("#precioEnvio").text());
                conEnvio = total + envio;
                $("#precioTotal").text(conEnvio.toFixed(2));
            });
        } else {
            $("#divProductos").empty();
            $("#divProductos").html("<p>Su carrito de la compra está vacío. Por favor, añada manuales para echar unas partidas de rol.</p>");
            $("#shopping-cart span").text(0);
        }
    });

    // Scroll Top

    $(document).scroll(function () {

        if ($(this).scrollTop() > 1) {
            $('#totop').fadeIn(500);

        } else {
            $('#totop').fadeOut(500);
        }
    });

    $('#totop').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 600);
    });
});