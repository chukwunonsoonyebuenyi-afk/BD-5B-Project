# Slide 1: Continuous Integration Pipeline
## Project: Node.js CI Workflow

This presentation breaks down our automated GitHub Actions workflow which handles clean installations, testing, and multi-version verification.

---

# Slide 2: Pipeline Triggers
* **Event Filters**: The pipeline is listening for code changes.
* **Target Branch**: It strictly watches the `main` branch.
* **Triggers**:
  * Any direct code `push` to `main`.
  * Any incoming `pull_request` targeting `main`.

---

# Slide 3: Execution Environment
* **Job Name**: `build`
* **Runner OS**: `ubuntu-latest`
* Runs inside an isolated, GitHub-hosted clean cloud virtual machine.

---

# Slide 4: The Matrix Strategy
```yaml
strategy:
  matrix:
    node-version: [18.x, 20.x, 22.x]
```
* **Parallel Execution**: Spawns **3 independent jobs** simultaneously.
* **Cross-Version Testing**: Automatically tests code stability against Node.js versions 18, 20, and 22.

---

# Slide 5: Initial Setup Steps
1. **Checkout Code**: Uses `actions/checkout@v4` to pull our repository files onto the runner.
2. **Environment Configuration**: Uses `actions/setup-node@v4` to dynamically inject the correct matrix Node version.
3. **Optimized Caching**: Explicitly caches `npm` global dependencies to speed up subsequent workflow runtimes.

---

# Slide 6: Build & Test Lifecycle
* **Step 1 (`npm ci`)**: Performed instead of `npm install` for a guaranteed clean, deterministic dependency tree based strictly on our lockfile.
* **Step 2 (`npm run build`)**: Executes the build step only if defined inside our package configuration (`--if-present`).
* **Step 3 (`npm test`)**: Executes our unit and integration test suite to prevent breaking code from landing in production.
