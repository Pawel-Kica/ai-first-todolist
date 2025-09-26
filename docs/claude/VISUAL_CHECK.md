# VISUAL CHECK CHECKLIST

1. Run app -> `npm run dev`
2. Identify what changed and requirements -> review the modified components/pages and provided requirements/context
3. Run a visual check to ensure that the changes match the requirements.
4. If user stories provided -> dilligently run tests for them
5. Capture evidence -> Take full page screenshot at desktop viewport (1440px) of each changed view

# END OF VISUAL CHECK

1. Stop app

# Context

## Playwright MCP Integration

### Essential Commands for UI Testing

```javascript
// Navigation & Screenshots
mcp__playwright__browser_navigate(url); // Navigate to page
mcp__playwright__browser_take_screenshot(); // Capture visual evidence
mcp__playwright__browser_resize(width, height); // Test responsiveness

// Interaction Testing
mcp__playwright__browser_click(element); // Test clicks
mcp__playwright__browser_type(element, text); // Test input
mcp__playwright__browser_hover(element); // Test hover states

// Validation
mcp__playwright__browser_console_messages(); // Check for errors
mcp__playwright__browser_snapshot(); // Accessibility check
mcp__playwright__browser_wait_for(text / element); // Ensure loading
```
