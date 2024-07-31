export const fetchData = async (url, method = "GET", body = null) => {
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  const response = await fetch(url, options);
  const data = await response.json();

  if (response.ok) {
    return data;
  } else {
    const errorMessage = data.message || "Something went wrong";
    throw new Error(JSON.stringify(errorMessage)); // Ensure error is a JSON string
  }
};
