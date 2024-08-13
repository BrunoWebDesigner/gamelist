# Casino Games List Integration Server

## Overview

This project is a Node.js server built using TypeScript and deployed on Vercel. It is designed to receive and respond to POST requests in JSON format. The server facilitates the integration of a list of casino games with the API from your workplace, enabling the company's API to fetch the game list easily.

## Features

- **Node.js and TypeScript**: The server is developed using Node.js for its asynchronous capabilities and TypeScript for type safety and development efficiency.
- **Vercel Deployment**: The server is deployed on Vercel, ensuring easy deployment and scalability.
- **JSON Handling**: The server handles POST requests and responses using JSON format.
- **Casino Games Integration**: Simplifies the process of fetching a list of casino games via the company API.

## Usage

1. **Setup**: Clone the repository and install the dependencies.
    ```bash
    git clone <repository-url>
    cd project-directory
    npm install
    ```

2. **Running the Server Locally**:
    ```bash
    npm run dev
    ```
    The server will start on the specified port and be ready to handle POST requests.

3. **Deploying to Vercel**:
    - Follow Vercel's documentation to deploy the server.
    - Ensure environment variables are correctly set up on Vercel.

## API Endpoints

- **POST**:
    - Description: Receives a JSON payload containing a request for the list of casino games.
    - Request Body: 
      ```json
      {
          "operator_id": "bruno"
      }
      ```
    - Response:
      ```json
      {
          "games": [
              { "id": 1, "name": "Game 1", "provider": "Provider A" },
              { "id": 2, "name": "Game 2", "provider": "Provider B" },
              ...
          ]
      }
      ```

## File Structure

- `api/`: Contains the TypeScript source files.
- `package.json`: Contains the project dependencies and scripts.
- `vercel.json`: Configuration file for Vercel deployment.

## Contributing

Contributions are welcome! If you have any suggestions or improvements, feel free to submit a pull request or open an issue.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

## Acknowledgements

This server was created to solve a specific case at my workplace, facilitating the integration of casino game lists with the company's API. The use of Node.js, TypeScript, and Vercel ensures a robust and scalable solution.

---

Thank you for using the Casino Games List Integration Server! If you have any questions or feedback, please feel free to contact me.
