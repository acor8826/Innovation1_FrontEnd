
  # Project Management Dashboard Design

  This is a code bundle for Project Management Dashboard Design. The original project is available at https://www.figma.com/design/jKSzHBuKVSRIWrva88ZOMi/Project-Management-Dashboard-Design.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

  ## API Client Best Practices
  > [!IMPORTANT]
  > **Trailing Slashes**: Always append a trailing slash to API requests for collection endpoints (e.g., `/projects/`, `/tasks/`) to avoid 307 Temporary Redirects. Redirects can cause token loss and 500 errors in production.

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

  ## Common Deployment Errors

  ### 1. Mixed Content Error
  **Error:** `Mixed Content: The page at 'https://...' was loaded over HTTPS, but requested an insecure resource 'http://...'`
  
  **Cause:**
  - The frontend API client is falling back to `http` because `VITE_API_URL` is missing or incorrect.
  - The backend is redirecting a request (e.g., adding a trailing slash) and returning an `http` Location header because it's running behind a proxy (Cloud Run).

  **Fix:**
  - **Frontend:** Ensure `VITE_API_URL` is set to the `https` backend URL in `.env` or build configuration.
  - **Backend:** Use `HTTPSRedirectMiddleware` to rewrite `http` redirects to `https`.

  ### 2. CORS Error
  **Error:** `Access to fetch at '...' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present`

  **Cause:**
  - The backend does not explicitly allow the frontend's origin (domain).

  **Fix:**
  - Add the frontend URL (e.g., `https://innovation1-frontend-....run.app`) to the `allow_origins` list in `backend/main.py`.
  - Ensure `CORSMiddleware` is configured correctly in FastAPI.