import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import './App.scss'; // Подключаем SCSS

const App = () => {
  const [mass, setMass] = useState(10); // кг
  const [distance, setDistance] = useState(5); // м

  const g = 9.8; // м/с²

  // Генерация данных для графика
  const generateData = () => {
    const data = [];
    for (let angle = 5; angle <= 60; angle += 5) {
      const theta = (Math.PI / 180) * angle;
      const force = mass * g * Math.sin(theta);
      const work = force * distance;
      data.push({ angle, work: +work.toFixed(2) });
    }
    return data;
  };

  const data = generateData();

  return (
    <div className="app-container">
      <div className="app-content">
        <h1>Механическая работа vs Угол наклона</h1>
        <div className="input-container">
          <label className="input-label">Масса (кг):</label>
          <input
            type="number"
            value={mass}
            onChange={(e) => setMass(Number(e.target.value))}
            className="input-field"
          />
        </div>
        <div className="input-container">
          <label className="input-label">Путь (м):</label>
          <input
            type="number"
            value={distance}
            onChange={(e) => setDistance(Number(e.target.value))}
            className="input-field"
          />
        </div>

        <div className="chart-container">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="angle" label={{ value: "Угол (°)", position: "insideBottomRight", offset: -5 }} />
              <YAxis label={{ value: "Работа (Дж)", angle: -90, position: "insideLeft" }} />
              <Tooltip />
              <Line type="monotone" dataKey="work" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default App;
