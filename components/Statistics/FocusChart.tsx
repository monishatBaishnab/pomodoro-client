import moment from "moment";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ComposedChart,
  Bar,
} from "recharts";

const FocusChart = ({
  statistics,
}: {
  statistics: {
    date: string;
    total_price: string;
    order_count: string;
  }[];
}) => {
  const chartMargins = { top: 10, right: 0, left: 0, bottom: 10 };
  const axisStyles = { fontSize: 12, fill: "#555", fontWeight: "bold" };

  return (
    <div className="space-y-3">
      <h2 className="text-xl font-semibold text-h-black">Sessions Analysis</h2>
      <div style={{ width: "100%", height: "400px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={statistics} margin={chartMargins}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#cfcfcf"
              vertical={false}
              horizontal={true}
            />
            <Legend
              content={
                <div className="flex items-center justify-center space-x-2">
                  <span className="font-semibold text-blue-600">
                    Total Focus Time and Session Counts by Date
                  </span>
                </div>
              }
              align="left"
              verticalAlign="top"
              height={36}
            />
            <XAxis
              dataKey="date"
              tick={(props) => {
                const { x, y, payload } = props;
                return (
                  <text
                    x={x}
                    y={y + 20}
                    textAnchor="middle"
                    fill="#555"
                    fontSize={12}
                    fontWeight="bold"
                  >
                    {moment(payload.value).format("Do")}
                  </text>
                );
              }}
              tickLine={false}
              axisLine={true}
            />

            {/* Y-Axis configuration */}
            <YAxis tick={axisStyles} tickLine={false} axisLine={true} />

            {/* Interactive elements */}
            <Tooltip cursor={{ stroke: "#8884d8", strokeWidth: 0.5 }} />
            {/* <Legend verticalAlign="top" height={36} /> */}
            <Bar dataKey="order_count" barSize={10} radius={[5, 5, 0, 0]} fill="#413ea0" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default FocusChart;
