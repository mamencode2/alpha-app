const imgur = {
  clientId: "8194d516296793f"
};

export async function uploadGif(gifFile) {
  const formData = new FormData();
  formData.append("image", gifFile);

  const response = await fetch("https://api.imgur.com/3/image", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${imgur.clientId}`,
      "Content-Type": "multipart/form-data"
    },
    body: formData
  });

  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw new Error(response.statusText);
  }
}

//const gifFile = "path/to/gif.gif";

//const data = await uploadGif(gifFile);

//console.log(data);
