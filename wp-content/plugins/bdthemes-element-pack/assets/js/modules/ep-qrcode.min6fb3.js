!function(e,n){"use strict";var t=function(e,n){var t=e.find(".bdt-qrcode"),d=e.find(".bdt-qrcode-image");if(t.length){var o=t.data("settings");o.image=d[0],n(t).qrcode(o)}};jQuery(window).on("elementor/frontend/init",(function(){elementorFrontend.hooks.addAction("frontend/element_ready/bdt-qrcode.default",t)}))}(jQuery,window.elementorFrontend);