var Medications = {
    'Amiodarone': '01',
    'Adenosine': '02'
}

function update_med_list() {
    var selectBox = $('select[name="new_drug[name]"]');

    for (var name in Medications) {
        if (name && Medications.hasOwnProperty(name)) {
            var option = $('<option/>');
            option.val(Medications[name]);
            option.text(name);
            selectBox.append(option);
        }
    }
}

var MedMacro = {
    nick: '',
    name: '',
    route: '',
    dose: '',
    units: ''

};


$(function(){
    update_med_list();
});