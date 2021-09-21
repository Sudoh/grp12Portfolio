$(document).ready(function(){


function getTheBooks() {
    $.ajax({

        method: 'GET',
        url: '../xml/projekt.xml',
        datatype: 'xml',

    }).done(function (data) {
        $.each(data, function (index, bokens) {

            $('#bookList').append(
                '<tr id=bok' + index + '><td>' + bokens.title +
                '</td><td>' + bokens.author +
                '</td><td>' + bokens.year_written +
                '</td><td>' + bokens.edition +
                '</td><td>' + bokens.price +
                '</td><td><button id="buy' + index + '" title="buy' + index + '">⭐</button></tr>'
            );

            //Fångar köp kanppen per rad
            $('#buy' + index).on('click', function () {

                //Skickar med bokens titel och bokens pris som argument till funktionen
                laggTillKorgen(bokens.title, bokens.price, index);
                var bok = $('[id=bok' + index + ']');
                bok.fadeOut(10);

            });


        });
    });

}; //Stänger getTheBooks

});