import axios from "axios";
import { defineStore } from "pinia";
import { Employee } from "~/types/employee";

export const useStore = defineStore("store", {
  state: () => {
    return {
      totalEmployeeCount: 0,
      employees: new Array<Employee>(),
    };
  },
  actions: {
    async getEmployeeList() {
      const response = await axios.get(
        "http://153.127.48.168:8080/ex-emp-api/employee/employees"
      );
      // console.dir(JSON.stringify(response));
      const payload = response.data;
      this.totalEmployeeCount = payload.totalEmployeeCount;
      for (let employee of payload.employees) {
        this.employees.push(
          new Employee(
            employee.id,
            employee.name,
            employee.image,
            employee.gender,
            employee.hireDate,
            employee.mailAddress,
            employee.zipCode,
            employee.address,
            employee.telephone,
            employee.salary,
            employee.characteristics,
            employee.dependentsCount
          )
        );
      }
    },
  },
  getters: {},
});
