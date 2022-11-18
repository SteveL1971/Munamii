var cardList = [
    { type: "cupcake", title: "Caja 12 cupcakes", price: 20.00 , url: "assets/12_cupcakes_1.jpg", url2: "assets/cupcakes_2.jpg", url3: "assets/cupcakes_3.jpg", url4:"assets/cupcakes_4.jpg", url5: "assets/cupcakes_5.jpg", url6: "assets/cupcakes_6.jpg", details: "¡Caja de 12 deliciosos cupcakes rellenos! Escoge solo tres sabores. En caso de escoger más de tres se colocarán a disponibilidad."},
    { type: "cupcake", title: "Caja 4 cupcakes", price: 12.00 , url: "assets/4_cupcakes_1.jpg", url2: "assets/cupcakes_2.jpg", url3: "assets/cupcakes_3.jpg", url4:"assets/cupcakes_4.jpg", url5: "assets/cupcakes_5.jpg", url6: "assets/cupcakes_6.jpg", details: "¡Caja de 4 deliciosos cupcakes rellenos! Escoge solo dos sabores. En caso de escoger más de dos se colocarán a disponibilidad."},
    { type: "cupcake", title: "Caja 6 cupcakes", price: 15.00 , url: "assets/6_cupcakes_1.jpg", url2: "assets/cupcakes_2.jpg", url3: "assets/cupcakes_3.jpg", url4:"assets/cupcakes_4.jpg", url5: "assets/cupcakes_5.jpg", url6: "assets/cupcakes_6.jpg", details: "¡Caja de 6 deliciosos cupcakes rellenos! Escoge solo dos sabores. En caso de escoger más de dos se colocarán a disponibilidad."},
    { type: "cupcake", title: "Caja 12 cupcakes", price: 20.00 , url: "assets/12_cupcakes_1.jpg", url2: "assets/cupcakes_2.jpg", url3: "assets/cupcakes_3.jpg", url4:"assets/cupcakes_4.jpg", url5: "assets/cupcakes_5.jpg", url6: "assets/cupcakes_6.jpg", details: "¡Caja de 12 deliciosos cupcakes rellenos! Escoge solo tres sabores. En caso de escoger más de tres se colocarán a disponibilidad."},
    { type: "cupcake", title: "Chocolate chip cupcakes", price: 3.49 , url: "assets/cupcakes_3.jpg", url2: "assets/cupcakes_2.jpg", url3: "assets/cupcakes_3.jpg", url4:"assets/cupcakes_4.jpg", url5: "assets/cupcakes_5.jpg", url6: "assets/cupcakes_6.jpg", details: "¡Caja de 4 deliciosos cupcakes rellenos! Escoge solo dos sabores. En caso de escoger más de dos se colocarán a disponibilidad."},
    { type: "cupcake", title: "Caramel cupcakes", price: 3.99 , url: "assets/cupcakes_4.jpg", url2: "assets/cupcakes_2.jpg", url3: "assets/cupcakes_3.jpg", url4:"assets/cupcakes_4.jpg", url5: "assets/cupcakes_5.jpg", url6: "assets/cupcakes_6.jpg", details: "¡Caja de 6 deliciosos cupcakes rellenos! Escoge solo dos sabores. En caso de escoger más de dos se colocarán a disponibilidad."},
    { type: "cupcake", title: "Chocolate cupcakes", price: 3.99 , url: "assets/cupcakes_5.jpg", url2: "assets/cupcakes_2.jpg", url3: "assets/cupcakes_3.jpg", url4:"assets/cupcakes_4.jpg", url5: "assets/cupcakes_5.jpg", url6: "assets/cupcakes_6.jpg", details: "¡Caja de 4 deliciosos cupcakes rellenos! Escoge solo dos sabores. En caso de escoger más de dos se colocarán a disponibilidad."},
    { type: "cupcake", title: "Strawberry cupcakes", price: 3.99 , url: "assets/cupcakes_6.jpg", url2: "assets/cupcakes_2.jpg", url3: "assets/cupcakes_3.jpg", url4:"assets/cupcakes_4.jpg", url5: "assets/cupcakes_5.jpg", url6: "assets/cupcakes_6.jpg", details: "¡Caja de 6 deliciosos cupcakes rellenos! Escoge solo dos sabores. En caso de escoger más de dos se colocarán a disponibilidad."},
    { type: "torta", title: "Month Baby Cake", price: 25.00 , url: "assets/month_baby_1.jpg", url2: "assets/month_baby_2.png", url3: "", url4:"", url5: "", url6: "", details: "Torta en forma de numero, decorada con todos estos riquisimos chocolates, macarrons, suspiros y mas detalles. Rellena con el sabor que elijas. Perfecto para celebrar el cumple mes de tu bebe. La decoracion puede ser para niño o niña. Los colores cambian a rosado o celeste."},
    { type: "torta", title: "Cookie Monster Cake", price: 35.00 , url: "assets/cookie_monster_1.png", url2: "", url3: "", url4:"", url5: "", url6: "", details: "Para los Fans del Come Gelleta o Cookie Monster! Deliciosa torta rellena decorada con estos detalles y galletas. (Cupcakes por separado)"},
    { type: "torta", title: "Ericka", price: 30.00 , url: "assets/ericka_1.jpg", url2: "", url3: "", url4:"", url5: "", url6: "", details: "Si te gustan los frutos rojos esta torta! te encantara. Deliciosa decorada con frutillas y frutos rojos. Elige el sabor y relleno."},
    { type: "torta", title: "Torta Belén", price: 25.00 , url: "assets/torta_belen_1.jpg", url2: "", url3: "", url4:"", url5: "", url6: "", details: "Deliciosa torta decorada con rosas y flores en tonos pasteles rosa y blanco. Puedes escoger el sabor que gustes. Colores y tipo de flores pueden cambiar a disponibilidad."},
    { type: "torta", title: "Torta Gabriela", price: 35.00 , url: "assets/torta_gabriela_1.png", url2: "", url3: "", url4:"", url5: "", url6: "", details: "Deliciosa torta decorada con variedad de rosas y flores en tonos pasteles y fuertes. Puedes escoger el sabor que gustes. Colores y tipo de flores pueden cambiar a disponibilidad."},
    { type: "torta", title: "Torta Jack", price: 35.00 , url: "assets/torta_jack_1.png", url2: "", url3: "", url4:"", url5: "", url6: "", details: "Deliciosa Torta con decoracion de Jack Daniels con mensaje personalizado de Cumpleañero. Puedes escoger el Licor que gustes.!"},
    { type: "torta", title: "Torta Flork San Valentín", price: 20.00 , url: "assets/torta_flork_san_valentin_1.jpg", url2: "assets/torta_flork_san_valentin_2.jpg", url3: "assets/torta_flork_san_valentin_3.jpg", url4:"assets/torta_flork_san_valentin_4.jpg", url5: "assets/torta_flork_san_valentin_5.jpg", url6: "", details: "Para este San Valentín: TORTA ESTILO FlORK! Decorado con tus muñequitos y frase favoritos. Guardada en caja."},
    { type: "torta", title: "Torta Kitty Cat", price: 35.00 , url: "assets/torta_kitty_cat_1.png", url2: "", url3: "", url4:"", url5: "", url6: "", details: "Para todas las nenas que aman los gatitos! Hermosa torta en forma de gatito. Quedará muy linda en su mesa de dulces. Decorada con colores pasteles."},
    { type: "torta", title: "Verónica", price: 35.00 , url: "assets/veronica_1.png", url2: "", url3: "", url4:"", url5: "", url6: "", details: "Para todas las nenas que aman los gatitos! Hermosa torta en forma de gatito. Quedará muy linda en su mesa de dulces. Decorada con colores pasteles."},
    { type: "torta", title: "Elisa", price: 35.00 , url: "assets/elisa_1.png", url2: "", url3: "", url4:"", url5: "", url6: "", details: "Hermosa torta estilo Naked con baño de chocolate blanco y azucar dorada comestible. Decoracion de flores en tonos rosados y fuxias. Viene con suspiros y macarrons. Tipo de flores y colores pueden cambiar de acuerdo a disponibilidad."},
    { type: "torta", title: "Party Chocolate Cake", price: 35.00 , url: "assets/party_chocolate_1.jpg", url2: "assets/party_chocolate_2.jpg", url3: "", url4:"", url5: "", url6: "", details: ""},
    { type: "torta", title: "Grinch Christmas Cake", price: 25.00 , url: "assets/grinch_1.jpg", url2: "", url3: "", url4:"", url5: "", url6: "", details: "Si eres Fan de Navidad y del Grinch! esta torta te encantara! Selecciona tu sabor favorito."},
];

