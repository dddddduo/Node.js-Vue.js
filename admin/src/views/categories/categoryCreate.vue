<template>
  <div id="create">
    <el-card>
      <el-form label-width="100px" @submit.prevent="save">
        <el-form-item label="名称">
          <el-input v-model="name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" native-type="submit">提交</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  setup() {
    const state = reactive({
      name: ''
    })

    // 提交
    const save = () => {
      console.log(state.name)
    }

    return {
      ...toRefs(state),
      save
    }
  }
}
</script>