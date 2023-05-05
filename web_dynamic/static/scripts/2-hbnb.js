$(document).ready(function () {
    //wait till dom is fully loaded before script is run

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
        $('.amenities h4').text(Object.values(amens).join(', '));
      } else {
        $('.amenities h4').html('&nbsp');
      }
    });

    $.get('http://172.17.129.62:5001/api/v1/status/', function (data, status) {
    console.log(data);
    if (data.status === 'OK') {
        $('DIV#api_status').addClass('available');
    } else {
        $('DIV#api_status').removeClass('available');
    }
    });
});