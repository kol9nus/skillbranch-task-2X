import express from 'express';
import cors from 'cors';

const returnValues = ['1', '18'];
returnValues.length = 19;
returnValues[2] = '243';
returnValues[3] = '3240';
returnValues[4] = '43254';
returnValues[5] = '577368';
returnValues[6] = '7706988';
returnValues[7] = '102876480';
returnValues[8] = '1373243544';
returnValues[9] = '18330699168';
returnValues[10] = '244686773808';
returnValues[11] = '3266193870720';
returnValues[12] = '43598688377184';
returnValues[13] = '581975750199168';
returnValues[14] = '7768485393179328';
returnValues[15] = '103697388221736960';
returnValues[16] = '1384201395738071424';
returnValues[17] = '18476969736848122368';
returnValues[18] = '246639261965462754048';



const app = express();
app.use(cors());
app.get('/', (req, res) => {
  res.send(returnValues[req.query.i]);
});

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
