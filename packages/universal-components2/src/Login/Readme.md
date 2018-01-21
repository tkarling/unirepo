```jsx
const onSubmit = (username, password) =>
  alert("Username: " + username + " Password: " + password);
<Container>
  <Login title="Hi there! Please log-in" onSubmit={onSubmit} />
</Container>;
```
