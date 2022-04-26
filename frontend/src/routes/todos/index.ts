import { todos } from '$lib/Todos';
import type { RequestHandler } from './index.d';

export const get: RequestHandler = () => {
  return {
    body: {
      todos: todos
    }
  };
};
