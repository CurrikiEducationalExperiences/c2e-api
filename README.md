
This application is used to provide JSON responses to KPIs and Tabs in https://c2e-reader.curriki.org/

All Api accepts userId as query parameter and provides JSON response.

Please start this application with node index.js in the system or host it inside the docker.

Build with

**npm install --save express cors**

Default PORT is set to **5001** which can be customized based on the instances.


# Detail of APIs:

## 1. My Top Selling C2Es

EndPoint: **`/api/v1/wallet/sales`**

Parameter: **userId - Int**

Example: http://localhost:5001/api/v1/wallet/sales?userId=1

## 2. My Top Marketplaces

EndPoint: **`/api/v1/wallet/marketplace`**

Parameter: **userId - Int**

Example: http://localhost:5001/api/v1/wallet/marketplace?userId=1

## 3. My Income

EndPoint: **`/api/v1/wallet/income`**

Parameter: **userId - Int**

Example: http://localhost:5001/api/v1/wallet/income?userId=1

## 4. My C2Es

EndPoint: **`/api/v1/c2e/listall`**

Parameter: **userId - Int**

Example: http://localhost:5001/api/v1/c2e/listall?userId=1

## 5. Marketplace Listings

EndPoint: **`/api/v1//c2e/marketplace`**

Parameter: **userId - Int**

Example: http://localhost:5001/api/v1/c2e/marketplace?userId=1
