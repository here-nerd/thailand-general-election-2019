import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const renderCustomBarLabel = ({ payload, x, y, width, height, value }) => {
  return (
    <text
      x={x + width / 2}
      y={y}
      fill="#666"
      textAnchor="middle"
      dy={-6}
    >{`${value}`}</text>
  );
};

export default class Example extends PureComponent {

  render() {
    const {data} = this.props
    return (
      <BarChart
        width={1000}
        height={300}
        data={data}
        margin={{
          top: 20, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="label" angle={-15} textAnchor="end" interval={0}/>
        <YAxis />
        <Tooltip />
        <Legend
          width={100}
          wrapperStyle={{
            top: 20,
            right: 30,
            backgroundColor: "#f5f5f5",
            border: "1px solid #d5d5d5",
            borderRadius: 5,
            lineHeight: "20px"
          }}
        />
        <Bar dataKey="สส เขต" stackId="a" fill="#8884d8" />
        <Bar dataKey="สส ปาร์ตี้" stackId="a" fill="#82ca9d" label={renderCustomBarLabel} />
      </BarChart>
    );
  }
}