loadMyCards();

function loadMyCards(){

    let result = "";
    let rnd = Math.floor(Math.random() * cardList.length);
    if(cardList[rnd].url2=="") cardList[rnd].url2 = cardList[rnd].url;
    result = cardHTML(rnd, result);        
    document.getElementById("random-cake").innerHTML = result;

    result = "";
    for(let i=0; i<cardList.length; i++){
        if(cardList[i].url2=="") cardList[i].url2 = cardList[i].url;
        if(cardList[i].type=="cupcake"){
            result = cardHTML(i, result);
        }
    }
    document.getElementById("cupcake-cards").innerHTML = result;
    
    result = "";
    for(let i=0; i<cardList.length; i++){
        if(cardList[i].type=="torta"){
            if(cardList[i].url2=="") cardList[i].url2 = cardList[i].url;
            result = cardHTML(i, result);
        }
    }
    document.getElementById("torta-cards").innerHTML = result;
}

function cardHTML(i, result) {
    console.log("beginning of function: ", result)
    result +='<div class="card">';
    result +='<img src="' + cardList[i].url + '" class="card-img-top" alt="' + cardList[i].title + '">';
    result +='<div class="overlay">'
    result +='<img src="' + cardList[i].url2 + '" class="card-img-top" alt="' + cardList[i].title + '">'
    result +='<div class="card-body">';
    result +='<h5 class="card-title">' + cardList[i].title + '</h5>';
    result +='<p class="card-text">$' + cardList[i].price.toFixed(2) + '</p>';
    result +='<a href="#top-left" class="btn card-button">Add to basket</a>'
    result +='</div>'
    result +='</div>'
    result +='<div class="card-body">';
    result +='<h5 class="card-title">' + cardList[i].title + '</h5>';
    result +='<p class="card-text">$' + cardList[i].price.toFixed(2) + '</p>';
    result +='<a href="#top-left" class="btn card-button">Add to basket</a>'
    result +='</div>'
    result +='</div>'
    console.log("end of function: ", result)
    return result;
}

function clickHome() {
    var element = document.getElementById("products");
    element.classList.remove("hidden");
    var element = document.getElementById("about-us");
    element.classList.remove("hidden");
}

function clickProducts() {
        var element = document.getElementById("products");
        element.classList.remove("hidden");
        var element = document.getElementById("about-us");
        element.classList.add("hidden");
}

function clickContactUs() {
        var element = document.getElementById("products");
        element.classList.add("hidden");
        var element = document.getElementById("about-us");
        element.classList.add("hidden");
}

function clickAboutUs() {
        var element = document.getElementById("products");
        element.classList.add("hidden");
        var element = document.getElementById("about-us");
        element.classList.remove("hidden");
}
