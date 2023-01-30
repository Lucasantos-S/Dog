import React from "react";
import styles from "./UserStatsGraphs.module.css";
import { VictoryPie, VictoryChart, VictoryBar } from "victory";

function UserStatsGraphs({ data }) {
  const [graph, setGraph] = React.useState([]);
  const [total, setTotal] = React.useState(0);
  React.useEffect(() => {
    console.log(data);
    const graphData = data.map((item) => {
      return {
        x: item.title,
        y: +item.acessos,
      };
    });
    setTotal(
      data
        .map(({ acessos }) => +acessos)
        .reduce((acessos, ac) => {
          return (ac = ac += acessos);
        }, 0)
    );
    setGraph(graphData);
  }, [data]);
  return (
    <section className={`animeLeft ${styles.graph}`}>
      <div className={`${styles.total} ${styles.grapItem}`}>
        <p>Acessos: {total}</p>
      </div>
      <div className={styles.grapItem}>
        <VictoryPie
          data={graph}
          innerRadius={50}
          padding={{ top: 20, left: 80, bottom: 20, right: 80 }}
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: "#fff",
              strokeWidth: 2,
            },
            labels: {
              fontSize: 14,
              fill: "#333",
            },
          }}
        />
      </div>
      <div className={styles.grapItem}>
        <VictoryChart>
          <VictoryBar alignment="start" data={graph}></VictoryBar>
        </VictoryChart>
      </div>
    </section>
  );
}

export default UserStatsGraphs;
