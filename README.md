# IoT-Home-Sensor-Monitor
A full-stack project that stores and displays air quality sensor data. Air quality data is retrieved via sensors with an ESP32, sent to AWS through API Gateway, stored in DynamoDB, and accessible via the API. The front-end displays data using ReactJS.

Demo Website: Todo

API: https://8cdgfq0r3c.execute-api.us-east-1.amazonaws.com/prod/sensor-data

## Overall Project Architecture

Todo

## Project Setup
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
- Platforms: Lambda (Node JS v20), DynamoDB, API Gateway



## Resources
[Scan/Query Table](https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/javascript_dynamodb_code_examples.html)