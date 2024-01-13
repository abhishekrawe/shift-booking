
# ❄️Frontend Developer Assignment


- ⬇️ For Running this repository on a local 
- ⬇️ Frontend - cd to shift-booking > npm install > npm start
- ⬇️ Backend - cd to Backend > npm install > npm start 
 
# API Documentation Update

## Issue
Encountered problems with the Backend Server while using the POST method for `/shifts/{id}/cancel` and `/shifts/{id}/book` endpoints. Despite spending considerable time debugging and testing using Postman, the POST method did not seem to be functioning as expected.

## Temporary Solution
Changed the problematic POST methods to GET:
- `/shifts/{id}/cancel` now uses `GET`
- `/shifts/{id}/book` now uses `GET`

This temporary fix allows continued frontend development, prioritizing immediate progress.


## 🃏Glimse of Project ⏬

### `video ` 

https://github.com/abhishekrawe/shift-booking/assets/65603830/adeb47fe-2d77-4c64-989f-f13c5373686e

## 💜 Shift booking application .
- [x] The application according the design spec:
      
## Available Shifts
- [x] Filter shifts by the city
- [x] Shifts are grouped by dates
- [x] Shifts can be booked or cancelled
      
## My Shifts
- [x] Lists all booked shifts
- [x] Shifts are grouped by dates
- [x] Shifts can be cancelled

Facing issue, when we trying to modify overlapping issue , all the shifts are overlapped 

![Screenshot 2024-01-14 020548](https://github.com/abhishekrawe/shift-booking/assets/65603830/0f36a793-65ce-4c96-b79c-891ec3f6e9d3)

