import { Model } from "@vuex-orm/core";

export default class User extends Model {
  static entity = "bmi";

  // List of all fields (schema) of the post model. `this.attr` is used
  // for the generic field type. The argument is the default value.
  static fields() {
    return {
      id: this.attr(null),
      gender: this.attr(""),
      weight: this.attr(""),
      height: this.attr(),
      bmi: this.attr(0),
      bmiKeyword: this.attr(""),
      view: this.attr(""),
    };
  }
  static apiConfig = {
    actions: {
      all() {},
    },
  };
}
