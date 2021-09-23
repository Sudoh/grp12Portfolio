$(document).ready(function () {

    laddaProjekt();


    //Deklarera variabel för att rita upp på sidan
    var $projektObjekt = {}, $projektNr = [], $projektDiv = '', klick = 0;

    //Fångar knappen för att hämsta nästa projekt.
    $('#nastaProjekt').on('click', function (e) {
        e.preventDefault();
        ritaProjektDiv(klick);
    });


    // function getNastaProjekt() {
    //     console.log("Klickat på nästa");

    //     //Ta bort nuvarande projekt
    //     $('#projektInfo').remove();
    //     //Hämta nästa projekt
    //     laddaProjekt();

    // };

    function ritaProjektDiv(x) {
        //behöver veta vilken projekt det gäller
        console.log(x);
        //Rita upp projektinfo
        if (x < $projektNr.length) {
            // Ta bort nuvarande projekt
            $('.projektInfo').fadeOut();
            $('#projekt').prepend('<div class="projektInfo" id=' + $projektNr[x].id + '>' +
                '<div class="projektNamn"><h1 class="projektNamn">' + $projektNr[x].namn + '</h1></div>' +
                '<div class="projektBild"><img src="/bilder/projekt/' + $projektNr[x].bild + '" alt="' + $projektNr[x].bild + '"/></div>' +
                '<div class="projektLedare"><p><span class="pHeading">Projektledare: </span>' + $projektNr[x].projektLedare + '</p></div>' +
                '<div class="uppdragsgivare"><p><span class="pHeading">Uppdragsgivare: </span>' + $projektNr[x].uppdragsGivare + '</p></div>' +
                '<div class="startDatum"><p><span class="pHeading">Startdatum: </span>' + $projektNr[x].startDatum + '</p></div>' +
                '<div class="slutDatum"><p><span class="pHeading">Slutdatum: </span>' + $projektNr[x].slutDatum + '</p></div>' +
                '<div class="projektBeskrivning"><p><span class="pHeading">Projektbeskrivning: </span>' + $projektNr[x].beskrivning + '</p></div>' +
                '</div>');
            klick++;
        } else {

            console.log('nått slutet, börjar om');
            klick = 0;
            ritaProjektDiv(klick);
        }



    };


    //Hämta en projekt
    function laddaProjekt() {

        $.ajax({

            type: "GET",
            url: "/xml/projekt.xml",
            dataType: "xml",

            beforeSend: function () {
                //Här kan vi lägga en laddar icon/gif
            },

            complete: function () {
                //kod för att ta bort laddningsiconen efter att data har hämtats.
            },

            success: function (data) {
                //Kod som körs när xml filen är laddad. 


                $(data).find('projekten projekt').each(function () {

                    $projektObjekt = {

                        id: $(this).attr('id'),
                        namn: $(this).find('namn').text(),
                        projektLedare: $(this).find('projektLedare').text(),
                        uppdragsGivare: $(this).find('uppdragsgivare').text(),
                        startDatum: $(this).find('startDatum').text(),
                        slutDatum: $(this).find('slutDatum').text(),
                        bild: $(this).find('bildURL').text(),
                        beskrivning: $(this).find('projektBeskrivning').text()
                    }

                    //laddat objekten
                    $projektNr.push($projektObjekt);

                });

                console.log($projektNr);

            }, //Stänger Success

            error: function () {
                //kod som körs vid ev. fel
                alert('Något har gått fel, troligen sökvägen till xml-filen.');
            }

        }); //ständer ajax



    };



    //Hämtar alla projekt som finns i filen
    function getAllaProjekt() {
        $.ajax({
            type: "GET",
            url: "/xml/projekt.xml",
            dataType: "xml",
            success: function (xml) {

                $(xml).find("projekt").each(function () {

                    //Ritar upp tabell med hjälp av Divs
                    $('#projekt').append('<div class="projektInfo">' +
                        '<div class="projektBild"><img src="/bilder/projekt/' + $(this).find("bildURL").text() + '" alt="' + $(this).find("namn").text() + '"/></div>' +
                        '<div class="projektNamn"><h1 class="projektNamn">' + $(this).find("namn").text() + '</h1></div>' +
                        '<div class="projektLedare"><p><span class="pHeading">Projektledare: </span>' + $(this).find("projektLedare").text() + '</p></div>' +
                        '<div class="uppdragsgivare"><p><span class="pHeading">Uppdragsgivare: </span>' + $(this).find("uppdragsgivare").text() + '</p></div>' +
                        '<div class="startDatum"><p><span class="pHeading">Startdatum: </span>' + $(this).find("startDatum").text() + '</p></div>' +
                        '<div class="slutDatum"><p><span class="pHeading">Slutdatum: </span>' + $(this).find("slutDatum").text() + '</p></div>' +
                        '<div class="projektBeskrivning"><p><span class="pHeading">Projektbeskrivning: </span>' + $(this).find("projektBeskrivning").text() + '</p></div>' +
                        '</div>');
                })

            },

            error: function () {
                alert("The XML File could not be processed correctly.");
            }
        });
    };

}); //Stänger Ready