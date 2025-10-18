"use client";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

// get
// post
// put
// delete

function Page() {
  const [users, setUsers] = useState();

  useEffect(() => {
    document.title = "Api";

    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(data => data.json())
    // .then(data => setUsers(data))
    // .catch(err => console.log(err))

    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((data) => setUsers(data.data))
      .catch((err) => console.log(err));

    // axios.post('https://jsonplaceholder.typicode.com/users', {
    //     name: users.name,
    //     phone: users.phone,
    //     email: users.email
    // })
  }, []);

  if (!users) return <h1>loading.....</h1>;
  console.log(users);

  return (
    <div>
      <Image
        src="/img/window.svg"
        alt="window"
        loading="lazy"
        width={500}
        height={500}
      />
    </div>
  );
}

export default Page;
