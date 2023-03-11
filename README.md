# eCommerce Sequelize Backend

[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Questions](#questions)
- [License](#license)

## Description

A MySQL backend with Express API to model relationship between products, product categories and product tags. This application uses the basic CRUD operations for each entity type.

## Installation

Run `npm i` to install dependencies.

## Usage

MySQL is required to use this app. Access to the database is managed via a .env file with the following variables being accessed via connection.js:<br>
`DB_NAME`<br>
`DB_USER`<br>
`DB_PASSWORD`

To begin, run `schema.sql` from the MySQL shell to create the database. Seed data can be added by running `npm run seed` from the project's root directory.

This project doesn't have a front end so the API can be called and manipulated by using a tool such as Postman or Insomnia.

A link to a video demonstration of the app's usage can be found [here](https://drive.google.com/file/d/1e7xvrnILO7D04fB464ecfZTAx-jmGIKw/view).

  <p align="center">
  <img src="https://github.com/craigrobertsdev/eCommerce-Backend/blob/main/assets/images/screenshot.jpg">
  </p>

## Contributing

To contribute, fork the repo and submit a pull request.

## Questions

View my other projects at [https://github.com/craigrobertsdev/](https://github.com/craigrobertsdev/).

If you would lke to contact me, I can be reached at [craig.roberts11@outlook.com](mailto:craig.roberts11@outlook.com).

## License

This project is licensed under the MIT license. See [here](https://opensource.org/licenses/MIT) for more info.
