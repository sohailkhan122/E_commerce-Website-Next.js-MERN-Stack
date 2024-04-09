'use client'
import { useRouter } from "next/navigation";
import Home from "./Components/Home";
import { useContext, useEffect } from "react";
import noteContext from "@/context/noteContext";

export default function App() {
  const router = useRouter();
  const { userId, setuserId } = useContext(noteContext);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (!userData) {
      console.log("User not Authenticated");
      router.push('/login');
    } else {
      setuserId(userData._id)
    }
  }, [userId]);
  console.log(userId)
  return (
    <Home />
  )
}