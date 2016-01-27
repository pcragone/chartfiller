define([
    "jquery",
    "knockout",
    "util",
], function($, ko, Util) {

    var root = (typeof window === 'object' && window) || this;

    root.ko = ko;

    var MyApp = function App(value) {
        var self = this;
        self.answers = {
            PRMAIN_cc: '',
            PRMAIN_hpi: '',
            scene_description: '',
            PRMAIN_ccduration: '',
            PRMAIN_ccdurunits: '',
            PRMAIN_belongings: '',
            stretcherPurpose: '',
            PRMAIN_first_on_scene: '1',
            PRMAIN_als_assessment: '2',
            pt_moved_via: '4880',
            pt_position: '4910',
            pt_moved_from: '4935',
            ptLOC: '1',
            strokeScale: '3275',
            pg3headFindings: '',
            airwayComments: '',
            /** HERE */
            cv_comments: '',
            RESP_COMMENTS: '',
            PULSE_RAD_L: '',
            PULSE_RAD_R: '',
            PULSE_CAROTID_L:'',
            PULSE_CAROTID_R:'',
            PULSE_FEM_L: '',
            PULSE_FEM_R: '',
            PULSE_DORS_L: '',
            PULSE_DORS_R: ''
            head_comments: '',
            neck_comments: '',
            chest_comments: '',
            back_comments: '',
            ap_appearance: '',
            ap_palpation: '',
            ap_bowel_sounds: '',
            ap_findings: '',
            ex_comments: '',
            ex_skin_findings: '',
            ex_restraints: '',
        };

        for (var the_key in self.answers) {
            if (the_key && self.answers.hasOwnProperty(the_key)) {

                self.answers[the_key] = ko.computed({
                    read: function() {
                        var value = localStorage.getItem(the_key, '');
                        if (value == 'undefined') {
                            value = '';
                        }
                        console.info("Read[" + the_key + "] = " + value);
                        return value
                    },
                    write: function(value) {
                        console.log("Write["+the_key+"] = '" + value + "'");
                        localStorage.setItem(the_key, value);
                    }
                });

            }
        }

        this.value = ko.observable(value);
        this.setValue = ko.computed({
            read: this.value,
            write: function(value) {
                if (!isNaN(value)) {
                    this.value(parseFloat(value));
                }
            },
            owner: this
        });

        var self = this;
        $('#btnSave').click(function() {
            var data = Util.getForm();

            for (var key in data) {
                if (key && data.hasOwnProperty(key)) {
                    var value = data[key];
                    console.log("Save[" + key + "] = " + value);
                    localStorage[key] = value;
                }
            }
        });

    };

    return MyApp;
});