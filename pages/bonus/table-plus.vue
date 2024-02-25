<template>
  <div>
    <b-card>
      <b-table-simple striped hover>
        <b-thead>
          <b-tr>
            <b-th>No.</b-th>
            <b-th>Title</b-th>
            <b-th>Description</b-th>
            <b-th>Created Date</b-th>
          </b-tr>
        </b-thead>
        <b-tbody>
            <b-tr v-for="item in items" :key="item.id">
              <b-td>{{ item.no }}</b-td>
              <b-td>{{ item.title }}</b-td>
              <b-td>{{ item.desc }}</b-td>
              <b-td>{{ item.date }}</b-td>
            </b-tr>
        </b-tbody>
      </b-table-simple>
    </b-card>
  </div>
</template>

<script lang='ts'>
import { defineComponent, onMounted, ref } from '@nuxtjs/composition-api'
import jsonData from '~/static/table-plus.json';
import { Column, DataItem, Item, JsonData } from '~/types/table-plus'

export default defineComponent({
  name: 'TablePlus',
  layout: 'table',
  setup() {
    const items = ref<Item[]>([]);

    const { columns, data } = jsonData as JsonData;

    const transformData = () => {
      if(!data || !Array.isArray(data) || data.length === 0) return;
      if(!columns || !Array.isArray(columns) || columns.length === 0) return;

      data.forEach((item: DataItem) => {
        const obj = {} as Item;
        columns.forEach((column: Column, index: number) => {
          obj[column.key] = item[index]
        });
        items.value.push(obj);
      });
    }

    onMounted(() => {
      transformData();
    });

    return {
      items
    }
  }
});

</script>