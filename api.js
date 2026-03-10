fetch("https://jsonplaceholder.typicode.com/comments")
  .then((response) => {

    // The response is not JSON yet, it's a Response object.
    // We need to call the .json() method to parse the body text as JSON.
    if (response.ok == false) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
   /* 
    data.forEach(element => {
        console.log(element)
    });
*/
  })
  .catch((error) => {
    console.error("There has been a problem with your fetch operation:", error);
  });

// POST - Create a new resource
fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({ title: "New Post", body: "Content", userId: 1 })
})

.then(res => res.json())

.then(data => console.log("Created:", data));



















// PUT - Replace entire resource
fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: 1, title: "Updated", body: "New content", userId: 1 })
})
.then(res => res.json())
.then(data => console.log("Updated:", data));



// PATCH - Partial update
fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: "Partially Updated" })
})
.then(res => res.json())
.then(data => console.log("Patched:", data));



// DELETE - Remove resource
fetch("https://jsonplaceholder.typicode.com/posts/1", {

    method: "DELETE"
})
.then(res => res.json())
.then(data => console.log("Deleted:", data));


// GET - Already shown above, explicit example:
fetch("https://jsonplaceholder.typicode.com/posts/1")
.then(res => res.json())
.then(data => console.log("Retrieved:", data));
