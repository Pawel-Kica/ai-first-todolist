Title: Task Tagging with Independent Tag Management

Context

- What: Add task tagging functionality with independent tag management, editable tags with IDs, and 9-color system for visual organization
- Why: Improve task categorization with persistent, editable, colorful tags that exist independently of tasks
- Scope: In - independent tag CRUD operations, color assignment (9 standard colors), task tagging, tag management modal, tag filtering. Out - custom colors, tag statistics, complex tag hierarchies

Simple user stories

Task-related:

- As a user, I can add one or more existing tags to a task when creating it
- As a user, I can create a new tag while creating a task (with default or random color)
- As a user, I can add or remove tags from existing tasks
- As a user, I can see all assigned tags displayed as colored badges on each task
- As a user, I can filter tasks by specific tags

Tag management:

- As a user, I can create a new tag independently without creating a task
- As a user, I can access a tag management modal/UI to manage all tags
- As a user, I can edit a tag's name and color
- As a user, I can delete tags (with confirmation if used by tasks)
- As a user, I can assign one of 9 standard colors to any tag
- As a user, I can see all my tags persist even when tasks using them are deleted

Implementation Notes:

- Tags stored in localStorage with unique IDs, separate from tasks
- Tasks reference tags by ID, not name, to support tag editing
- 9 predefined color palette for consistent visual design
- Tag management modal with create/edit/delete functionality
