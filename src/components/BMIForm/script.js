export default {
    name: "BMIForm",
    props: ["arraytests", "gender"],
    data() {
        return {
            bmiColor: { "Underweight": "blue", "Normal weight": "Green", "Overweight": "Orange", "Obese": "Red" },
            activeColor: {
                color: '',
                fontSize: '15px'
            },
            randomNum: "",
            weight: "",
            arrayTest: [{ gender: "", weight: "", height: "", bmi: "", bmiKeyword: "", view: "", bmiColor: "" }],
            cm: null,
            inch: null,
            kg: 0,
            lbs: 0,
            imclicked: ''
        };
    },

    computed: {
        localbmi() {
            let weight = parseFloat(this.kg)
            let cm = parseFloat(this.cm) / 100

            return (weight / (cm * cm)).toFixed(2)
        },
        // bmiimage() {
        //     if (parseInt(this.localbmi) < 18.9) {
        //         return this.gender === "Male" ? require("./images/Male_Under.png") : require("./images/Female_Under.png");
        //     } else if (
        //         parseInt(this.localbmi) >= 18.9 &&
        //         parseInt(this.localbmi) < 25
        //     ) {
        //         return this.gender === "Male" ? require("./images/Male_Normal.png") : require("./images/Female_Normal.png");
        //     } else if (
        //         parseInt(this.localbmi) >= 25 &&
        //         parseInt(this.localbmi) < 30
        //     ) {
        //         return this.gender === "Male" ? require("./images/Male_Over.png") : require("./images/Female_Over.png");
        //     } else {
        //         return this.gender === "Male" ? require("./images/Male_Obese.png") : require("./images/Female_Obese.png");
        //     }
        // },
        bmi() {

            if (parseInt(this.localbmi) < 18.9) {
                return "Underweight";
            } else if (
                parseInt(this.localbmi) >= 18.9 &&
                parseInt(this.localbmi) < 25
            ) {
                return "Normal weight";
            } else if (

                parseInt(this.localbmi) >= 25 &&
                parseInt(this.localbmi) < 30
            ) {
                return "Overweight";
            } else {
                return "Obese";
            }
        },

    },
    methods: {
        submit() {
            this.arrayTest.push({ 'gender': this.$props.gender, 'weight': this.kg + ' kg', 'height': this.cm + ' cm', 'bmi': this.localbmi, 'bmiKeyword': this.bmi, 'view': "view" });

            if (this.arrayTest.length > 11) {
                this.arrayTest.splice(1, 1)
            }
            this.$emit("updateValue", this.arrayTest);
        },
        callUpdate(arrayVal) {
            this.kg = arrayVal.weight;
            this.gender = arrayVal.gender;
            this.cm = arrayVal.height;
            this.localbmi = arrayVal.bmi;
        },
        clear() {
            this.kg = '';
            this.gender = '';
            this.cm = '';
            this.localbmi = '';
        }
    },
    beforeMount() {
        alert('Hi, ' + this.$props.gender + '! Welcome to BMI Calculator')
    },
    watch: {
        inch(value) {
            this.cm = value * 2.54;
        },
        cm(value) {
            this.inch = (value / 2.54).toFixed(2);
        },

        kg() {
            this.lbs = this.kg ? (this.kg * 2.20462).toFixed(2) : 0;
        },
        lbs() {
            this.kg = this.lbs ? (this.lbs / 2.20462).toFixed(2) : 0;
        }
    },
    updated() {
        if (this.$props.arraytests.weight.length) {
            this.kg = parseFloat(this.$props.arraytests.weight.replace('kg', ''));
            this.cm = parseFloat(this.$props.arraytests.height.replace('cm', ''));
        }

    },
};