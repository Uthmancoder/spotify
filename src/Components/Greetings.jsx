import React , {useEffect, useState} from "react";

const Greetings = () => {
  const [data, setdata] = useState([])
  useEffect(() => {
    fetch('http://localhost:1354/posts')
      .then(response => response.json())
      .then(data => {
        setdata(data);
        console.log(data);
      });
  }, []);
  
    
  const time = new Date();
  time.setHours(21);
  time.setMinutes(43);

  console.log(time);

  let greeting = "";

  if (time.getHours() > 5) {
    greeting = "Good morning";
  } else if (time.getHours() > 12) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }

  return (
    <div>
      <div className="greetings">
        <h1 className="text-light fw-bolder">{greeting}</h1>
      </div>
    </div>
  );
};

export default Greetings;
