<template>
  <div>
    <div>従業員数：{{ employeeCount }}人</div>
    <div class="row">
      <table class="striped">
        <thead>
          <tr>
            <th>名前</th>
            <th>入社日</th>
            <th>扶養人数</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="employee of employees" v-bind:key="employee.id">
            <td>
              <nuxt-link :to="`/employee/${employee.id}`">{{
                employee.name
              }}</nuxt-link>
            </td>
            <td>{{ employee.hireDate }}</td>
            <td>{{ employee.dependentsCount }}人</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { useStore } from "~/store/store";
import { Employee } from "~/types/employee";
@Component
export default class XXXComponent extends Vue {
  // ストア
  private store = useStore();

  created(): void {
    // actionsの呼び出し
    this.store.getEmployeeList();
  }

  get employeeCount(): number {
    return this.store.totalEmployeeCount;
  }

  get employees(): Array<Employee> {
    return this.store.employees as any;
  }
}
</script>

<style scoped></style>
