Title: Add Ability to Tag Tasks
File: docs/plans/add-task-tags.md

Context

- What: Add optional tags field to todos to allow categorization and better organization.
- Why: Users need to categorize and filter tasks by topics/projects for better organization.
- Scope: Todo interface, form components, filtering logic. No backend changes needed.
- Note: Tags are a separate entity that can exist without tasks; tasks can exist without tags.

Feature

- Name: Task Tags
- Description: Users can add/remove multiple tags to tasks. Tags are displayed as colored badges and can be used for filtering. Tags are a separate entity and tasks reference tags by id. Tags can exist without tasks; tasks can exist without tags.

Required changes

- Types/Interfaces
  - @src/types/tag.ts: new `Tag` interface with `id: string`, `name: string`, and optional `color?: string` for consistent display
  - @src/types/todo.ts: add optional `tagIds: string[]` field to `Todo` (replace any existing `tags` string array); update `TodoFilters` to support filtering by tag ids
- Components
  - @src/components/AddTaskForm.tsx: add tag input field with add/remove functionality; allow selecting existing tags and creating new tags
  - @src/components/TodoItem.tsx: display tags as colored badges below description (resolve from `tagIds` to tag objects)
  - @src/components/TodoFilters.tsx: add tag filter dropdown with multi-select capability (working with tag ids)
  - @src/components/TagInput.tsx: new component for tag input with autocomplete and validation; supports selecting existing tags and creating new ones
  - @src/components/TagBadge.tsx: new component for displaying individual tags with consistent colors
- Hooks/Logic
  - @src/hooks/use-tags.ts: new hook providing CRUD operations for tags with localStorage persistence (e.g., `getTags`, `addTag`, `updateTag`, `deleteTag`)
  - @src/hooks/use-todos.ts: update addTodo/editTodo to handle `tagIds`; add tag filtering logic to `getFilteredTodos` based on selected tag ids; ensure behavior is correct when tasks have no `tagIds`
