# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React applications: an infinite loop caused by an improperly used `useEffect` hook.  The `useEffect` hook in the `MyComponent` component attempts to update the `count` state within the hook itself without including `count` in the dependency array, leading to an infinite re-render loop.

## How to Reproduce

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npm start` to start the development server.
5. Observe the error in your browser's console.

## Solution

The solution involves correctly managing the dependencies in the `useEffect` hook. The dependency array should include all state variables or props that the effect depends on.