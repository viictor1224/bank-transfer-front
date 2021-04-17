<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <a href="#built-with">Built With</a>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This project is the frontend for an application that schedules transfers and calculates their respective fees according to the transfer date and its value (you can find its backend [here](https://github.com/viictor1224/bank-transfer-scheduler)).

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.6.

This frontend was built using Typescript programming language, Angular as web application platform.

### Built With

* [Node.js v14.16.1](https://nodejs.org/pt-br/) as a JavaScript runtime environment.
* [Angular](https://angular.io/cli) as TypeScript-based web application framework.


<!-- GETTING STARTED -->
## Getting Started

Install Docker your machine to easily run this application.

### Prerequisites and Installation


1. Download and install [Docker](https://www.docker.com/).
2. Clone the repo
   ```sh
   git clone https://github.com/viictor1224/bank-transfer-front.git
   ```
3. Deploy the application in docker by the following command in the project's root folder:
* CLI (root folder):
  ```sh
  docker run -d -p 4200:4200 viictor1224/bank-transfer-front
  ```

* Full Application Deploy (deploying [backend](https://github.com/viictor1224/bank-transfer-scheduler) for this application):
  ```sh
  docker-compose up
  ```


<!-- USAGE EXAMPLES -->
## Usage

Application is already running and now you can see its interface by acessing:
  ```sh
http://localhost:4200/
  ```

Deploying backend application you can interact with the interface, and you can also use [Swagger](https://swagger.io/) documentation of this application by accessing the following url:
  ```sh
http://localhost:8080/swagger-ui.html
  ```

<!-- CONTACT -->
## Contact

Victor Xavier de Melo - [Linkedin](https://www.linkedin.com/in/victor-xavier-388855164/) - [E-mail](victorxm1@gmail.com)
