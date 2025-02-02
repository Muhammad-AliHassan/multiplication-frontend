// Get the API URL from environment variables
const apiUrl = process.env.REACT_APP_API_URL;

// Function to multiply two numbers using a POST request to the backend API
export const multiplyNumbers = async (num1, num2) => {
  try {
    // Send a POST request to the backend with num1 and num2 in the request body
    const response = await fetch(apiUrl, {
      method: "POST", // HTTP method is POST
      headers: {
        "Content-Type": "application/json", // Set the content type to JSON
      },
      // Include the numbers as a JSON string in the body of the request
      body: JSON.stringify({ num1, num2 }),
    });

    // Check if the response was successful (status 2xx)
    if (!response.ok) {
      throw new Error("Failed to fetch result"); // Throw an error if the response is not ok
    }

    // Parse the JSON response from the backend
    const data = await response.json();
    // Return the multiplication result and no error
    return { result: data.result, error: null };
  } catch (error) {
    // Return null for result and the error message if something went wrong
    return { result: null, error: error.message || "Something went wrong" };
  }
};
