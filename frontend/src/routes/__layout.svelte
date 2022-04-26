<script lang="ts">
  import logo from '$lib/logo.png';
</script>

<header>
  <div class="corner">
    <a href="/">
      <img src={logo} alt={'Svelte Todos'} />
    </a>
  </div>

  <nav>
    <ul>
      <li><a sveltekit:prefetch href="/">Home</a></li>
      <li>
        <a sveltekit:prefetch href="/todos">Todos</a>
      </li>
      <li>
        <a sveltekit:prefetch href="/todos/new">Add Todo</a>
      </li>
    </ul>
  </nav>
</header>

<main>
  <slot />
</main>

<style>
  main {
    max-width: 800px;
    margin: 10px auto;
  }

  header {
    display: flex;
    justify-content: space-between;
  }

  .corner img {
    width: 5em;
    height: 5em;
    object-fit: contain;
  }

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ul {
    position: relative;
    padding: 0;
    margin: 0;
    height: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
  }

  li {
    position: relative;
    height: 100%;
  }

  nav a {
    display: flex;
    height: 100%;
    align-items: center;
    padding: 0 1em;
    font-weight: 700;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    text-decoration: none;
    transition: color 0.2s linear;
  }
</style>
