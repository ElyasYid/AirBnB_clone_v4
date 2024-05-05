$(document).ready(function () {
  let chk_amn = {};
  $(document).on('change', "input[type='checkbox']", function () {
    if (this.checked) {
      chk_amn[$(this).data('id')] = $(this).data('name');
    } else {
      delete chk_amn[$(this).data('id')];
    }
    let bs = Object.values(chk_amn);
    if (bs.length > 0) {
      $('div.amenities > h4').text(Object.values(chk_amn).join(', '));
    } else {
      $('div.amenities > h4').html('&nbsp;');
    }
  });
});
