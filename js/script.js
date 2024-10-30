// Inicializar red neuronal
const network = new brain.NeuralNetwork();

// Función para cargar el archivo CSV
function loadCSV(callback) {
    Papa.parse("../Iris.csv", {
        download: true,
        header: true,
        complete: function(results) {
            console.log("Archivo CSV cargado correctamente.");
            document.getElementById("status").innerText = "Archivo CSV cargado correctamente.";
            const data = results.data;
            const randomData = getRandomData(data, 50);
            callback(randomData);
        },
        error: function(err) {
            console.error("Error al cargar el archivo CSV:", err);
            document.getElementById("status").innerText = "Error al cargar el archivo CSV.";
        }
    });
}

function getRandomData(data, numRows) {
    const suffled = data.sort(() => 0.5 - Math.random());
    return suffled.slice(0, numRows);
}

// Función para entrenar la red neuronal
function trainNetwork(data) {
    const trainingData = data.map(row => ({
        input: {
            sepalLength: parseFloat(row.SepalLengthCm),
            sepalWidth: parseFloat(row.SepalWidthCm),
            petalLength: parseFloat(row.PetalLengthCm),
            petalWidth: parseFloat(row.PetalWidthCm)
        },
        output: {
            setosa: row.Species === "Iris-setosa" ? 1 : 0,
            versicolor: row.Species === "Iris-versicolor" ? 1 : 0,
            virginica: row.Species === "Iris-virginica" ? 1 : 0
        }
    }));
    network.train(trainingData);
    console.log("Red neuronal entrenada correctamente.");
    document.getElementById("status").innerText = "Red neuronal entrenada correctamente.";
}

// Llamar a la función para cargar el archivo CSV y entrenar la red neuronal
loadCSV(trainNetwork);

function classifyFlower() {
    // Obtener valores de entrada
    const sepalLength = parseFloat(document.getElementById("sepalLength").value);
    const sepalWidth = parseFloat(document.getElementById("sepalWidth").value);
    const petalLength = parseFloat(document.getElementById("petalLength").value);
    const petalWidth = parseFloat(document.getElementById("petalWidth").value);

    // Verificar si alguno de los valores es mayor que 10
    if (sepalLength > 10 || sepalWidth > 10 || petalLength > 10 || petalWidth > 10) {
        displayResult("Desconocido", 0);
        return;
    }

    // Realizar predicción
    const result = network.run({
        sepalLength: sepalLength,
        sepalWidth: sepalWidth,
        petalLength: petalLength,
        petalWidth: petalWidth
    });

    // Obtener la especie y el porcentaje de confianza
    const { species, confidencePercentage } = getPrediction(result);

    // Mostrar el resultado
    displayResult(species, confidencePercentage);
}

function getPrediction(result) {
    let species = 'Desconocido';
    let maxConfidence = 0;
    for (const [key, value] of Object.entries(result)) {
        if (value > maxConfidence) {
            maxConfidence = value;
            species = key;
        }
    }
    const confidencePercentage = (maxConfidence * 100).toFixed(2);
    return { species, confidencePercentage };
}

function displayResult(species, confidencePercentage) {
    document.getElementById("result").innerText = `${species} (${confidencePercentage}%)`;
}
