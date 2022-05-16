// このストアはモジュールモードで記述しています
// モジュールモード... 内容を複数のファイルで管理
import axios from "axios";
import { Employee } from "~/types/employee";

// state
export const state = () => ({
  employees: [],
});

// mutations
export const mutations = {
  setEmployeeList(state, payload) {
    for (let employee of payload) {
      state.employees.push(
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
};

// actions
export const actions = {
  async getEmployeeList({ commit }) {
    const response = await axios.get(
      "http://153.127.48.168:8080/ex-emp-api/employee/employees"
    );
    const payload = response.data;

    // mutationsの呼び出し
    commit("setEmployeeList", { employeeList: payload });
  },
};

// getters
export const getters = {
  getEmployees(state) {
    console.log(state.employees);
    return state.employees;
  },
};
