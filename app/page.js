"use client";
import Blog from "@/components/blog/blog";
import { useEffect, useState } from "react";

export default function Home() {
  const [quote, setQuote] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://api.api-ninjas.com/v1/quotes?category=success",
          {
            headers: {
              "X-Api-Key": "RWFpEdT6CF1iiSUx1pzDM8n8lubCMCEoO38ZqpYM",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Veriler alınamadı");
        }
        const data = await response.json();

        console.log(data[0].category, data[0].author, data[0].quote);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <Blog />
    </div>
  );
}
