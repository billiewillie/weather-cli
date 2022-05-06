import chalk from 'chalk';
import dedent from 'dedent';

export const printError = (error) => {
  console.log(chalk.bgRed(` ERROR ${error} `));
};

export const printSuccess = (success) => {
  console.log(chalk.bgGreen(` SUCCESS ${success} `));
};

export const printHelp = () => {
  console.log(
    dedent`${chalk.bgCyan(' HELP ')}
    Без параметров - вывод погоды
    -s [CITY] для установки города
    -h для вывода помощи
    -t [API_KEY] для сохранения токена
    `
  );
};

export const printWeather = (res, icon) => {
  console.log(
    dedent`${chalk.bgGreen(' SUCCESS ')} weather in ${res.name}
    ${icon}  ${res.weather[0].description}
    Tempretature: ${res.main.temp}C Feels like ${res.main.feels_like}C
    Humidity: ${res.main.humidity}%
    Wind: ${res.wind.speed}m/s
    `
  );
};
