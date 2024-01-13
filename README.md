
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

## 💜 Shift booking application .
- [x] The application according the design spec:
      
## Available Shifts
- [x] Filter shifts by the city
- [x] Shifts are grouped by dates
- [x] Shifts can be booked or cancelled
      
## My Shifts
- [x] Lists all booked shifts
- [ ] Shifts are grouped by dates
- [x] Shifts can be cancelled

🐸 Tech Stack Used 🐸 - ReactJS , Redux , Tailwind CSS






