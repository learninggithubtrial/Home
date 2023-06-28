import React, { useEffect, useState } from "react";
function HomeContainer() {
  useEffect(() => {
    fetchDefaultContent();
  }, []);

  const fetchDefaultContent = async () => {
    await fetch("https://unknown.endpoint")
      .then((res) => alert("Receive content"))
      .catch((err) => {
        alert("recieve error check logs in sentry");
        throw new Error("recieve error check logs in sentry");
      });
  };

  return <div className="container" style={{ display: "flex" }}></div>;
}

export default HomeContainer;
