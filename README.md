
  # Project Management Dashboard Design

  This is a code bundle for Project Management Dashboard Design. The original project is available at https://www.figma.com/design/jKSzHBuKVSRIWrva88ZOMi/Project-Management-Dashboard-Design.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

  ## API Client Best Practices
  > [!IMPORTANT]
  > **Trailing Slashes**: Always append a trailing slash to API requests for collection endpoints (e.g., `/projects/`, `/tasks/`) to avoid 307 Temporary Redirects. Redirects can cause token loss and 500 errors in production.
  
  Example:
  ```typescript
  // Correct
  return this.request<any[]>('/projects/');
  
  // Incorrect (causes redirect)
  return this.request<any[]>('/projects');
  ```
  