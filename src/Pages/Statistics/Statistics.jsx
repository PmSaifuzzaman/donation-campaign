
import { useLoaderData } from "react-router-dom";
import { PieChart, Pie, Cell } from "recharts";





const Statistics = () => {


    const allDonationItem = useLoaderData();
    const donatedData = JSON.parse(localStorage.getItem('donations'))
    console.log(donatedData.length);



    const data = [
        { name: "Group A", value: allDonationItem.length - donatedData.length },
        { name: "Group B", value: donatedData.length },
    ];

    const COLORS = ["#FF444A", "#00C49F"];

    const RADIAN = Math.PI / 180;

    const renderCustomizedLabel = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        percent,

    }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text
                x={x}
                y={y}
                fill="white"
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central"
            >
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };




    return (
        <div className="md:flex items-center justify-around p-4">
            <div className=" space-y-6 ">
                <div className="flex items-center gap-4"><p>Total Donation</p><p className="w-8 h-3 bg-[#FF444A]"></p></div>
                <div className="flex items-center gap-4"><p>Your Donation</p><p className="w-8 h-3 bg-[#00C49F]"></p></div>

            </div>
            <PieChart width={400} height={400}>
                <Pie
                    data={data}
                    cx={200}
                    cy={200}
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
        </div>
    );
};

export default Statistics;
