// константы
var g = 9.8; // ускорение свободного падения

// Функция расчета силы тяжести
// Fтяж = m * g
function calculateForce (mass, g = 9.8, theta = 90) {
    let radians = theta * Math.PI / 180; // перевод угла в радианы
    let result = mass * g * Math.sin(radians);
    return result;
}

// Функция расчета Работы 
// A = F * S
function calculateWork (force, distance, direction=1) {
    let result = force * distance * direction;
    return result;
}

export function generateWorkData(mass, distance) {
    const data = []; // массив данных
    for (let angle = 5; angle <= 60; angle += 5) {
        const force = calculateForce(mass, g, angle); // рассчитываем силу тяжести
        const work = calculateWork(force, distance); // рассчитываем работу
        data.push({ angle, work: + work.toFixed(2) });
    }

    return data;
}
