$(document).ready(function() {
  $('#lead').hide();
  $('#navbar').addClass('animated fadeIn');
  $(window).scroll(function() {
    var scrollPosition = $(window).scrollTop();
    console.log("scrollPosition"+scrollPosition);
    if (scrollPosition >= 500 ) {
      $('#topicAni').addClass('animated fadeIn');
    }
    if (scrollPosition >= 150 ) {
      $('#lead').show();
      // console.log('to show');
    }
    else{
      $('#lead').hide();
      // console.log('to hide');
    }
  });

  // $("img.lazy").lazyload();

  $('.ui.modal').modal();


  $('#artistcard_01').click(function(){
    $('#artistmodal_01').modal('show');
  });

  $('#artistcard_02').click(function(){
    $('#artistmodal_02').modal('show');
  });

  $('#artistcard_03').click(function(){
    $('#artistmodal_03').modal('show');
  });

  $('#artistcard_04').click(function(){
    $('#artistmodal_04').modal('show');
  });

  $('#artistcard_05').click(function(){
    $('#artistmodal_05').modal('show');
  });

  $('#artistcard_06').click(function(){
    $('#artistmodal_06').modal('show');
  });

  $('#artistcard_07').click(function(){
    $('#artistmodal_07').modal('show');
  });

  $('#artistcard_08').click(function(){
    $('#artistmodal_08').modal('show');
  });

  $('#artistcard_09').click(function(){
    $('#artistmodal_09').modal('show');
  });

  $('#artistcard_10').click(function(){
    $('#artistmodal_10').modal('show');
  });

  $('#singercard_01').click(function(){
    $('#singermodal_01').modal('show');
  });

  $('#singercard_02').click(function(){
    $('#singermodal_02').modal('show');
  });

  $('#singercard_03').click(function(){
    $('#singermodal_03').modal('show');
  });

  $('#singercard_04').click(function(){
    $('#singermodal_04').modal('show');
  });

  $('#singercard_05').click(function(){
    $('#singermodal_05').modal('show');
  });

  $('#singercard_06').click(function(){
    $('#singermodal_06').modal('show');
  });

  $('#singercard_07').click(function(){
    $('#singermodal_07').modal('show');
  });

  $('#singercard_08').click(function(){
    $('#singermodal_08').modal('show');
  });

  $('#singercard_09').click(function(){
    $('#singermodal_09').modal('show');
  });

  $('#singercard_10').click(function(){
    $('#singermodal_10').modal('show');
  });

  $('#singercard_11').click(function(){
    $('#singermodal_11').modal('show');
  });

  $('#singercard_12').click(function(){
    $('#singermodal_12').modal('show');
  });

  $('#singercard_13').click(function(){
    $('#singermodal_13').modal('show');
  });

  $('#singercard_14').click(function(){
    $('#singermodal_14').modal('show');
  });
  
  $('#singercard_15').click(function(){
    $('#singermodal_15').modal('show');
  });

  $('#singercard_16').click(function(){
    $('#singermodal_16').modal('show');
  });
  
  $('#singercard_17').click(function(){
    $('#singermodal_17').modal('show');
  });

  $('#shopcard_01').click(function(){
    $('#shopmodal_01').modal('show');
  });

  $('#shopcard_02').click(function(){
    $('#shopmodal_02').modal('show');
  });

  $('#shopcard_03').click(function(){
    $('#shopmodal_03').modal('show');
  });

  $('#shopcard_04').click(function(){
    $('#shopmodal_04').modal('show');
  });

  $('#shopcard_05').click(function(){
    $('#shopmodal_05').modal('show');
  });

  $('#shopcard_06').click(function(){
    $('#shopmodal_06').modal('show');
  });

  $('#shopcard_07').click(function(){
    $('#shopmodal_07').modal('show');
  });

  $('#shopcard_08').click(function(){
    $('#shopmodal_08').modal('show');
  });

  $('#shopcard_09').click(function(){
    $('#shopmodal_09').modal('show');
  });

  $('#shopcard_10').click(function(){
    $('#shopmodal_10').modal('show');
  });

  $('#shopcard_11').click(function(){
    $('#shopmodal_11').modal('show');
  });

  $('#shopcard_12').click(function(){
    $('#shopmodal_12').modal('show');
  });

  $('#shopcard_13').click(function(){
    $('#shopmodal_13').modal('show');
  });

  // $('#shopcard_14').click(function(){
  //   $('#shopmodal_14').modal('show');
  // });

  // $('#shopcard_15').click(function(){
  //   $('#shopmodal_15').modal('show');
  // });







});