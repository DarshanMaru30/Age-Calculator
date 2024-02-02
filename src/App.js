import './App.css';
import { useState } from 'react';

function App() {

  let[date1,setdate1] = useState('');
  let[date2,setdate2] = useState('');
  let[sec,setsec] = useState('');
  let[min,setmin] = useState('');
  let[hour,sethour] = useState('');
  let[day,setday] = useState('');
  let[week,setweek] = useState('');
  let[mon,setmon] = useState('');
  let[year,setyear] = useState('');  

  let age = () => {
    let ms, second, min, hour, day, week, year, month;
    ms = Date.parse(date2) - Date.parse(date1);
    second = ms/1000;
    min = second/60;
    hour = min/60;
    day = hour/24;
    week = parseInt(day/7);
    month = parseInt(hour/730);
    year = parseInt(day/365);    

    setsec(second)
    setmin(min)
    sethour(hour)
    setday(day)
    setweek(week)
    setmon(month)
    setyear(year)

  }

  return (
    <>
      <div class="simple">
      <div class="main" style={{textAlign:'center'}}>
        <h1>Age Calculator </h1>
        <div class="first">
          <h3>DOB :- <input type="date" name="" id="dob" onChange={(e) => { setdate1(e.target.value) }} /></h3>
        </div>
        <div class="first">
          <h3>Today Date :- <input type="date" name="" id="td" onChange={(e) => {setdate2(e.target.value)}} /></h3>
        </div>
      </div>
      <div class="middle d-flex" style={{textAlign:'center'}}>
        <button class="ans" onClick={age}>
          Click Here To Calculate
        </button>
      </div>
     
      <div class="last">
      <div class="bottom">
        <p class="d-flex">Years :- <input type="text" placeholder='Years' value={year} /></p>
        <p class="d-flex">Months :- <input type="text" placeholder='Months' value={mon} /></p>
        <p class="d-flex">Weeks :- <input type="text" placeholder='Weeks' value={week} /></p>
        <p class="d-flex">Days :- <input type="text" placeholder='Days' value={day} /></p>
        <p class="d-flex">Hours :- <input type="text" placeholder='Hours' value={hour} /></p>
        <p class="d-flex">Minutes :- <input type="text" placeholder='Minutes' value={min} /></p>
        <p class="d-flex">Seconds :- <input type="text" placeholder='Seconds' value={sec} /></p>
      </div>
      </div>
      </div>
    </>
  );
}

export default App;
