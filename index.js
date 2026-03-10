// ============================================
// Why Do We Need Asynchronous Operations?
// ============================================

// Example 1: Synchronous Operation (Blocking)
// This would freeze the UI

console.log("=== Synchronous (Blocking) Example ===");
console.log("Start");
// Imagine this is a large image download
for (let i = 0; i < 1000000000; i++) {} // Blocks execution
console.log("End - UI would be frozen during the loop");

console.log("\n=== Asynchronous with Promises ===");










// Example 2: Creating a Promise
const fetchImage = new Promise((resolve, reject) => {

    console.log("Fetching image from server...");  // imagine an api call here 
    
    setTimeout(() => {
        const success = true;
        if (success) {
            resolve("Image downloaded successfully!");
        } else {
            reject("Failed to download image.");
        }
    }, 2000);
});



// Example 3: Consuming a Promise with .then() and .catch()
fetchImage
    .then((result) => {
        console.log(result); // Executes when promise resolves
    })
    .catch((error) => {
        console.error(error); // Executes if promise rejects
    });

console.log("Fetching in background - UI remains responsive!");































// Example 4: Chaining Multiple Promises

console.log("\n=== Chaining Promises ===");

const step1 = new Promise((resolve) => {
    setTimeout(() => {
        console.log("Step 1 complete");
        resolve("Data from step 1");
    }, 1000);
});



step1
    .then((data) => {
        console.log("Received:", data);
        return "Data from step 2"; // Can chain another .then()
    })
    .then((data) => {
        console.log("Received:", data);
        return "Data from step 3";
    })
    .then((data) => {
        console.log("Received:", data);
    })
    .catch((error) => {
        console.error("Error:", error);
    });



// Example 5: Promise that Rejects
console.log("\n=== Rejected Promise ===");

const apiCall = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Server error: 500");
    }, 1500);
});

apiCall
    .then((response) => {
        console.log("Success:", response);
    })
    .catch((error) => {
        console.error("Caught error:", error);
    });