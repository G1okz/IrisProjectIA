//Inicializar red neuronal
var network = new brain.NeuralNetwork();

network.train([
    // Entrada id, Iris-setosa = output0, Iris-versicolor = output1, Iris-virginica = output2
    {
        input: {
            id: 1,
            sepaLength: 5.1,
            sepaWidth: 3.5,
            petalLength: 1.4,
            petalWidth: 0.2,
            output: 0
        }
    },
    {
        input: {
            id: 2,
            sepaLength: 4.9,
            sepaWidth: 3.5,
            petalLength: 1.4,
            petalWidth: 0.2,
            output: 0
        }
    },
    {
        input: {
            id: 3,
            sepaLength: 4.7,
            sepaWidth: 3.5,
            petalLength: 1.4,
            petalWidth: 0.2,
            output: 0
        }
    },
    {
        input: {
            id: 4,
            sepaLength: 5.1,
            sepaWidth: 3.5,
            petalLength: 1.4,
            petalWidth: 0.2,
            output: 0
        }
    },
    {
        input: {
            id: 5,
            sepaLength: 5.1,
            sepaWidth: 3.5,
            petalLength: 1.4,
            petalWidth: 0.2,
            output: 0
        }
    },
    {
        input: {
            id: 6,
            sepaLength: 5.1,
            sepaWidth: 3.5,
            petalLength: 1.4,
            petalWidth: 0.2,
            output: 0
        }
    },
    {
        input: {
            id: 7,
            sepaLength: 5.1,
            sepaWidth: 3.5,
            petalLength: 1.4,
            petalWidth: 0.2,
            output: 0
        }
    },
    {
        input: {
            id: 8,
            sepaLength: 5.1,
            sepaWidth: 3.5,
            petalLength: 1.4,
            petalWidth: 0.2,
            output: 0
        }
    },

])

function update(specie) {
    var id = specie.id;
    var sepaLength = specie.sepalLength;
    var sepaWidth = specie.sepalWidth;
    var petalLength = specie.petalLength;
    var petalWidth = specie.petalWidth;
    var div = document.getElementById("fondo");

    var entrada = {
        id: id,
        sepaLength: sepaLength,
        sepaWidth: sepaWidth,
        petalLength: petalLength,
        petalWidth: petalWidth
    }

}
