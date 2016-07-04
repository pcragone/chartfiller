$(document).ready(function() {
    $('.headerTable').append('<button onclick="" style="background:red;color:white;" id="setup">Setup</button>');
    $('.headerTable').append('<button onclick="" style="background:red;color:white;" id="fillDefaults">Fill defaults</button>');

    var setupBackground = '<div id="pg8SetupBackground" style="position: fixed; z-index: 1000; top: 0; left: 0; height: 100%; width: 100%; background-color: rgba(50,50,50,.8);"></div>';
    var setupModal = '<div id="pg8Setup" style=" position: absolute; z-index: 1001; top: 50%; left: 40%; background: white; height: 700px; width: 400px; ">\
<table>\
  <tbody>\
    <tr>\
      <td>HR Method</td>\
      <td>\
        <select class="defaultValue" data-field-name="hr_method">\
          <option value="0"></option>\
          <option value="1">Auscultated</option>\
          <option value="2">Doppler</option>\
          <option value="3">Electric Monitor - Cardiac</option>\
          <option value="5">Electric Monitor - Other</option>\
          <option value="4">Electric Monitor - Pulse Oximeter</option>\
          <option value="6">Palpated</option>\
        </select>\
      </td>\
    </tr>\
    <tr>\
      <td>BP Method</td>\
      <td>\
        <select class="defaultValue" data-field-name="vs_bp_method">\
          <option value="0"></option>\
          <option value="3150">Art. Line</option>\
          <option value="3155">Auto. Cuff</option>\
          <option value="3160">Manual Cuff</option>\
          <option value="3165">Palpated Cuff</option>\
          <option value="3170">Venous Line</option>\
          <option value="-5">Not Available</option>\
          <option value="-10">Not Known</option>\
          <option value="1">Doppler</option>\
        </select>\
      </td>\
    </tr>\
    <tr>\
      <td>Room air?</td>\
      <td>\
        Yes <input type="radio" class="defaultValue" name="sp02defaultvalue" data-field-name="vs_sao2_room" value="true" checked="checked">\
        &nbsp;&nbsp;&nbsp;&nbsp;\
        No <input type="radio" class="defaultValue" name="sp02defaultvalue" data-field-name="vs_sao2_room" value="false">\
      </td>\
    </tr>\
    <tr>\
      <td>Resp Effort</td>\
      <td>\
        <select class="defaultValue" data-field-name="vs_resp_effort">\
          <option value="0"></option>\
          <option value="3200">Absent</option>\
          <option value="2">Agonal</option>\
          <option value="22">Apneic</option>\
          <option value="41">Assisted</option>\
          <option value="21">Distressed</option>\
          <option value="3195">Fatigued</option>\
          <option value="82">Grunting</option>\
          <option value="3190">Labored</option>\
          <option value="81">Nasal Flaring</option>\
          <option value="3185">Normal</option>\
          <option value="-25">Not Applicable</option>\
          <option value="3205">Not Assessed</option>\
          <option value="-5">Not Available</option>\
          <option value="-10">Not Known</option>\
          <option value="1">Rapid</option>\
          <option value="83">Retractions</option>\
          <option value="84">Shallow</option>\
          <option value="61">Tachypnea</option>\
        </select>\
      </td>\
    </tr>\
    <tr>\
      <td>Rhythm</td>\
      <td>\
      <table class="padded sortable" id="oTable" cellspacing="0" cellpadding="0" style="font-size:8pt; border:1px solid navy;">\
        <tbody>\
          <tr class=" odd">\
            <td class=""><input type="checkbox" value="826" class="defaultValue" data-field-name="vs_rhy_coded" data-text="1st Degree AV Block"></td>\
            <td>1st Degree AV Block</td>\
          </tr>\
          <tr class=" even">\
            <td class=""><input type="checkbox" value="827" class="defaultValue" data-field-name="vs_rhy_coded" data-text="2nd Deg. AV Block - I"></td>\
            <td>2nd Deg. AV Block - I</td>\
          </tr>\
          <tr class=" odd">\
            <td class=""><input type="checkbox" value="828" class="defaultValue" data-field-name="vs_rhy_coded" data-text="2nd Deg. AV Block - II"></td>\
            <td>2nd Deg. AV Block - II</td>\
          </tr>\
          <tr class=" even">\
            <td class=""><input type="checkbox" value="829" class="defaultValue" data-field-name="vs_rhy_coded" data-text="3rd Degree AV Block"></td>\
            <td>3rd Degree AV Block</td>\
          </tr>\
          <tr class=" odd">\
            <td class=""><input type="checkbox" value="3222" class="defaultValue" data-field-name="vs_rhy_coded" data-text="Asystole"></td>\
            <td>Asystole</td>\
          </tr>\
          <tr class=" even">\
            <td><input type="checkbox" value="3228" class="defaultValue" data-field-name="vs_rhy_coded" data-text="Atrial Fibrillation"></td>\
            <td>Atrial Fibrillation</td>\
          </tr>\
          <tr class=" odd">\
            <td><input type="checkbox" value="3269" class="defaultValue" data-field-name="vs_rhy_coded" data-text="Atrial Flutter"></td>\
            <td>Atrial Flutter</td>\
          </tr>\
          <tr class=" even">\
            <td><input type="checkbox" value="6858" class="defaultValue" data-field-name="vs_rhy_coded" data-text="Idioventricular"></td>\
            <td>Idioventricular</td>\
          </tr>\
          <tr class=" odd">\
            <td><input type="checkbox" value="3229" class="defaultValue" data-field-name="vs_rhy_coded" data-text="Junctional"></td>\
            <td>Junctional</td>\
          </tr>\
          <tr class=" even">\
            <td><input type="checkbox" value="6859" class="defaultValue" data-field-name="vs_rhy_coded" data-text="Multi Focal Atrial Tachycardia"></td>\
            <td>Multi Focal Atrial Tachycardia</td>\
          </tr>\
          <tr class=" odd">\
            <td><input type="checkbox" value="822" class="defaultValue" data-field-name="vs_rhy_coded" data-text="Normal Sinus Rhythm"></td>\
            <td>Normal Sinus Rhythm</td>\
          </tr>\
          <tr class=" even">\
            <td><input type="checkbox" value="834" class="defaultValue" data-field-name="vs_rhy_coded" data-text="Paced"></td>\
            <td>Paced</td>\
          </tr>\
          <tr class=" odd">\
            <td><input type="checkbox" value="836" class="defaultValue" data-field-name="vs_rhy_coded" data-text="SVT"></td>\
            <td>SVT</td>\
          </tr>\
          <tr class=" even">\
            <td><input type="checkbox" value="3271" class="defaultValue" data-field-name="vs_rhy_coded" data-text="Sinus Arrhythmia"></td>\
            <td>Sinus Arrhythmia</td>\
          </tr>\
          <tr class=" odd">\
            <td><input type="checkbox" value="3223" class="defaultValue" data-field-name="vs_rhy_coded" data-text="Sinus Bradycardia"></td>\
            <td>Sinus Bradycardia</td>\
          </tr>\
          <tr class=" even">\
            <td><input type="checkbox" value="3270" class="defaultValue" data-field-name="vs_rhy_coded" data-text="Sinus Tachycardia"></td>\
            <td>Sinus Tachycardia</td>\
          </tr>\
          <tr class=" odd">\
            <td><input type="checkbox" value="838" class="defaultValue" data-field-name="vs_rhy_coded" data-text="Ventricular Fibrillation"></td>\
            <td>Ventricular Fibrillation</td>\
          </tr>\
          <tr class=" even">\
            <td><input type="checkbox" value="837" class="defaultValue" data-field-name="vs_rhy_coded" data-text="Ventricular Tachycardia"></td>\
            <td>Ventricular Tachycardia</td>\
          </tr>\
          <tr class=" odd">\
            <td><input type="checkbox" value="3224" class="defaultValue" data-field-name="vs_rhy_coded" data-text="Wide Complex Tachycardia"></td>\
            <td>Wide Complex Tachycardia</td>\
          </tr>\
          <tr class=" even">\
            <td><input type="checkbox" value="6860" class="defaultValue" data-field-name="vs_rhy_coded" data-text="Wolff-Parkinson-White Syndrome"></td>\
            <td>Wolff-Parkinson-White Syndrome</td>\
          </tr>\
        </tbody>\
      </table>\
      </td>\
    </tr>\
    <tr>\
      <td>ECG Type</td>\
      <td>\
        <select class="defaultValue" data-field-name="vs_rhytype">\
          <option value=""></option>\
          <option value="4" tmpname="12 Lead - Left Sided (Normal)">12 Lead - Left Sided (Normal)</option>\
          <option value="5" tmpname="12 Lead - Right Sided">12 Lead - Right Sided</option>\
          <option value="6" tmpname="15 Lead">15 Lead</option>\
          <option value="7" tmpname="18 Lead">18 Lead</option>\
          <option value="1" tmpname="3 Lead">3 Lead</option>\
          <option value="2" tmpname="4 Lead">4 Lead</option>\
          <option value="3" tmpname="5 Lead">5 Lead</option>\
          <option value="8" tmpname="Other">Other</option>\
        </select>\
      </td>\
    </tr>\
    <tr>\
      <td>Reg/Irreg</td>\
      <td>\
        <select class="defaultValue" data-field-name="vs_pulse_rhy">\
          <option value="NULL"></option>\
          <option value="1">REG</option>\
          <option value="2">RI</option>\
          <option value="-1">IRR</option>\
        </select>\
      </td>\
    </tr>\
    <tr>\
      <td>ECG Method</td>\
      <td>\
        <table>\
          <tbody>\
            <tr class=" odd">\
              <td><input type="checkbox" value="3305001" class="defaultValue" data-field-name="ecgmethod" data-text="Computer Interpretation"></td>\
              <td>Computer Interpretation</td>\
            </tr>\
            <tr class=" even">\
              <td><input type="checkbox" value="3305003" class="defaultValue" data-field-name="ecgmethod" data-text="Manual Interpretation"></td>\
              <td>Manual Interpretation</td>\
            </tr>\
            <tr class=" odd">\
              <td><input type="checkbox" value="3305005" class="defaultValue" data-field-name="ecgmethod" data-text="Transmission with No Interpretation"></td>\
              <td>Transmission with No Interpretation</td>\
            </tr>\
            <tr class=" even">\
              <td><input type="checkbox" value="3305007" class="defaultValue" data-field-name="ecgmethod" data-text="Transmission with Remote Interpretation"></td>\
              <td>Transmission with Remote Interpretation</td>\
            </tr>\
          </tbody>\
        </table>\
      </td>\
    </tr>\
    <tr>\
      <td>GCS E</td>\
      <td>\
        <select class="defaultValue" data-field-name="gcs_e">\
          <option value="NULL"></option>\
          <option value="4">4:Spontaneous</option>\
          <option value="3">3:To Voice</option>\
          <option value="2">2:To Pain</option>\
          <option value="1">1:None</option>\
        </select>\
      </td>\
    </tr>\
    <tr>\
      <td>GCS: V</td>\
      <td>\
        <select class="defaultValue" data-field-name="gcs_v">\
          <option value="NULL"></option>\
          <option value="5">5:Oriented</option>\
          <option value="4">4:Confused</option>\
          <option value="3">3:Inappropriate Words</option>\
          <option value="2">2:Incomplete Words</option>\
          <option value="1">1:None</option>\
        </select>\
      </td>\
    </tr>\
    <tr>\
      <td>GCS: M</td>\
      <td>\
        <select class="defaultValue" data-field-name="gcs_m">\
          <option value="NULL"></option>\
          <option value="6">6:Obeys Command</option>\
          <option value="5">5:Localizes Pain</option>\
          <option value="4">4:Withdraws Pain</option>\
          <option value="3">3:Flexion Pain</option>\
          <option value="2">2:Extension Pain</option>\
          <option value="1">1:None</option>\
        </select>\
      </td>\
    </tr>\
    \
  </tbody>\
  <tfoot>\
    <tr>\
      <td>\
        <button type="button" id="setupCancel">Cancel</button>\
      </td>\
      <td>\
        <button type="button" id="setupSave">Save</button>\
      </td>\
    </tr>\
  </tfoot>\
</table>\
  </div>';

    $('body').append(setupBackground);
    $('body').append(setupModal);
    $('#pg8SetupBackground').hide();
    $('#pg8Setup').hide();

    $('.headerTable').append('<button onclick="" style="background:red;color:white;" class="atref">At Ref</button>');
    $('.headerTable').append('<button onclick="" style="background:red;color:white;" class="lvref">Lv Ref</button>');
    $('.headerTable').append('<button onclick="" style="background:red;color:white;" class="atrec">At Rec</button>');
    $('.headerTable').append('<button onclick="" style="background:red;color:white;" class="can1">Canned 1</button>');
    $('.headerTable').append('<button onclick="" style="background:red;color:white;" class="can2">Canned 2</button>');

    $('#setup').click(function() {
      $('input.defaultValue[type="checkbox"]').attr('checked', false);
      $('select.defaultValue').val('');
      $.each(defaultValues, function(key, value) {
        if (value.constructor === Array) {
          $.each(value, function(index, subvalue) {
            $('[data-field-name="' + key + '"][value="' + subvalue + '"]').attr('checked', 'checked');
          });
        } else {
          $('select[data-field-name="' + key + '"]').val(value);
        }
      });
      var sao2_default = defaultValues['vs_sao2_room'];
      $('[data-field-name="vs_sao2_room"]').removeAttr('checked');
      $('[data-field-name="vs_sao2_room"][value="' + sao2_default + '"]').attr('checked', 'checked');
      $('#pg8SetupBackground').show();
      $('#pg8Setup').show();
    });

    var defaultValues;
    if (localStorage['defaultValues'])
      defaultValues = JSON.parse(localStorage['defaultValues']);
    else
      defaultValues = {};

    $('#setupSave').click(function() {
      $('select.defaultValue').each(function(index, el) {
        defaultValues[$(el).data('field-name')] = $(el).val();
      });
      $('input.defaultValue[type="checkbox"]').each(function(index, el) {
        defaultValues[$(el).data('field-name')] = [];
        defaultValues[$(el).data('field-name') + '_text'] = [];
      });
      $('input.defaultValue[type="checkbox"]:checked').each(function(index, el) {
        defaultValues[$(el).data('field-name')].push($(el).val());
        defaultValues[$(el).data('field-name') + '_text'].push($(el).data('text'));
      });
      defaultValues[$('input.defaultValue[type="radio"]:checked').data('field-name')] = $('input.defaultValue[type="radio"]:checked').val();

      localStorage['defaultValues'] = JSON.stringify(defaultValues);
      $('#pg8SetupBackground').hide();
      $('#pg8Setup').hide();
    });
    
    $('#setupCancel').click(function() {
      $('#pg8SetupBackground').hide();
      $('#pg8Setup').hide();
    });

    $('#fillDefaults').click(function() {
      $.each(defaultValues, function(key, value) {
        if (key !== "vs_sao2_room") {
          if (value.constructor === Array) {
            $('[name="' + key + '"]').val(value.join(','));
          } else {
            $('[name="' + key + '"]').val(value);
          }
        }
      });
      $('input[type="checkbox"][name="vs_sao2_room"]').removeAttr('checked');
      if (defaultValues['vs_sao2_room'] == "true")
        $('input[type="checkbox"][name="vs_sao2_room"]').attr('checked', 'checked');
    });
    
    $('.can1').click(function() {
        chrome.extension.sendMessage({
            greeting: "pg8"
        }, function(response) {
            var can_1 = response.can_1;
            $('textarea[name=vs_comment]').text(can_1);
        }); 
    });
    
    $('.can2').click(function() {
        chrome.extension.sendMessage({
            greeting: "pg8"
        }, function(response) {
            var can_2 = response.can_2;
            $('textarea[name=vs_comment]').text(can_2);
        }); 
    });
    
    $('.atref').click(function() {
        chrome.extension.sendMessage({
            greeting: "pg8"
        }, function(response) {
            var at_ref_comment = response.at_ref_comment;
            
            var at_ref_ex = "At Ref: ([0-2][0-9]:[0-5][0-9])";
            var regex1 = new RegExp(at_ref_ex);
            var times = $('input[name=pertneg_tmp_eventid]').next('div').html();
            var at_ref = regex1.exec(times);
            var at_ref = at_ref[1];
            
            $('input[name=vtime]').val(at_ref);
            $('textarea[name=vs_comment]').text(at_ref_comment);
        }); 
    });
    $('.lvref').click(function() {
        chrome.extension.sendMessage({
            greeting: "pg8"
        }, function(response) {           
            
            var lv_ref_comment = response.lv_ref_comment;
            var lv_ref_ex = "Lv Ref: ([0-2][0-9]:[0-5][0-9])";
            var regex2 = new RegExp(lv_ref_ex);
            var times = $('input[name=pertneg_tmp_eventid]').next('div').html();
            var lv_ref = regex2.exec(times);
            var lv_ref = lv_ref[1];
            
            $('input[name=vtime]').val(lv_ref);
            $('textarea[name=vs_comment]').text(lv_ref_comment);
        }); 
    });
    $('.atrec').click(function() {
        chrome.extension.sendMessage({
            greeting: "pg8"
        }, function(response) {           
            var at_rec_comment = response.at_rec_comment;
            var at_rec_ex = "At Rec: ([0-2][0-9]:[0-5][0-9])";
            var regex3 = new RegExp(at_rec_ex);
            var times = $('input[name=pertneg_tmp_eventid]').next('div').html();
            var at_rec = regex3.exec(times);
            var at_rec = at_rec[1];

            $('input[name=vtime]').val(at_rec);
            $('textarea[name=vs_comment]').text(at_rec_comment);
        });
    });
});
    
