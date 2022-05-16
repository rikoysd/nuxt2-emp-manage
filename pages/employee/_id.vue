<template>
  <div class="container">
    <div class="row">
      <fieldset>
        <legend>従業員情報</legend>
        <table>
          <tr>
            <th nowrap>従業員名</th>
            <td>
              <span>{{ currentEmployee.name }}</span>
            </td>
          </tr>
          <tr>
            <th nowrap>写真</th>
            <td>
              <img v-bind:src="currentEmployeeImg" />
            </td>
          </tr>
          <tr>
            <th nowrap>性別</th>
            <td>
              <span>{{ currentEmployee.gender }}</span>
            </td>
          </tr>
          <tr>
            <th nowrap>入社日</th>
            <td>
              <span>{{ currentEmployee.hireDate }}</span>
            </td>
          </tr>
          <tr>
            <th nowrap>メールアドレス</th>
            <td>
              <span>{{ currentEmployee.mailAddress }}</span>
            </td>
          </tr>
          <tr>
            <th nowrap>郵便番号</th>
            <td>
              <span>{{ currentEmployee.zipCode }}</span>
            </td>
          </tr>
          <tr>
            <th nowrap>住所</th>
            <td>
              <span>{{ currentEmployee.address }}</span>
            </td>
          </tr>
          <tr>
            <th nowrap>電話番号</th>
            <td>
              <span>{{ currentEmployee.telephone }}</span>
            </td>
          </tr>
          <tr>
            <th nowrap>給料</th>
            <td>
              <span>{{ currentEmployee.salary }}円</span>
            </td>
          </tr>
          <tr>
            <th nowrap>特性</th>
            <td>
              <span>{{ currentEmployee.characteristics }}</span>
            </td>
          </tr>
          <tr>
            <th nowrap>扶養人数</th>
            <td>
              <div class="input-field col s12">
                <!-- <div class="error">{{ errorMessage }}</div> -->
                <input
                  id="dependentsCount"
                  type="text"
                  class="validate"
                  value="3"
                  required
                />
              </div>
            </td>
          </tr>
        </table>

        <button class="btn btn-register waves-effect waves-light" type="button">
          更新
        </button>
      </fieldset>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { useStore } from "~/store";
import { Employee } from "~/types/employee";
@Component
export default class XXXComponent extends Vue {
  private store = useStore();
  private employeeId = 0;
  private currentEmployee = new Employee(
    0,
    "",
    "",
    "",
    new Date(),
    "",
    "",
    "",
    "",
    0,
    "",
    0
  );
  private currentEmployeeImg = "";

  created(): void {
    // actionの呼び出し
    this.store.getEmployeeList();

    // 従業員Idを取得
    // this.$route.paramsはオブジェクトで返ってくるため、プロパティの指定が必要
    this.employeeId = Number(this.$route.params.id);

    // 従業員情報の取得
    this.currentEmployee = this.employeeById as any;

    // 従業員画像の取得
    this.currentEmployeeImg = `http://153.127.48.168:8080/ex-emp-api/img/${this.currentEmployee.image}`;
  }

  get employeeById() {
    return this.store.employees.filter(
      (employee) => employee.id === this.employeeId
    )[0];
  }
}
</script>

<style scoped></style>
