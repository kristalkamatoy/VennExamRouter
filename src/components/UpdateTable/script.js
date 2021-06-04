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
    updateForm(bmiObj) {
      this.$emit("updateForm", bmiObj);
    },
  },
};
