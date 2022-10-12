
import { Tooltip } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { Bar, BarChart, CartesianGrid, Legend, XAxis, YAxis } from 'recharts';


const Statistics = () => {
    const statistics = useLoaderData()
    const states = statistics.data
    return (
        <div className='conatiner'>
            <h3 className='text-white text-center'>This is Statistics</h3>
            <div className='container d-flex justify-content-center mt-5'>


                <BarChart
                    width={500}
                    height={350}
                    data={states}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                        dataKey="name" />
                    <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                    <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                    <Tooltip></Tooltip>
                    <Legend></Legend>
                    <Bar yAxisId="left" dataKey="total" fill="#8884d8" />
                </BarChart>
            </div>
        </div>
    );
};

export default Statistics;