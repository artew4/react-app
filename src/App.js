import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { MathJaxContext, MathJax } from 'better-react-mathjax';
import { generateWorkData } from "./utils/physicsEngine";
import './styles/App.scss'; // Подключаем SCSS

const App = () => {
  const [mass, setMass] = useState(10);
  const [distance, setDistance] = useState(5);

  const data = generateWorkData(mass, distance);

  return (
    <div className="app-container">
      <div className="app-content">
        <h1>Механическая работа vs Угол наклона</h1>

        <MathJaxContext>
        <div className="formulas">
          <h2>Формулы расчётов:</h2>
          <MathJax>
            {"\\( F = mg \\sin(\\theta) \\)"}
          </MathJax>
          <MathJax>
            {"\\( A = F \\cdot S \\)"}
          </MathJax>
        </div>
        </MathJaxContext>


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
