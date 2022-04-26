<script lang="typescript">
  import type { ITodo } from '$lib/_ITodo';
  export let todos: ITodo[];
</script>

<h2>Todo一覧</h2>
{#each todos as todo}
  <div>
    <a href={`todos/${todo.id}`}>{todo.title}</a>
  </div>
{/each}
