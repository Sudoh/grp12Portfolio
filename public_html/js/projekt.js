
    $.ajax({
        type: "GET",
        url: "/xml/projekt.xml",
        dataType: "xml",
        success: function (xml) {
            
            $(xml).find("projekt").each(function() {

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

        error: function() {
        alert("The XML File could not be processed correctly.");
        }
        });


