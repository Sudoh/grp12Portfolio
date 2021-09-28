$(document).ready(function () {
  $(".paragraph").fadeIn(6000);

  $(".list").slideDown(6000);

  $(".skills").show(5000);

  $(".skill-progress span").each(function () {
    $(this).animate(
      {
        width: $(this).attr("data-progress"),
      },
      15000
    );
  });

    // Adjust Element Height To Be Thr Same
    var theMaxHeight = 0;

    // Loop on Element you want To Adjest
    $(".container header").each(function () {
      if ($(this).height() > theMaxHeight) {
        theMaxHeight = $(this).height();
      }
    });
 
});
