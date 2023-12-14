# IoT-Home-Sensor-Monitor
A full-stack project that stores and displays air quality sensor data from my home. 

Demo Website: https://cloud.digitalocean.com/apps/64bed653-536f-4b65-a427-04cb30490de4/settings?i=2c3a19

API: https://8cdgfq0r3c.execute-api.us-east-1.amazonaws.com/prod/sensor-data

## Preview
![](./media/dashboardPreview.png)

## Overview
Software:
- Front-end: HTML, CSS, Javascript
- Backend: DynamoDB
- Middleware: Lambda
- API: API Gateway

Hardware:
- Microcontroller: ESP32
- Sensors: DHT11, SGP30



## Project Architecture

![](./media/iot-fullstack-diagram.png)

The air quality data is retrieved via sensors with an ESP32. The ESP32 module sends the data to AWS through API Gateway and stores it in DynamoDB through a Lambda function. The data on DynamoDB can be obtained via the API URI. The front-end dashboard displays data using the API with vanilla HTML, CSS, Javascript. The website is hosted on DigitalOcean.

## Project Setup

### Hardware Overview
![](./media/hardware.jpg)

### Hardware Components
| Component Name | Function | Notes |
|-------------|-------------|----|
| ESP32 (Dev C)  | Micro-controller | Cheap w/ built-in Wifi, easy to use |
|DHT11      |   Temperature and humidity sensor            | Cheap and has many libraries |
| SGP30     |   Air quality measurements (TVOC, eCO2)       | Cheap |
|Breadboard | Connect components | Can optionally solder but used breadboard in-case I want to reuse parts |

### Hardware Connections
#### ESP32
|   Pin |   Connected To    |       Notes                       |
|-------|-------------------|-----------------------------------|
|   26  |   DHT11           | GPIO                              |
|   21  |   SGP30 & SSD1306 | I2C SDA                           |
|   22  |   SGP30 & SSD1306 | I2C SCL                           |


### Software
#### ESP32 Programming
- Platform: PlatformIO (Arduino also works)
- Framework: Arduino for ESP32
- Libraries: See `platform.ini` file

#### AWS
- Platforms: Lambda (Node JS v20), DynamoDB, API Gateway.

#### Front End
- Stack: HTML, CSS, Javascript
- Libraries: [ChartJS](https://www.chartjs.org/)
- Color Scheme: [Catppuccin](https://github.com/catppuccin/catppuccin)

#### Website Hosting
- Platform: DigitalOcean

## Resources
[Scan/Query Table](https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/javascript_dynamodb_code_examples.html)
[Enable CORS for REST API](https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-cors.html)

## Notes to Self
- Use query instead of scan if possible for efficiency
- Enable lambda proxy integration for API Gateway to pass event
- Add `Access-Control-Allow-Origin: '*'` to response headers in Lambda to bypass CORS error (useful when doing local development)
- For AWS SDK V3 NodeJS be wary of outdated guides
