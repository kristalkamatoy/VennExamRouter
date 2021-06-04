import BMIForm from '../../components/BMIForm/BMIForm'
import UpdateTable from '../../components/UpdateTable/UpdateTable'

export default {
    data() {
        return {
            bmiColor: { "Underweight": "blue", "Normal weight": "Green", "Overweight": "Orange", "Obese": "Red" },
            arrayTest: [{ gender: "", weight: "", height: "", bmi: "", bmiKeyword: "", view: "" }],
            selectedRow: null
        };
    },
    components: {
        BMIForm,
        UpdateTable
    },
    methods: {
        callUpdate(arrayVal) {
            this.arrayTest = arrayVal;
        },
        callUpdateForm(updateArray) {
            this.selectedRow = updateArray;
        }
    }
}