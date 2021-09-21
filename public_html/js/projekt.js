
    $.ajax({
        type: "GET",
        url: "/xml/projekt.xml",
        dataType: "xml",
        success: function (xml) {
            console.log($(xml));
            $(xml).find("projekt").each(function() {
                
                //Ritar upp tabell med hjälp av Divs
                $('#projekt').append('<div id="projektNamn"><h1 id="projektNamn">' + $(this).find("namn").text() + '</h1></div>');
                $('#projekt').append('<div id="projektLedare"><p>' + $(this).find("projektLedare").text() + '</p></div>');
                $('#projekt').append('<div id="uppdragsgivare">' + $(this).find("uppdragsgivare").text() + '</p></div>');
                $('#projekt').append('<div id="startDatum">' + $(this).find("startDatum").text() + '</p></div>');
                $('#projekt').append('<div id="slutDatum">' + $(this).find("slutDatum").text() + '</p></div>');
                $('#projekt').append('<div id="projektBild"><img src="/bilder/projekt/' + $(this).find("bildURL").text() + '" alt="' + $(this).find("namn").text() + '"/></div>');
                $('#projekt').append('<div id="projektBeskrivning">' + $(this).find("projektBeskrivning").text() + '</div>');
                

            })

        },

        error: function() {
        alert("The XML File could not be processed correctly.");
        }
        });


