import { body, validationResult } from "express-validator";

function bonusTime(salary, bonus) {
  // your code here
  if (bonus) {
    salary = salary * 10;
    return `£${salary}`;
  }
  return salary;
}
