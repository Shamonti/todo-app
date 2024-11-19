import { createClient } from '@/utils/supabase/server';

export default async function Todos() {
  const supabase = await createClient();

  // Fetch todos with error handling
  const { data: todos } = await supabase.from('todos').select('*');

  return (
    <div>
      <h1>Todo List</h1>
      <pre>{JSON.stringify(todos, null, 2)}</pre>
    </div>
  );
}
