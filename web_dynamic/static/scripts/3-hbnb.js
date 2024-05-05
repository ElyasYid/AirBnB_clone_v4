$(document).ready(function () {
  let selected = {};
  $(document).on('change', "input[type='checkbox']", function () {
    if (this.checked) {
      selected[$(this).data('id')] = $(this).data('name');
    } else {
      delete selected[$(this).data('id')];
    }
    let list = Object.values(selected);
    if (list.length > 0) {
      $('div.amenities > h4').text(Object.values(selected).join(', '));
    } else {
      $('div.amenities > h4').html('&nbsp;');
    }
  });
  $.get('http://0.0.0.0:5001/api/v1/status/', function (data, textStatus) {
    if (textStatus === 'success') {
      if (data.status === 'OK') {
        $('#api_status').addClass('available');
      } else {
        $('#api_status').removeClass('available');
      }
    }
  });
  $.ajax({
    type: 'POST',
    url: 'http://0.0.0.0:5001/api/v1/places_search',
    data: '{}',
    dataType: 'json',
    contentType: 'application/json',
    success: function (data) {
      for (let i = 0; i < data.length; i++) {
        let p = data[i];
        $('.places ').append('<article><h2>' + p.name + '</h2><div class="price_by_night"><p>$' + p.price_by_night + '</p></div><div class="information"><div class="max_guest"><div class="guest_image"></div><p>' + p.max_guest + '</p></div><div class="number_rooms"><div class="bed_image"></div><p>' + p.number_rooms + '</p></div><div class="number_bathrooms"><div class="bath_image"></div><p>' + p.number_bathrooms + '</p></div></div><div class="description"><p>' + p.description + '</p></div></article>');
      }
    }
  });
});
