export default {
  props: ["arraytests"],
  data() {
    return {
      bmiColor: {
        Underweight: "blue",
        "Normal weight": "Green",
        Overweight: "Orange",
        Obese: "Red",
      },
    };
  },
  methods: {
    updateForm(id) {
      this.$emit("updateForm", id);
    },
  },
  async created() {
    this.$store.state.loadBMI;
  },
};
