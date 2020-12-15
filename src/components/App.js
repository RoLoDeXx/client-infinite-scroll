import React, { useState } from "react";
import styles from "./index.module.css";
import Card from "./Card";
import { colleges } from "../assets/colleges.json";
const App = () => {
  const [limit, setLimit] = useState(10);
  window.addEventListener("scroll", () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setLimit(limit + 10);
    }
  });

  const renderCards = colleges.slice(0, limit).map((item) => {
    return <Card info={item} key={item.college_name} />;
  });

  return (
    <div className={styles.container}>
      <h1>Colleges in North India</h1>
      <div className={styles.mainGrid} id="content">
        {renderCards}
      </div>
    </div>
  );
};

export default App;
