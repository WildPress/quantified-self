# Quantified Self

Please refer to my [blog post](https://wildpress.co/blog/self-hosted-health-dashboard) for more details.

## Server Installation

1. Clone this repo
1. Copy .env.example to .env
1. Update the .env variables
1. `docker compose up -d`
1. Connect to InfluxDB: http://hostname:8086
1. Connect to Grafana: http://hostname:3000
1. InfluxDB: Generate a write-only API key for your bucket (for Tasker)
1. InfluxDB: Generate a read-only API key for your bucket (for Grafana)
1. Grafana: Add the InfluxDB bucket as a data source. You will need to set a custom HTTP header: "Authorization": "Token YOUR_API_TOKEN". Make sure to include "Token ".
1. You should be connected and ready to set-up your first Grafana dashboards!

## Android Installation

1. Install Health Connect
1. Connect Health Connect to Samsung Health, Google Fit, Withings, etc.
1. Install Tasker
1. Install [TaskerHealthConnect](https://github.com/RafhaanShah/TaskerHealthConnect) plugin
1. Import the taskerTemplate.conf into Tasker
1. Download the healthConnectExport.js file and update the Path in the Tasker A2 task.
1. Generate a write-only API key for your InfluxDB bucket and add it as a Tasker variable %INFLUXDB_API_TOKEN
1. Add a Tasker variable %INFLUXDB_API, it should be formatted: "HOSTNAME:8086/api/v2/write?org=YOUR_ORG&bucket=YOUR_BUCKET&precision=ms
1. Run the tasker task to verify it works and set it up to run on a schedule

## Usage
Once installed, you should be able to run the Tasker task to push your Health Connect data to InfluxDB. You can then query this data in Grafana to create your dashboards. I'll go into more details about creating useful dashboards on my [blog](https://wildpress.co/blog).
