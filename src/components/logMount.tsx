const LogMount = () => {
  return (
    <div className="App-log-mount">
      <div>Component mounted at: {new Date().toLocaleTimeString()}</div>
    </div>
  );
};

export default LogMount;
