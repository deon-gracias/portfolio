---
title: Agriculture IoT
publishedDate: 2023/05/18
tags:
  - Next.js
  - React.js
  - Node.js
  - Firebase
  - Flask
---

## Table of contents

# Summary

- Developed an agriculture solution with a machine learning model for crop recommendation (using XGBoost) and separate models for identifying crop diseases (Tensorflow) and classifying insects (Yolo v5).

- Integrated these models into a single platform by building a website using Next.js and Flask, with Firebase for authentication and a Node.js server for fetching live field data from IoT sensors.

# Demo & Source Code

- [Live Demo - Crop Recommendation][Crop Recommendation Live]
- [Github - Crop Recommendation Frontend][Crop Recommendation Frontend]
- [Github - Crop Recommendation Backend][Crop Recommendation Backend]
- [Github - Agriculture IoT API][Agriculture IoT API]

# Abstract

- World will need to produce 70% more food in 2050. (UN FAO)
- Shrinking agricultural lands and depletion of finite natural resources is becoming a great concern.
- Limited availability of natural resources such as fresh water and arable land along with slow yeilding trends.
- Agricultural labor in most of the countries has declined.
- IoT solutions are focused on helping farmers close the supply demand gap, by ensuring high yields, profitability, and protection of the environment.

# System Design

- **Field Device**: Field device is the device which shall be installed on the field to measure soil quality parameters and facilitate automatic irrigation.
- **Gateway**: This module’s purpose is to push the data collected by field devices to the cloud for further processing.
- **Cloud**: This module is at the heart of the system, as most of the data processing happens here.
- **Client**: This module contains the frontend services which help users interact with the system.

# Objectives

- To capture dynamic data from a field using sensors on the device.
- To make a crop recommendation model using existing dataset and provide crop,fertilizer recommendations to farmers.
- To provide a platform where farmers can sell their produce.
- To build a smart irrigation system based on real time field conditions.
- To provide services such as speech translation and chatbot, so that farmers can use it with ease.
- To build a functionality which can detect pests, and crop diseases using image processing.

# Approach

- Finding various sensors which is suitable for recording the required parameters like soil nutrition , humidity, water level along with appropriate microcontroller.
- To communicate that data to server using appropriate Wi-Fi module so that processing could be done on server.
- To implement actuators which will automated by microcontroller.
- To develop a mobile/web application using flutter which fetches the data from server and displaying it to end user.
- To develop a machine learning algorithm which is to be included in server for processing the data which gives recommendation and insights to farmer regarding soil nutrition and crops.

[Crop Recommendation Live]: https://crop-recommendation-frontend.vercel.app/
[Crop Recommendation Frontend]: https://github.com/deon-gracias/crop-recommendation-frontend
[Crop Recommendation Backend]: https://github.com/deon-gracias/crop-recommendation-backend
[Agriculture IoT API]: https://github.com/deon-gracias/agri-iot-sensor-api
