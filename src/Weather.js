import React, {useState, useEffect, useRef} from 'react';
import {Button, TableCell, TableHead} from '@mui/material';
import {Grid} from '@mui/material';
import {TextField} from '@mui/material';
import {Table} from '@mui/material';
import {TableRow} from '@mui/material';

const cityList = [
  "Austin",
  "Dallas",
  "Houston"
]

export default function Weather () {

  const [info, setInfo] = useState([]);
  const [cities, setCities] = useState(cityList);
  const [cityName, setCityName] = useState("Austin");

  useEffect(() => {
    GenerateInfo("Austin");
  // eslint-disable-next-line
  }, []);

  function GenerateInfo(city) {
    city = city.charAt(0).toUpperCase() + city.slice(1);
    let locAPI = "https://geocoding-api.open-meteo.com/v1/search?name=" + city;
    var coordinates = "";
    fetch(locAPI)
     .then(response => response.json())
     .then(data => {
      if (data.results === undefined) {
        alert("City not found");
        return;
      } else {
        coordinates = "latitude=" + String(data.results[0].latitude) + "&longitude=" + String(data.results[0].longitude);
        let weatherAPI = "https://api.open-meteo.com/v1/forecast?" + coordinates + "&hourly=temperature_2m&temperature_unit=fahrenheit";
        fetch(weatherAPI)
         .then(response => response.json())
         .then((data) => 
         { 
          let temp = []
          for (var i = 13; i <= 24; i++){
            var temperature = data.hourly.temperature_2m[i] + " F";
            temp.push(temperature);
          }
          setInfo(temp);
          setCityName(city);
          if (cities.includes(city) === false)  {
            cityList.push(city);
            setCities(cityList);
          }
        });
      }
    })
  }

  const ref = useRef(null);

  if (info.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div>
        <Grid
          sx = {{p: 2}}
          container
          spacing={2}
          alignItems="center"
          justifyContent="center"
          direction= "column"
        >
          <Grid sx = {{p: 2}}>
            Hello, You
          </Grid>
          <Grid sx = {{p: 1}}>
            {cities.map(city => (
              <Button onClick = { () => GenerateInfo(String(city))} variant = "outlined">{city}</Button>
            ))}
          </Grid>
          <Grid sx = {{p: 1}}>
            <TextField inputRef = {ref} id = "standard-basic" label = {'search for city'} size = "small"/>
            <Button onClick = { () => GenerateInfo(ref.current.value)} style = {{width: 40, height: 40}} size = "small" variant = "outlined">+</Button>
          </Grid>
          <Grid sx = {{p: 1}}>
            {cityName.toUpperCase()}
          </Grid>
          <Grid>
            <Table>
              <TableHead>
                <TableCell align ="center">Time</TableCell>
                <TableCell align ="center">Temperature</TableCell>
              </TableHead>
              <TableRow>
                <TableCell align ="center">1:00 PM</TableCell>
                <TableCell align ="center">{info[0]}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align ="center">2:00 PM</TableCell>
                <TableCell align ="center">{info[1]}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align ="center">3:00 PM</TableCell>
                <TableCell align ="center">{info[2]}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align ="center">4:00 PM</TableCell>
                <TableCell align ="center">{info[3]}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align ="center">5:00 PM</TableCell>
                <TableCell align ="center">{info[4]}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align ="center">6:00 PM</TableCell>
                <TableCell align ="center">{info[5]}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align ="center">7:00 PM</TableCell>
                <TableCell align ="center">{info[6]}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align ="center">8:00 PM</TableCell>
                <TableCell align ="center">{info[7]}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align ="center">9:00 PM</TableCell>
                <TableCell align ="center">{info[8]}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align ="center">10:00 PM</TableCell>
                <TableCell align ="center">{info[9]}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align ="center">11:00 PM</TableCell>
                <TableCell align ="center">{info[10]}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align ="center">12:00 AM</TableCell>
                <TableCell align ="center">{info[11]}</TableCell>
              </TableRow>
            </Table>
          </Grid>
          <Grid sx = {{p: 2}}>
            <Button variant = "outlined">Logout</Button>
          </Grid>
        </Grid>
    </div>    
  );
}

