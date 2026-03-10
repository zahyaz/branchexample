

fetch("https://timeapi.io/api/v1/time/current/zone?timezone=Europe%2FAmsterdam")
.then(res => {
    
    
    console.log(res.status)
    return res.json()



}


)
.then(data => console.log("Retrieved:", data));






async function postData(url , data) {

  try {

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseData = await response.json();
    console.log("Success:", responseData);
    return responseData;
  } 
  
  
  catch (error) {
    console.error("Error:", error);
  }
}