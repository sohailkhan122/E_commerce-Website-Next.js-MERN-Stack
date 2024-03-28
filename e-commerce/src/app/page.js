'use client'
import { useRouter } from "next/navigation";
import Home from "./Components/Home";
import { useEffect } from "react";

export default function App() {
  const userData = JSON.parse(localStorage.getItem("userData"))
  const router = useRouter();
  useEffect(() => {
    if (!userData) {
      console.log("User not Authenticated");
      router.push('/login');
    }
  }, []);
  return (
    <Home />
  )
}
