
    $.ajax({
        type: "GET",
        url: "/xml/projekt.xml",
        dataType: "xml",
        success: function (xml) {
            console.log($(xml));
            $(xml).find("projekt").each(function(index, projekt) {
                

                $('#projekt').append('<div>' + $(this).find("namn").text() + '</div>');
               

            })

        },

        error: function() {
        alert("The XML File could not be processed correctly.");
        }
        });


