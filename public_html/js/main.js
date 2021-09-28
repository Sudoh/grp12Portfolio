
    //Laddar med start.html på en gång så att det inte blir en tom sida
    $('#container').load('start.html' + ' #content').hide().fadeIn(500);
    $('#content').append($('<script src=js/Amira.js />'));

    $('nav a').on('click', function (e) {
      e.preventDefault();
      var id = this.id;
      var url = this.href;

      console.log(this.href);

      $('nav a.current').removeClass('current');
      $(this).addClass('current');

      $('#content').hide();
      $('#container').load(url + ' #content').hide().fadeIn(500);

      switch (id) {

        case 'startLink':


          $('#content').append($('<script src=js/Amira.js />'));
          console.log("lägger till amira js");

          break;

        case 'projektLink':

          console.log("lägger till projekt js");
          $('#content').append($('<script src=js/projekt.js />'));


          break;

        case 'omOssLink':

          break;

        case 'kontaktLink':
        
          $('#content').append($('<script src=js/appEd.js />'));
          $('#content').append($('<script src=js/Amira.js />'));

          break;

        default:
          console.log('Något gått fel, kontrollera variabeler och id');

      }

    });