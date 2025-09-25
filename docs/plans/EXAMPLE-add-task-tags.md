Title: Add Ability to Tag Tasks
File: docs/plans/add-task-tags.md

Context

- What: Add optional tags field to todos to allow categorization and better organization.
- Why: Users need to categorize and filter tasks by topics/projects for better organization.
- Scope: Todo interface, form components, filtering logic. No backend changes needed.

Feature

- Name: Task Tags
- Description: Users can add/remove multiple tags to tasks. Tags are displayed as colored badges and can be used for filtering. Tags are stored as string array in the todo object.

Required changes

- Types/Interfaces
  - @src/types/todo.ts: add optional `tags: string[]` field to Todo interface; add tag filter to TodoFilters interface
- Components
  - @src/components/AddTaskForm.tsx: add tag input field with add/remove functionality and tag suggestions
  - @src/components/TodoItem.tsx: display tags as colored badges below description
  - @src/components/TodoFilters.tsx: add tag filter dropdown with multi-select capability
  - @src/components/TagInput.tsx: new component for tag input with autocomplete and validation
  - @src/components/TagBadge.tsx: new component for displaying individual tags with consistent colors
- Hooks/Logic
  - @src/hooks/use-todos.ts: update addTodo to handle tags; add tag filtering logic to getFilteredTodos; add helper functions for tag management
