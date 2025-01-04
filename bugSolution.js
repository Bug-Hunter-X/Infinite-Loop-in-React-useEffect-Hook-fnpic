```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct usage: adding count to dependency array prevents infinite loop
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [count]); // Added count to dependency array

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
```