# Clasificador de Flores Iris 🌸 

Este repositorio contiene una aplicación web que clasifica flores Iris en distintas especies (Iris-setosa, Iris-versicolor, Iris-virginica) utilizando una red neuronal creada con brain.js. Este proyecto incluye una interfaz simple en HTML y JavaScript para ingresar las características de la flor y visualizar el resultado de la predicción.

## 🚀 Funcionalidades
Clasificación de especies: Clasifica una flor en su especie correspondiente según las características ingresadas.
Interfaz amigable: Permite a los usuarios ingresar las características de la flor de manera sencilla.
Estado en tiempo real: Indica el estado del modelo y muestra el resultado de la predicción directamente en la página.

## 📚 Tecnologías Utilizadas
HTML/CSS/JavaScript: Estructura y lógica de la interfaz de usuario.
PapaParse: Para cargar y manipular datos CSV si se necesitan datos de entrenamiento adicionales.
Brain.js: Biblioteca para la creación y entrenamiento de redes neuronales.

## 📂 Estructura de Archivos
index.html: Página principal con el formulario de entrada y el botón para la clasificación.
js/script.js: Contiene el código de la red neuronal y la lógica para manejar la clasificación.

## 🛠 Requisitos
Navegador compatible con JavaScript ES6.
Conexión a internet para cargar brain.js y PapaParse desde una CDN.

## ⚙️ Instalación y Uso
Clonar el repositorio:

```bash
git clone https://github.com/G1okz/clasificador-flores-iris.git
Abrir la aplicación: Navega hasta el directorio y abre index.html en un navegador web.

Ingresar características de la flor:

Sepal Length
Sepal Width
Petal Length
Petal Width
Clasificar: Haz clic en el botón "Clasificar" para ver el resultado de la especie de la flor.

## 📖 Ejemplo de Uso
Ingresa valores de ejemplo, como:

Sepal Length: 5.1
Sepal Width: 3.5
Petal Length: 1.4
Petal Width: 0.2
Luego, presiona Clasificar. La aplicación mostrará la especie estimada (por ejemplo, Iris-setosa).


