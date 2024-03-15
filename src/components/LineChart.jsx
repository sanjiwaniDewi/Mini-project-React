import progressProject from "../data/progressProject.json";
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";

import "../style/components.css";

const LineChart = () => {
    return (
        <div className="progress-chart">
            <Line
                data={{
                    labels: progressProject.map((data) => data.label),
                    datasets: [
                        {
                            label: "Done",
                            data: progressProject.map((data) => data.done),
                            backgroundColor: "#000817",
                            borderColor: "#000814",
                        },
                        {
                            label: "On Going",
                            data: progressProject.map((data) => data.ongoing),
                            backgroundColor: "#001d3d",
                            borderColor: "#003566",
                        },
                        {
                            label: "New",
                            data: progressProject.map((data) => data.new),
                            backgroundColor: "#ffc300",
                            borderColor: "#ffd60a",
                        },
                    ],
                }}
                options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    elements: {
                        line: {
                            tension: 0.2,
                        },
                    },
                }}
            />
        </div>
    );
};

export default LineChart;
