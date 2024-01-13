<script>
  import { items } from "../stores";

  $: itemCount = $items.length; //il dollaro rende possibile l'update
  $: completedItemCount = $items.filter((item) => item.completed).length;
</script>

<div class="header">
  <span>Tamba's To-Do List</span>
  <span>{completedItemCount}/{itemCount}</span>
</div>

<style>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    color: #ffffff;
    font-weight: bold;
    font-size: 1.5em;
    background: rgba(0, 0, 0, 0.1);
  }
</style>
