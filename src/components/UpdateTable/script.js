export default {
    props: ["arraytests"],
    data() {
        return {
            bmiColor: { "Underweight": "blue", "Normal weight": "Green", "Overweight": "Orange", "Obese": "Red" }
        };
    },
    methods: {
        updateForm(arrayVal) {
            this.$emit("updateForm", arrayVal);
        }
    },

}