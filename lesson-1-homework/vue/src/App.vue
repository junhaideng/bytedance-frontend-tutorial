<template>
  <div>
    <div>
      <div class="title">支持自定义输入形式</div>
      <div>
        Fruit:
        <input type="text" />
        <button @click="handleClick">Submit</button>
      </div>
    </div>
    <br />

    <div>
      <div class="title">支持选择形式</div>
      <div>
        Fruit:
        <select name="fruit" id="fruit">
          <option value="Banana">Banana</option>
          <option value="Cherry">Cherry</option>
          <option value="Apple">Apple</option>
          <option value="Strawberry">Strawberry</option>
          <option value="Lemon">Lemon</option>
          <option value="Orange">Orange</option>
        </select>
        <button @click="handleClick">Submit</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  methods: {
    handleClick() {
      alert("submit successfully");
    },
  },
};
</script>

<style>
.title {
  font-size: 16px;
  font-weight: bold;
  padding-bottom: 2px;
}
</style>
