import log from "../config/loggerConfig.js";

// Function to fetch data from a given URL with optional method and body.
export const fetchData = async (url, method = "GET", body = null) => {
  const options = {
    method,
    headers: {
      "Content-Type": "application/json", // Setting content type to JSON.
    },
  };

  if (body) {
    options.body = JSON.stringify(body); // Converting body to string if provided.
    log.info(`Sending ${method} request to ${url} with body:`, body, "\n");
  }

  const response = await fetch(url, options); // Making the fetch request.
  const data = await response.json(); // Parsing the response as JSON.

  if (response.ok) {
    log.info(`Received successful response from ${url}:`, data, "\n");
    return data;
  } else {
    const errorMessage = data.message || "Something went wrong";
    log.error(`Error Response from ${url}: ${errorMessage}\n`);
    throw new Error(JSON.stringify(errorMessage)); // Ensuring error is a string.
  }
};
