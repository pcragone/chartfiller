
$(document).ready(function() {
    $('.headerTable').append('<button onclick="" style="background:red;color:white;" class="chartfiller">AutoComplete</button>');

    $('.chartfiller').click(function() {
        chrome.extension.sendMessage({
            greeting: "pg2"
        }, function(response) {
            var chief_complaint = response.chief_complaint;
            var cc_duration = response.cc_duration;
            var als_assessment = response.als_assessment;
            var cc_duration_units = response.cc_duration_units;
            var hpi = response.hpi;
            var scene_description = response.scene_description;
            var patient_belongings = response.patient_belongings;
            var to_truck = response.to_truck;
            var from_truck = response.from_truck;
            var position = response.position;
            var first_on_scene = response.first_on_scene;
            var stretcher_purpose = response.stretcher_purpose;

            // var reason_encounter = response.reason_encounter;
            // var alcohol = response.alcohol;

            // var factors_affecting_care_dispatch = response.factors_affecting_care_dispatch;
            // var factors_affecting_care_factors = response.factors_affecting_care_factors;
            // var factors_affecting_care_turnaround = response.factors_affecting_care_turnaround;
            
            
            $('input[name=PRMAIN_ccduration]').val(cc_duration);
            $('input[name=stretcher_purpose_descr]').val(stretcher_purpose);
                    
            $('textarea[name=PRMAIN_cc]').text(chief_complaint);
            $('textarea[name=PRMAIN_hpi]').text(hpi);
            $('textarea[name=PRMAIN_belongings]').text(patient_belongings);
            $('textarea[name=scene_description]').text(scene_description);

            $('select[name=PRMAIN_first_on_scene]').val(first_on_scene);
            $('select[name=PRMAIN_als_assessment]').val(als_assessment);
            $('select[name=PRMAIN_ccdurunits]').val(cc_duration_units);
            $('select[name=pt_moved_via]').val(to_truck);
            $('select[name=pt_position]').val(position);
            $('select[name=pt_moved_from]').val(from_truck);


            $('input[type="text"][name="dfactors_text"]').val('None');
            $('input[type="hidden"][name="dfactors"]').val('105');
            $('input[type="text"][name="factors_text"]').val('None');
            $('input[type="hidden"][name="factors"]').val('16');
            $('input[type="text"][name="tafactors_text"]').val('None');
            $('input[type="hidden"][name="tafactors"]').val('360');


            $('select[name="reason_encounter"]').val('0');
            $('select[name="alcohol"]').val('99');
        });
    });
});
