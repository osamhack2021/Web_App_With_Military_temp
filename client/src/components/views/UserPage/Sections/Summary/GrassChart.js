import React from "react";
import { ResponsiveCalendar } from "@nivo/calendar";

function GrassChart(props) {
  props.data && props.data.reverse();
  return (
    <div className="" style={{ height: 300 }}>
      {props.data && (
        <ResponsiveCalendar
          data={props.data}
          from="2022-01-01"
          to="2022-12-31"
          emptyColor="#eeeeee"
          colors={["#A1E4AC", "#78CB94", "#4EB17C", "#007950"]}
          margin={{
            top: 30,
            right: 30,
            bottom: 30,
            left: 30,
          }}
          yearSpacing={60}
          monthBorderColor="#ffffff"
          monthLegendOffset={10}
          dayBorderWidth={2}
          dayBorderColor="#ffffff"
          legends={[
            {
              anchor: "bottom-right",
              direction: "row",
              translateY: 36,
              itemCount: 4,
              itemWidth: 34,
              itemHeight: 36,
              itemDirection: "top-to-bottom",
            },
          ]}
        />
      )}
    </div>
  );
}

export default GrassChart;
