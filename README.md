# Project Documentation



## Project Description

Welcome to our data visualization application, meticulously crafted using the Laravel framework in conjunction with ReactJs for a seamless user experience.

## Overview
This application serves as a bridge between the user and valuable historical data concerning various companies. Users can effortlessly select a company, provide an email, and define a date range, which will then retrieve and display historical financial metrics for the selected company.

## Accessing the Application

To make the most out of the application's features, follow the steps below:

1. **Register:** Start by registering an account on the platform.
2. **Login:** After successful registration, log in using your credentials.
3. **Dashboard Access:** Upon logging in, you'll be automatically redirected to the dashboard. This central hub provides access to various functionalities.
4. **Data Submission:** From the dashboard, you can submit the form to view historical data specific to your inputs.
5. **Visualizing Data:** After submission, you will be presented with comprehensive charts visualizing the historical data for clearer insights.


## Technical Introduction

This project is built using **Laravel v10.22.0** and is configured to run in a Docker container using **Laravel Sail**. This provides an isolated environment to run the application, ensuring consistency across all development environments.

## Technical Highlights

### Design Patterns

In addition to Laravel's foundational MVC (Model-View-Controller) design pattern, this application incorporates the **Repository Design Pattern**. By integrating the Repository pattern with the traditional MVC:

- **Decoupling**: We have effectively decoupled the application logic from the data access logic, providing a more structured and scalable codebase.

- **Swap-ability**: The application gains the ability to easily swap out the data source or the database without changing application logic, offering more flexibility in terms of data storage solutions.

- **Scalability**: As the application grows and scales, handling larger data sets or integrating multiple data sources becomes much more manageable. The repository pattern ensures that the application remains robust and adaptable to evolving requirements.

This strategic move towards the Repository pattern ensures a future-ready foundation for the application, facilitating smooth scalability and maintainability as the application expands.



## Prerequisites

- **Docker**: Ensure Docker is installed and running on your machine. You can download it from [Docker's official website](https://www.docker.com/products/docker-desktop).
- **PHP & Composer**: While the project runs inside a container, you'd still need [Composer](https://getcomposer.org/download/) to install PHP dependencies.

## Setup and Installation

### 1. Clone the Repository

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/sam0hack/xm.git 
cd xm
```

### 2. Install PHP Dependencies

Before we bring the Docker containers up, install the PHP dependencies:

```bash
composer install
```

### 3. Install NodeJs Dependencies and `run build` 

To ensure consistency and avoid potential issues arising from different OS architectures, it's advised to execute commands within the Docker container. To access the Docker container, use the command below, replacing `laravel.test` with your specific container ID:


```bash
docker exec -it laravel.test /bin/sh
```


```bash
npm install
npm run build
```
For development 
```bash
npm run dev
```

### Env Setup
Make sure to add `X_RAPID_API_KEY` from your Rapid api account without this token app may not work.

### 4. Run with Docker using Laravel Sail
Laravel Sail is a light-weight command-line interface for interacting with Laravel's default Docker environment. The recommended way to run the project is using Sail.

To start the Docker containers for the project, run:

```bash
./vendor/bin/sail up
```

The first time you run the Sail `up` command, Sail's application containers will be built on your machine. This could take several minutes.

Once the containers are started, you can access the project in your web browser at: http://localhost.

### Other Useful Sail Commands
To stop the containers, you can simply press `Ctrl + C` or run:

```bash
./vendor/bin/sail down
```

## Testing

This project uses [Laravel Pest](https://pestphp.com/) for testing, which provides an elegant way to write simple and expressive tests.

### Running Tests

To run the suite of tests for the application, execute the following command:

```bash
./vendor/bin/pest
```
This command will trigger Pest to run all tests and display a summary of passed and failed tests, if any.

### Writing New Tests
Why use **Pest?** Pest offers a clean, expressive API to write tests. Refer to the [Pest documentation](https://pestphp.com/docs/introduction) for guidelines on writing tests using Pest.

## Email Testing with Mailpit

This project leverages Mailpit as its email service for testing. Mailpit offers a straightforward approach to intercept and display emails for development purposes, ensuring that no emails are unintentionally sent to real users.

### Accessing Mailpit

Once the project is up and running, you can access the Mailpit web interface to view any emails sent by the application:

```plaintext
http://localhost:8025/
```
By using Mailpit, we can easily inspect the emails, verify their content, and ensure that our application's email features are functioning as expected without any side effects.

## Future Improvements

In our ongoing commitment to improving the application and maintaining best practices, here's a to-do list of potential enhancements that could make this project even more robust and user-friendly:

1. **Expand API Integrations**:
    - **Description**: Integrate more API endpoints to diversify data sources. This will enhance our data robustness and offer users a broader perspective.
    - **Benefits**: Increases data reliability and provides users with a comprehensive set of data points.

2. **UI Folder Structure**:
    - **Description**: Given that we're using ReactJS, there's potential to optimize our folder structure. As the project scales, a well-organized structure will become essential for manageability.
    - **Benefits**: Improves code maintainability and readability, making it easier for developers to navigate and collaborate.

3. **Component & Service Segregation**:
    - **Description**: Break down UI elements into more granular components for better reusability. Additionally, create a separate services directory dedicated to API handling and business logic.
    - **Benefits**: Promotes modular design, enhancing code reusability and separation of concerns.

4. **Enhanced Testing**:
    - **Description**: While we currently utilize Laravel Pest for testing, there's always room to expand our test suite, including more end-to-end tests, integration tests, and performance benchmarks.
    - **Benefits**: Ensures robustness of the application, reduces bugs, and ensures smooth performance as new features are added.

5. **Implement State Management**:
    - **Description**: As the application grows, managing state can become complex. Implementing a state management solution like Redux or MobX can help manage global state more effectively.
    - **Benefits**: Offers a structured way to manage and track application state, ensuring consistency and reliability of the UI.

6. **Optimize Performance**:
    - **Description**: Regularly profile the application to identify bottlenecks or performance issues. This includes optimizing database queries, reducing unnecessary re-renders in React, and using CDN for static assets.
    - **Benefits**: Ensures a smooth user experience, faster load times, and efficient resource utilization.

By prioritizing these tasks, we aim to future-proof our application, ensuring it remains scalable, maintainable, and offers the best experience to our users.

