import React, { useState } from "react";

const TemperatureConverter = () => {
  let [temperature, setTemperature] = useState('');

  const userSelect = document.querySelector('#user-choice');
  const teclas = document.querySelectorAll('.tecla');
  const resultados = document.querySelectorAll('.result');

  const handleTemperature = (valorTecla) => {
    if (valorTecla === '.' && temperature.includes('.')) {
      return false;
    }

    if (valorTecla === '-' && temperature === '') {
      setTemperature(valorTecla);
      return true;
    }

    if (valorTecla === '.' && (temperature === '' || temperature === '-')) {
      setTemperature(temperature + '0.');
      return true;
    }

    if (valorTecla !== '-') {
      setTemperature(temperature + valorTecla);
      return true;
    }
  }

  const handleBackSpace = () => {
    let temp = temperature.slice(0, -1);
    setTemperature(temp);
  }

  const handleConverter = () => {
    if (temperature === '-0') {
      setTemperature('0');
    }

    const fromTemp = document.querySelector('#user-choice').options[document.querySelector('#user-choice').selectedIndex].value;

    const resultCelsius = document.querySelector('#celsius-temp');
    const resultFahrenheit = document.querySelector('#fahrenheit-temp');
    const resultKelvin = document.querySelector('#kelvin-temp');

    let temp = Number(temperature);
    let celsiusTemperature = 0;
    let fahrenheitTemperature = 0;
    let kelvinTemperature = 0;

    if (fromTemp === 'C') {
      celsiusTemperature = temp.toFixed(2);
      resultCelsius.insertAdjacentHTML('afterbegin', celsiusTemperature);

      fahrenheitTemperature = ((temp * 9) / 5 + 32).toFixed(2);
      resultFahrenheit.insertAdjacentHTML('afterbegin', fahrenheitTemperature);

      kelvinTemperature = (temp + 273.15).toFixed(2);
      resultKelvin.insertAdjacentHTML('afterbegin', kelvinTemperature);
    }

    if (fromTemp === 'F') {
      fahrenheitTemperature = temp.toFixed(2);
      resultFahrenheit.insertAdjacentHTML('afterbegin', fahrenheitTemperature);

      celsiusTemperature = ((temp - 32) * 5 / 9).toFixed(2);
      resultCelsius.insertAdjacentHTML('afterbegin', celsiusTemperature);

      kelvinTemperature = ((temp - 32) * 5 / 9 + 273.15).toFixed(2);
      resultKelvin.insertAdjacentHTML('afterbegin', kelvinTemperature);
    }

    if (fromTemp === 'K') {
      kelvinTemperature = temp.toFixed(2);
      resultKelvin.insertAdjacentHTML('afterbegin', kelvinTemperature);

      celsiusTemperature = (temp - 273.15).toFixed(2);
      resultCelsius.insertAdjacentHTML('afterbegin', celsiusTemperature);

      fahrenheitTemperature = ((temp - 273.15) * 9 / 5 + 32).toFixed(2);
      resultFahrenheit.insertAdjacentHTML('afterbegin', fahrenheitTemperature);
    }

    userSelect.setAttribute('disabled', true);
    [].map.call(teclas, (el) => {
      return el.setAttribute('disabled', true);
    });
  }

  const handleReset = () => {
    [].map.call(teclas, (el) => {
      return el.removeAttribute('disabled');
    });

    [].map.call(resultados, (el) => {
      if (el.hasChildNodes()) {
        return el.removeChild(el.firstChild);
      }
    });

    userSelect.removeAttribute('disabled');
    setTemperature('');
  }

  return (
    <>
      <aside
        className="areaResultado"
      >
        <input
          id="user-temp"
          defaultValue={temperature}
        />

        <select id="user-choice">
          <option value="C">Celsius</option>
          <option value="F">Fahrenheit</option>
          <option value="K">Kelvin</option>
        </select>

        <div className="result" id="celsius-temp">
          &nbsp;
        </div>
        <span>
          <sup>o</sup>C
        </span>
        <div className="result" id="fahrenheit-temp">
          &nbsp;
        </div>
        <span>
          <sup>o</sup>F
        </span>
        <div className="result" id="kelvin-temp">
          &nbsp;
        </div>
        <span>
          <sup>o</sup>K
        </span>

        <button
          className="tecla"
          id="converter"
          onClick={() => handleConverter()}
        >
          Converter
        </button>
      </aside>

      <aside
        className="areaTeclas"
      >
        <button className="n1 tecla" onClick={() => handleTemperature('1')} >1</button>
        <button className="n2 tecla" onClick={() => handleTemperature('2')} >2</button>
        <button className="n3 tecla" onClick={() => handleTemperature('3')} >3</button>
        <button className="n4 tecla" onClick={() => handleTemperature('4')} >4</button>
        <button className="n5 tecla" onClick={() => handleTemperature('5')} >5</button>
        <button className="n6 tecla" onClick={() => handleTemperature('6')} >6</button>
        <button className="n7 tecla" onClick={() => handleTemperature('7')} >7</button>
        <button className="n8 tecla" onClick={() => handleTemperature('8')} >8</button>
        <button className="n9 tecla" onClick={() => handleTemperature('9')} >9</button>
        <button className="n0 tecla" onClick={() => handleTemperature('0')} >0</button>
        <button className="virgula tecla" onClick={() => handleTemperature('.')} >,</button>
        <button className="limpa tecla" onClick={() => handleBackSpace()} ></button>
        <button className="negativo tecla" onClick={() => handleTemperature('-')} >-</button>
        <div className="reset tecla" onClick={() => handleReset()} >Nova conversão</div>
      </aside>
    </>
  );
};

export default TemperatureConverter;
