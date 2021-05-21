<template>
  <div class="base-task" @click="$emit('click')">
    <VAvatar left>
      <VIcon>
        {{ completed ? 'mdi-checkbox-marked-outline' : 'mdi-checkbox-blank-outline' }}
      </VIcon>
    </VAvatar>
    <div :class="{'base-task__label': true, 'base-task__label--completed': completed}">
      {{ label }}
    </div>
    <VBtn icon @click="$emit('delete')">
      <VIcon>
        mdi-delete
      </VIcon>
    </VBtn>
  </div>
</template>

<script>
export default {
  name: 'BaseTask',
  props: {
    label: String,
    completed: Boolean,
  },
};
</script>

<style lang="scss">
@import "BaseTask";
</style>
