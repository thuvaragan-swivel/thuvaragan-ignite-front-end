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
    return data; // Ensure it returns the entire response object
  } else {
    throw new Error(data.message || "Something went wrong");
  }
};
