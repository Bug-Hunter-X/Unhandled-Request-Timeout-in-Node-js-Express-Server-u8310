# Unhandled Request Timeout in Node.js Express Server

This repository demonstrates a common but subtle error in Node.js Express servers: unhandled request timeouts.  When a request takes longer to process than the default timeout of the underlying HTTP connection, the connection might be closed prematurely by the client or the server, leading to errors that are not always easy to diagnose.

## The Bug

The `bug.js` file contains an Express server with a route that simulates a long-running task. If the task takes longer than the default timeout (often around 120 seconds), the client will likely receive an error, but the server might not log a clear error message.

## The Solution

The `bugSolution.js` file provides a solution that addresses the timeout issue by explicitly setting a timeout using `res.setTimeout()`. This ensures that the server gracefully handles long-running requests and avoids unexpected errors.