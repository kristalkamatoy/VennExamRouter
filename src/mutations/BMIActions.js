import BMI from "../store/BMI";
export default class BMIActions {
  getAll() {
    return BMI.all();
  }

  create(data) {
    let newData = new BMI();
    newData.height = data.height;
    newData.weight = data.weight;
    newData.bmi = data.bmi;
    newData.bmiKeyword = data.bmiKeyword;
    newData.gender = data.gender;
    newData.$save();
  }

  getById(id) {
    return BMI.find(id);
  }

  getAllMale() {
    return BMI.query()
      .where("gender", "Male")
      .get();
  }
}
