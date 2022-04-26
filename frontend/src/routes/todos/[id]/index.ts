import { todos } from '$lib/Todos';
import type { RequestHandler } from './index.d';

export const get: RequestHandler = ({ params }) => {
  return {
    body: {
      todo: todos.find((todo) => todo.id.toString() === params.id)
    }
  };
};
