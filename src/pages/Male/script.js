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
      this.arrayTest.push(newBmi);

      if (this.arrayTest.length > 11) {
        this.arrayTest.splice(1, 1);
      }
    },
    callUpdateForm(bmiObj) {
      this.$refs.bmiForm.callUpdate(bmiObj);
    },
  },
};
