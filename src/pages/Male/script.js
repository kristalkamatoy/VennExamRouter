import BMIForm from "../../components/BMIForm/BMIForm";
import UpdateTable from "../../components/UpdateTable/UpdateTable";

export default {
    name: "Male",
    data() {
        return {
            bmiColor: {
                Underweight: "blue",
                "Normal weight": "Green",
                Overweight: "Orange",
                Obese: "Red",
            },
            arrayTest: [],
        };
    },
    components: {
        BMIForm,
        UpdateTable,
    },
    methods: {
        callUpdate(newBmi) {
            this.$store.dispatch("submitMale", newBmi);
            this.arrayTest = this.$store.state.malebmi
            if (this.arrayTest.length > 11) {
                this.arrayTest.splice(1, 1);
            }
        },
        callUpdateForm(bmiObj) {
            this.$refs.bmiForm.callUpdate(bmiObj);
        },
        clearData() {
            this.$confirm("Are you sure you want to delete all gathered data?").then(() => {
                this.$store.dispatch("clearMale");
                this.arrayTest = ""
            });

        }
    },
    async created() {
        this.arrayTest = this.$store.state.malebmi
    },
};