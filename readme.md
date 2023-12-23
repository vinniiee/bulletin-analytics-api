# Bulletin Analytics API

Welcome to the Bulletin Analytics API repository! This API is designed to interact with a Mongoose database to fetch and manage bulletin data. Bulletins are pieces of information that can be retrieved, created, updated, and deleted through this API.

Deployed Link :- https://bulletin-analytics-api.onrender.com/

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Endpoints](#endpoints)
  - [Example Requests](#example-requests)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started with the Bulletin API, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/bulletin-api.git
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

3. Set up the configuration file (see [Configuration](#configuration) section).

4. Start the API:

   ```bash
   npm start
   ```

## Usage

### Endpoints

- **POST /bulletins**:
  Description: Create a new bulletin entry.

- **GET /bulletins**:
  Description: Retrieve all bulletins.

- **GET /map**:
    Description: Retrive features for world map 

- **GET /bulletins/topics**:
  Description: Retrieve and count bulletins by topic.

- **GET /bulletins/regions**:
  Description: Retrieve and count bulletins by region.

- **GET /bulletins/countries*
  Description: Retrieve and count bulletins by country.

- **GET /bulletins/pestles**:
  Description: Retrieve and count bulletins by pestle.

- **GET /bulletins/sectors**:
  Description: Retrieve and count bulletins by sector.

- **GET /bulletins/sources**:
  Description: Retrieve and count bulletins by source.

- **GET /bulletins/chronic**:
  Description: Group bulletins by day.

- **GET /bulletins/:id**:
  Description: Retrieve a specific bulletin by ID.

- **PATCH /bulletins/:id**:
  Description: Update a specific bulletin by ID.

- **DELETE /bulletins/:id**:
  Description: Delete a bulletin by ID.
