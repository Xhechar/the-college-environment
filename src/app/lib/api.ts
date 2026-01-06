const API = "/api";

type PostEmailArgs = {
  email: string,
}

export async function postEmail(data: PostEmailArgs) {
  if (!API) {
    return { success: false }
    // throw new Error("No API Yet.")
  }

  const body = {
    email: data.email
  }

  const config = {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(body)
  }

  const response = await fetch(API + "/waitlist", config);

  if (!response.ok) {
    throw new Error(`Error ${response.status} ${response.statusText}`)
  }

  const json = await response.json();

  return json;
}

export async function getTotal() {
  if (!API) return { count: 0 }

  const response = await fetch(API + "/waitlist");

  if (!response.ok) {
    throw new Error(`Error ${response.status} ${response.statusText}`)
  }

  const json = await response.json();

  return json;
}