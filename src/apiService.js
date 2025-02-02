const apiUrl = process.env.REACT_APP_API_URL;

export const multiplyNumbers = async (num1, num2) => {
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ num1, num2 }),
      });
  
      if (!response.ok) {
        throw new Error("Failed to fetch result");
      }
  
      const data = await response.json();
      return { result: data.result, error: null };
    } catch (error) {
      return { result: null, error: error.message || "Something went wrong" };
    }
  };
  