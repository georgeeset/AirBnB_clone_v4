$(document).ready(function () {
    //wait till dom is fully loaded before script is run

    const amenities_data = {};
    $('input:checkbox').click(function () {
      $(this).each(function () {
        if (this.checked) {
          amenities_data[$(this).data('id')] = $(this).data('name');
        } else {
          delete amenities_data[$(this).data('id')];
        }
      });
      
      if (Object.values(amenities_data).length > 0) {
        $('.amenities h4').text(Object.values(amenities_data).join(', '));
      } else {
        $('.amenities h4').html('&nbsp');
      }
    });
  });