import BMIForm from "../../components/BMIForm/BMIForm";
import UpdateTable from "../../components/UpdateTable/UpdateTable";
import BMIIActions from "../../mutations/BMIActions";
export default {
  name: "Male",
  data() {
    return {
      bmiActions: new BMIIActions(),
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
    async callUpdate(newBmi) {
      await this.bmiActions.create(newBmi);
      this.arrayTest = this.bmiActions.getAllMale();
      if (this.arrayTest.length > 11) {
        this.arrayTest.splice(1, 1);
      }
    },
    callUpdateForm(id) {
      let bmiObj = this.bmiActions.getById(id);
      this.$refs.bmiForm.callUpdate(bmiObj);
    },
    clearData() {
      this.$confirm("Are you sure you want to delete all gathered data?").then(
        () => {
          this.bmiActions.clearAllMale();
        }
      );
    },
  },
  async created() {
    this.arrayTest = this.bmiActions.getAllMale();
  },
};
