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
});
