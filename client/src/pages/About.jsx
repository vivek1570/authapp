import React, { useEffect, useState } from "react";

function About() {
  const [movlist, setMovlist] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/auth/test");
        const result = await res.json();
        console.log(result); // Log the full response to inspect its structure
        if (result.data) {
          // Check if data exists in the response
          setMovlist(result.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  console.log(movlist); // Log the state for debugging

  return (
    <div>
      <h1>Movies are</h1>
      {movlist.map((df) => (
        <h1 key={df._id}>{df.movie}</h1>
      ))}
    </div>
  );
}

export default About;
