$(document).ready(function () {

        $('#nastaProjekt').on('click', function (e) {
            e.preventDefault();
            getNastaProjekt();
            
        });

        
        function getNastaProjekt(){
            console.log("Klickat på nästa");

            //Ta bort nuvarande projekt
            $('#projektInfo').remove();
            //Hämta nästa projekt
            getEnProjekt();

        };


        //Hämta en projekt
        function getEnProjekt(){

            $.ajax({

                type: "GET",
                url: "/xml/projekt.xml",
                dataType: "xml",
                beforeSend: function () {
                    //Här kan vi lägga en laddar icon/gif
                },
                complete: function (){
                    //kod för att ta bort laddningsiconen efter att data har hämtats.
                },
                success: function(data){
                    //Kod som körs när xml filen är laddad. 
                     $('#projekt').text('Det här var svårt =( jag behöver vila lite');
                },
                error: function(){
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
    };

}); //Stänger Ready
