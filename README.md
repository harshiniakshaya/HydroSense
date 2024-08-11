# HydroSense

## Overview

HydroSense is an IoT-based water management solution aimed at reducing water loss, improving efficiency in detecting and responding to issues, and fostering community involvement in water conservation. It integrates real-time monitoring and reporting tools to address water distribution challenges, with a focus on reducing Non-Revenue Water (NRW).

## Problem Statement

### 1. High Levels of Water Loss
Urban areas lose up to 50% of their water supply due to leaks, unauthorized use, and aging infrastructure, exacerbating water scarcity in regions already facing limited water resources.

### 2. Inefficiency in Detecting and Responding to Issues
Many city water systems lack real-time monitoring, delaying the detection of leaks and illegal connections. This leads to prolonged water loss and increased costs.

### 3. Lack of Community Involvement in Water Conservation
Effective water management requires community participation, but low engagement hinders early detection of leaks and unauthorized usage, weakening conservation efforts.

### 4. Risks to Public Health from Poor Water Quality
Inadequate monitoring of water quality, especially pH levels, poses serious public health risks, including waterborne diseases, due to insufficient oversight.

### 5. Economic Implications of Non-Revenue Water
NRW results in significant financial losses, costing utilities billions annually and hindering investments in infrastructure and services.

## Solution

### 1. Real-Time Water Distribution Monitoring
HydroSense integrates flow meter data to visualize the water distribution network. It generates alerts for discrepancies, helping identify leaks or inefficiencies and reduce non-revenue water loss.

### 2. Efficient Issue Reporting
Users can report water issues via the app, with details like location and timestamp logged for effective tracking.

### 3. Complaint Handling
The dashboard tracks and manages complaints, including categorization and status updates.

### 4. Share Insights
Residents can discuss water usage, share solutions, and exchange conservation tips, fostering a proactive community.

### 5. Real-Time pH Monitoring
The app uses pH sensors to continuously update water acidity or alkalinity, ensuring prompt detection and correction of unsafe pH levels.

## System Architecture

The system architecture of HydroSense comprises the following components:

- **IoT Devices**: Flow sensors and pH sensors to monitor water distribution and quality.
- **Database**: Stores data related to complaints, employees, alerts, and community posts.
- **App**: User and employee interfaces for logging complaints, viewing alerts, and tracking statuses.
- **Admin Dashboard**: Manages complaints, alerts, and employee assignments.

### Flow Chart
![Flow Chart](hydorsense-flowchart.png)

### System Architecture Diagram
![System Architecture](hydrosensor-system-architecture.png)

## Technology Stack

### Frontend
- **React**: For building the admin dashboard.
- **Flutter**: For developing the mobile app interface.
- **Tailwind CSS**: For styling the frontend components.

### IoT
- **Arduino**: Microcontroller platform used for reading sensor data.
- **Water Flow Sensor**: Detects the flow of water in the pipes.
- **pH Sensor**: Monitors the acidity or alkalinity of the water.

### Backend
- **Firebase**: For real-time database management and authentication.
- **Django**: A high-level Python web framework used for handling backend operations.

## How to Run the Project

1. **Clone the repository**:
   ```bash
   git clone https://github.com/harshiniakshaya/HydroSense.git
