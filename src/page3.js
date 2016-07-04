$(document).ready(function() {
  $('.headerTable').append('<button onclick="" style="background:red;color:white;" class="chartfiller">AutoComplete</button>');
  $('.chartfiller').click(function() {
    console.log('chartfiller clicked');
    // $('.chartfiller').click(function() {
    //   console.log('chartfiller subfield clicked');
      chrome.extension.sendMessage({
        greeting: "pg3"
      }, function(response) {
        console.log('response clicked');
        console.log(response);
        var head_consciouness = response.head_consciouness;
        var mental_value = response.mental_value;
        var mental_name = response.mental_name;
        var neuro_comments = response.neuro_comments;
        var stroke_scale = response.stroke_scale;
        var gcs_eye = response.gcs_eye;
        var gcs_verbal = response.gcs_verbal;
        var gcs_motor = response.gcs_motor;

        // $('select["head_consciousness"]').val('1');
        // Yes, the field name is misspelled.  Yay, EMS Charts!
        $('select[name="head_conciousness"]').val(head_consciouness);
        // $('input[type="text"][name="mental_text"]').val('Alert,Oriented-Person,Oriented-Place,Oriented-Time');
        $('input[type="text"][name="mental_text"]').val(mental_name);
        // $('input[type="hidden"][name="mental"]').val('64,147,148,149');
        $('input[type="hidden"][name="mental"]').val(mental_value);
        // $('input[type="text"][name="neuro_text"]').val('Normal');
        $('input[type="text"][name="neuro_text"]').val('Normal');
        // $('input[type="hidden"][name="neuro"]').val('140');
        $('input[type="hidden"][name="neuro"]').val('140');

        $('input[name=head_findings]').val(neuro_comments);
        $('select[name=stroke_scale]').attr('value',stroke_scale);

        $('select[name=gcs_eye_1]').attr('value',gcs_eye);
        $('select[name=gcs_verbal_1]').attr('value',gcs_verbal);
        $('select[name=gcs_motor_1]').attr('value',gcs_motor);

        $('select[name=motor_la]').attr('value','1');
        $('select[name=motor_ra]').attr('value','1');
        $('select[name=motor_ll]').attr('value','1');
        $('select[name=motor_rl]').attr('value','1');
        $('select[name=sensory_la]').attr('value','1');
        $('select[name=sensory_ra]').attr('value','1');
        $('select[name=sensory_ll]').attr('value','1');
        $('select[name=sensory_rl]').attr('value','1');

        $('input[type="text"][name="head_sensory"]').val('No gross sensory deficits.');
        $('input[type="text"][name="motor_comments"]').val('No gross motor deficits.');

        $('input[type="text"][name="cv_breath_comments"]').val('Equal, bilateral chest rise.');
      });
    // });
  });
});
