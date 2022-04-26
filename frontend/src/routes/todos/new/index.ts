import { todos } from '$lib/Todos';
import type { RequestHandler } from './index.d';

export const post: RequestHandler = async ({ request }) => {
  const form = await request.formData();

  if (form.get('title') === null) {
    return {
      status: 400
    };
  }

  todos.push({
    id: todos[todos.length - 1].id + 1,
    title: form.get('title')!.toString(),
    completed: false
  });
  return {
    status: 201
  };
};
