$(document).ready(function() {
  if ($('form[name="myForm"] center table tbody tr td table tbody tr th').last().html() == 'Hosp. Notify Log')
    $('body').prepend('<button onclick="" style="background:red;color:white;" class="hospitalNotify">Hospital Notify</button>');
  if ($('form[name="myForm"] center table tbody tr td table tbody tr th').last().html() == 'Cardiac Log')
    $('body').prepend('<button onclick="" style="background:red;color:white;" class="ecg">12-lead</button>');
  if ($('form[name="myForm"] center table tbody tr td table tbody tr th').last().html() == 'Initiate IV Log')
    $('body').prepend('<button onclick="" style="background:red;color:white;" class="initiateIV">Initiate IV</button>');

  $('.hospitalNotify').click(function() {
    $('input[name="CrewName"]').val('Peter Ragone');
    $('select[name="ID"]').val($('select[name="ID"]').children('[crewname="Peter Ragone"]').val());
    $('select[name="Field1"]').val('11382');
    $('select[name="Field1_txt"]').val('ALS');
    $('textarea[name="preComment"]').html('Hospital notified. No further orders requested.');
  });

  $('.ecg').click(function() {
    $('input[name="CrewName"]').val('Peter Ragone');
    $('select[name="ID"]').val($('select[name="ID"]').children('[crewname="Peter Ragone"]').val());
    $('input[type="text"][name="proccomp_text"]').val('None');
    $('input[type="hidden"][name="proccomp"]').val('4500');
    $('select[name="responseto"]').val('-25');
    $('select[name="consult_eventid"]').val('-26');
    var comment = $('textarea[name="preComment"]').html();
    $('textarea[name="preComment"]').html(comment + '  No acute injury, infarct, or ischemia noted.');
  });

  $('.initiateIV').click(function() {
    $('select[name="ID"]').val($('select[name="ID"]').children('[crewname="Peter Ragone"]').val());
    $('input[type="text"][name="proccomp_text"]').val('None');
    $('input[type="hidden"][name="proccomp"]').val('4500');
    $('select[name="responseto"]').val('2');
    $('select[name="consult_eventid"]').val('-26');
    
    $('textarea[name="preComment"]').html('IV started using aseptic technique.  No extravasation or infiltration noted.');
  });
});
