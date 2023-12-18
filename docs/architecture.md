---
sidebar_label: 'Architecture'
sidebar_position: 2
---
import React from 'react';
import ArchitectureImage from '/img/architecture_simple.png';

# Architecture

## Description

### User Interface

The **UI** of our system consists of a React application. This module allows the users to interact with our application, being 
the bridge between them and the application logic and functionality. This component is hosted in an AWS EC2 instance.

Check the UI [repository](https://github.com/UAchado/user_ui).

### Drop-Off Points API

About the backend, in our system we have the two APIs. The first one, **Drop-Off Points**, is responsible for the management 
of the authorized points to drop found items. It was developed with FastAPI and has a MySQL relational database. The API 
is also hosted in an AWS EC2 instance, while the database is in an AWS RDS instance.

Check the API [documentation](https://app.swaggerhub.com/apis/TIAGOGCARVALHO2002/drop-off_points_api/1.0.0) and [repository](https://github.com/UAchado/drop-off-points-api).

### Inventory API

Regarding the other API of the application, we have the **Inventory** one, from where it is possible to manage the lost and 
found items in the system. This API was also developed with FastAPI and includes a MySQL DB. In addiction, it counts on an 
AWS Simple Storage Service to store the images of the lost and found items uploaded in the application.

Check the API [documentation](https://app.swaggerhub.com/apis/TIAGOGCARVALHO2002/inventory-api/1.0.0#/) and [repository](https://github.com/UAchado/inventory-api). 

### Identity Provider

In the *UAchado* system, only the staff of each drop-off point has to be authenticated to use the application. 
So, for the **Identity Provider**, we used AWS Cognito to create, store and manage these identities.

### System Logs and Metrics

The system collects data about itself and its inner logic to provide insightful information to system administrators. Among others, collected data consists of:
 - container logs, cpu and memory usage
 - database  metrics (connections, memory available, free storage, cpu, read/write latency, read/write throughput, read/write operations per second (OPS))

## Microservices Architecture


<img src={ArchitectureImage} alt="UAchado Microservices Architecture" height="606px"/>

[//]: # (![UAchado Microservices Architecture]&#40;/img/architecture_simple.png&#41;)


## Cloud Architecture
![UAchado Cloud Architecture](/img/architecture_cloud_resized.png)