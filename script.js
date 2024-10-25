$(document).ready(function() {
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    var isFirstClick = true;
    
    envelope.click(function() {
        if (isFirstClick) {
            open();
            isFirstClick = false;
            
            // Agregamos un temporizador para abrir el PDF después de la animación
            setTimeout(function() {
                // Aquí puedes poner la URL de tu PDF
                window.open('https://online.fliphtml5.com/jyyfo/xwuv/', '_blank');
            }, 1500); // 1500ms = 1.5 segundos (ajusta este tiempo según la duración de tu animación)
        }
    });
    
    btn_open.click(function() {
        if (isFirstClick) {
            open();
            isFirstClick = false;
            
            setTimeout(function() {
                window.open('https://online.fliphtml5.com/jyyfo/xwuv/', '_blank');
            }, 1500);
        }
    });
    
    btn_reset.click(function() {
        close();
        isFirstClick = true; // Reiniciamos el estado para permitir abrir de nuevo
    });

    function open() {
        envelope.addClass("open")
               .removeClass("close");
    }
    
    function close() {
        envelope.addClass("close")
               .removeClass("open");
    }
});