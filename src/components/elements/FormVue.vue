<template>
  <div class="card">
    <div class="card-header">
      <!-- {{ header }} -->
    </div>
    <div class="card-body">
      <form>
        <div class="group-inputbox">
          <slot name="inputbox"></slot>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.group-inputbox input {
  font-size: 1rem;
  height: 45px;
  width: 100%;
  padding: 8px 16px;
  display: inline-block;
  border-radius: 8px;
  border: 1px solid #ccc;
  color: #555;
}

.group-inputbox input:focus {
  outline: 1px solid #0086f3;
  border: none;
}

.group-inputbox label {
  display: block;
}
</style>
