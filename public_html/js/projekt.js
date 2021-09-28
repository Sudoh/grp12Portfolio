$(document).ready(function () {

    //Deklarera variabel för att rita upp på sidan
    var $projektObjekt = {}, $projektNr = [], klick = 0;

    //Kör funktion när sidan har laddat.
    laddaProjekt();

        //Fångar knappen för att hämsta nästa projekt.
        $('#nastaProjekt').on('click', function (e) {
            e.preventDefault(e);
            ritaProjektDiv(klick);
            console.log('The button haz been clicked')
      
        });

    function ritaProjektDiv(x) {

        $('#projekt').prepend('<div class="loading"><img src="bilder/projekt/loading.gif" />');
        //behöver veta vilken projekt det gäller
        console.log(x);

        //Lägger en timeout för att få till en loadingbild.
        setTimeout(function () {
            //Rita upp projektinfo
            if (x < $projektNr.length) {
                // Ta bort nuvarande projekt
                // $('.projektInfo').remove();
                $('.loading').remove();
                $('.projektInfo').remove();

                //Ritar upp en div för projektet. För att justa utseende, ändra raderna nedan.
                $('#projekt').prepend('<div class="projektInfo" id=' + $projektNr[x].id + '>' +
                    '<div class="projektNamn"><h1 class="projektNamn">' + $projektNr[x].namn + '</h1></div>' +
                    '<div class="projektBild"><img src="bilder/projekt/' + $projektNr[x].bild + '" alt="' + $projektNr[x].bild + '"/></div>' +
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
                $('.loading').remove();
                ritaProjektDiv(klick);
            };
        }, 150); //Ändra här för loading timeout i millisekunder
    };


    //Fyll en array med objekt från XML Fil.
    function laddaProjekt() {

        $.ajax({

            type: "GET",
            url: "xml/projekt.xml",
            dataType: "xml",

            //Kod som körs när xml filen är laddad. 
            success: function (data) {
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

            error: function (data) {
                //kod som körs vid ev. fel
                alert(' Något har gått fel, troligen sökvägen till xml-filen.');
            }

        }); //ständer ajax



    };



}); //Stänger Ready