import React, { useEffect, useState } from "react";
import { fetchDailyData } from "./../../api/index";
const Chart = () => {
  const [dailyData, setDailyData] = useEffect({});

  useEffect(() => {
    const fetchApi = async () => {
      setDailyData(await fetchDailyData());
    };

    fetchApi();
  });
  return <div></div>;
};

export default Chart;
