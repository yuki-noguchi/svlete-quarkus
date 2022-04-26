<script lang="ts">
  import type { ITodo } from '$lib/_ITodo';
  export let todo: ITodo;
</script>

{todo.id}
{todo.title}
{todo.completed}
