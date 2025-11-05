// Asynchronous 
// they delegate to node.js api in background, mean wile the JS moves on 
/*
Common Async operations:

Type                         | Example
-----------------------------|---------------------------------------------------
Timers                       | setTimeout(), setInterval()
Promises                     | Promise.resolve(), Promise.reject(), .then(), .catch()
Async functions              | async function getData() { await fetch(...) }
Fetch API                    | fetch("https://api.example.com")
Network requests             | XMLHttpRequest, axios.get()
File system (Node.js)        | fs.readFile(), fs.writeFile() (async versions)
Database queries             | MongoDB, MySQL queries, etc.
Event listeners              | button.addEventListener("click", ...)
Animation frames             | requestAnimationFrame()
Web Workers                  | Background threads for heavy computation
*/