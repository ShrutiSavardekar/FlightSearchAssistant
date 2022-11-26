import express from 'express';
import bodyParser from 'body-parser';
import cassandra from 'cassandra-driver';
import cors from 'cors';

import flightRoutes from './routes/flight.js';


const app = express();


app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));

app.use(cors());

app.use('/api', flightRoutes);
const PORT = 6000;

const client = new cassandra.Client({
  contactPoints: ['127.0.0.1'],
  localDataCenter: 'datacenter1',
  keyspace: 'flights'
});

client.connect()
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

    const Mapper = cassandra.mapping.Mapper;

const mapper = new Mapper(client, {
    models: {'flights': {
      tables: ['flightdetails'],
      columns: {
        'dayofmonth': 'dayofmonth',
        'dayofweek': 'dayofweek',
        'carrier': 'carrier',
        'originairportid': 'originairportid',
        'destairportid': 'destairportid'
      }
    }}
  })

const flightsMapper = mapper.forModel('flights');

export {
    flightsMapper 
};
