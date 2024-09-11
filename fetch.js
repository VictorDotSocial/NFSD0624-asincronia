import fetch from "node-fetch";

// Cómo hacer un fetch

// GET
fetch("https://google.com")
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((error) => {
    console.log(error);
  });

// FETCH es una PROMESA

const getGoogleInfo = async () => {
  const googleInfo = await fetch("https://google.com");
  console.log(googleInfo);
};

getGoogleInfo();

// POST
const userToCreate = {
  email: "federico@gmail.com",
  password: "3iwhrfiq3hr93w8i",
};

const createUser = async () => {
  const result = await fetch("http://localhost:3000/user", {
    method: "POST", // PUT, DELETE, PATCH
    headers: {
      "Content-Type:": "application/json",
    },
    body: JSON.stringify(userToCreate),
  });

  console.log("El resultado es:", result);
};

createUser();

// Pruebas

async function getUsersInfo() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log("Respuesta", data);
  } catch (error) {}
}

getUsersInfo();
