# Nodejs+CRUD-API+Docker
Building a Dockerized API application in NodeJS for Managing Orders Data in PostgreSQL

* The <B>controllers/orders.js</B> file contains all the functions to execute in order to interact with the database and have the 4 basic functionalities.
* The <B>models/order.js</B> file will contain the model, in this case a order with an auto-incremented id, a name and an email.
* The <B>routes/orders.js</B> file sets up routes for a order management API using the Express.js framework. This module exports an Express Router with various CRUD (Create, Read, Update, Delete) routes for orders.
* The <B>util/database.js</B> file will contain the internal configuration to allow the connection between the Node.js application and the running Postgres instance.
* The <B>index.js</B> file is the file that will be executed by the docker container.
* The <B>Dockerfile</B> is used to build a docker image automatically by reading instructions from the Dockerfile.
* The <B>Docker-compose.yml</B> file is used to run multiple services an easy way. We can create and start one or more containers for each dependency with a single command.


## Steps to run the application

### STEP-1:
First clone this repository, With the help of the repository link type the following command in your terminal,
  ```shell
  git clone https://github.com/gopu22/Nodejs-CRUD-API-Docker.git
  ```
This command clones the repository into your local machine.<br>

### STEP-2:
Now, change the current directory to the cloned directory,
  ```shell
  cd Nodejs-CRUD-API-Docker
  ```

### STEP-3:
With the help of the below command run the postgres container,
  ```shell
  sudo docker compose up -d node_db
  # -d : we are running in detach mode
  # node_db : postgres service name
  ```
  This command first checks for postgres, if it's not available it pulls the postgres from the docker registry.

### STEP-4:
Check the logs,
  ```shell
  sudo docker compose logs
  # This command just give the logs information
  ```

### STEP-5:
Now, let's build the docker image,
  ```shell
  sudo docker compose build
  ```

### STEP-6:
Finally, let's start the service:
  ```shell
  sudo docker compose up node_app
  # We are running the service in attach mode i.e in the foreground.
  ```

If we get the output similar to the below one, Then it is a `successful` connection to the postgres container and the application is running properly.
`Database connected`
![Screenshot from 2023-07-26 11-30-13](https://github.com/gopu22/Nodejs-CRUD-API-Docker/assets/69630416/4567ccf1-25cf-4c6c-b018-7639d99ae9e2)
<br>
<br>

## Now, Let's test the application with Postman

**1. Make a GET request to `http://localhost:3000/`**
<br>Just shows a `Hello World`, means it's working fine.
![Screenshot from 2023-07-26 11-47-04](https://github.com/gopu22/Nodejs-CRUD-API-Docker/assets/69630416/642dc98a-109b-494c-ba08-2deadc043110)

**2. Make a GET request to `http://localhost:3000/orders/`**
<br>We should have an empty array as a response.
![Screenshot from 2023-07-26 11-48-36](https://github.com/gopu22/Nodejs-CRUD-API-Docker/assets/69630416/cbc3f848-5a17-4268-8141-3c7cda9420dc)

**3. Make a POST request to `http://localhost:3000/orders/`**
<br>This posts/adds a new entry to the dataset `order created successfully`.
![Screenshot from 2023-07-26 11-50-20](https://github.com/gopu22/Nodejs-CRUD-API-Docker/assets/69630416/3b652732-8e36-4029-983b-a0c919827944)

**4. Make a GET request to `http://localhost:3000/orders/`**
<br>To check all the added entries to the dataset.
![Screenshot from 2023-07-26 11-50-58](https://github.com/gopu22/Nodejs-CRUD-API-Docker/assets/69630416/12cd2861-db4f-4731-8bcf-6353765545a0)

**5. Make a GET request to `http://localhost:3000/orders/4`**
<br>Here we are making a GET request for single entry.
![Screenshot from 2023-07-26 11-51-40](https://github.com/gopu22/Nodejs-CRUD-API-Docker/assets/69630416/95e6ee9c-5899-4dd3-a737-d0225ed61142)

**6. Make a PUT request to `http://localhost:3000/orders/4`**
<br>This is the dataset before update of id-4 values.
![Screenshot from 2023-07-26 11-54-14](https://github.com/gopu22/Nodejs-CRUD-API-Docker/assets/69630416/41d6da1e-9d0f-4f59-842d-5658f8e45bcd)

**7. Make a PUT request to `http://localhost:3000/orders/4`**
<br>This is the dataset after update of id-4 values `order updated`.
![Screenshot from 2023-07-26 11-54-32](https://github.com/gopu22/Nodejs-CRUD-API-Docker/assets/69630416/1d11342c-8bdb-4e22-aa13-5c3213edaef4)

**8. Make a GET request to `http://localhost:3000/orders/`**
<br>This is the updated details of the dataset.
![Screenshot from 2023-07-26 11-55-04](https://github.com/gopu22/Nodejs-CRUD-API-Docker/assets/69630416/d8ff60bb-28d7-4286-8b07-80c0e69bb63b)

**9. Make a DELETE request to `http://localhost:3000/orders/5`**
<br>Making a delete request for order 5 `order deleted`.
![Screenshot from 2023-07-26 11-55-50](https://github.com/gopu22/Nodejs-CRUD-API-Docker/assets/69630416/7e8fb805-2386-4d7b-b127-3322781b1049)

**10. Make a GET request to `http://localhost:3000/orders/`**
<br>After all the CRUD operations, This is the final dataset with all updated details.
![Screenshot from 2023-07-26 11-56-15](https://github.com/gopu22/Nodejs-CRUD-API-Docker/assets/69630416/6c9a4d5f-b62f-4f77-94cd-33e34494a23a)

<br>

## Data Output on pgAdmin4

![Screenshot from 2023-07-26 11-57-37](https://github.com/gopu22/Nodejs-CRUD-API-Docker/assets/69630416/2d2256aa-b5fe-433c-9002-481e50a1bebf)

<br>Connect to the `pgAdmin4` server with the help of the login credentials given in the `docker-compose.yml` file.
<br>This is a user interface to view the orders dataset tables.

![Screenshot from 2023-07-26 11-58-05](https://github.com/gopu22/Nodejs-CRUD-API-Docker/assets/69630416/175ebf1d-c70e-4b2c-9dd3-65ffd40268dc)

<br>

### ----------------------------------------THANK YOU----------------------------------------------------

