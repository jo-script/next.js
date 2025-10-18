"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ButtonUi from "./components/button";
import { Bar, Doughnut, Line, } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement,
} from "chart.js";

// Register needed components globally
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement
);


export default function Home() {

  let router = useRouter()
  const path = usePathname()
  // console.log(path);

  // const API = 'https://jsonplaceholder.typicode.com/users/'
  // const [users, setUsers] = useState()

  // useEffect(()=>{
  //   fetch(API)
  //       .then(data => data.json())
  //       .then(data => setUsers(data))
  //       .catch(err => console.log(err))
  // },[])

  // if(!users) return <h1>loading.....</h1>

    const data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange", 'ali'],
    datasets: [
      {
        label: "Votes",
        data: [12, 19, 3, 5, 2, 3, 40],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
          'green'
        ],
      },

    ],
  };

  const options = {
    responsive: true,
    aspectRatio: 4,
    plugins: {
      legend: { position: "bottom" },
      title: { display: true, text: "joscript" },
    },
  };



      const data2 = {
    labels: ["Red", "Blue", "Yellow", ],
    datasets: [
      {
        label: "Votes",
        data: [12, 19, 3,],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",

        ],
      },

    ],
  };
  

  return (
    <div className="w-full flex justify-start items-center flex-wrap gap-5 p-3">


      <Doughnut data={data} options={options}   />
      <Line data={data2} options={options}   />
      <Bar data={data} options={options}   />




      {/* {
          users.map((item, i) => (
            <Link href={`/${item.id}`} key={i} className="w-[200px] p-3 rounded-md bg-blue-400 overflow-hidden cursor-pointer text-white hover:bg-blue-600  ">
              <h1>{item.name}</h1>
              <p>{item.phone}</p>
              <p>{item.email}</p>
            </Link>
          ))
        } */}


      {/* <button onClick={() => {
        router.push('/add')
      }}> go add</button>


      <ButtonUi text={'welcome'} background={'bg-blue-400'} />
      <ButtonUi text={'add'} background='bg-green-500' />
      <ButtonUi text={'remove'} background={'bg-red-500'} /> */}

    </div>
  );
}
