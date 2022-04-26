<div>作成</div>
<form
  action="/todos/new"
  method="post"
  on:submit|preventDefault={async (e) => {
    const form = e.currentTarget;
    const data = new FormData(form);

    await fetch(form.action, {
      method: form.method,
      headers: {
        accept: 'application/json'
      },
      body: data
    });
  }}
>
  <input name="title" aria-label="Add todo" placeholder="+ tap to add a todo" />
</form>
