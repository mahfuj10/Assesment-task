import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navigation from './components/Navigation/Navigation';
import { setClients } from './components/Redux/action/action';
import ClientsTable from './components/Table/ClientsTable/ClientsTable';
import TableHeader from './components/Table/TableHeader/TableHeader';


function App() {



  const dispatch = useDispatch();

  const FetchClients = () => {

    axios.get('https://run.mocky.io/v3/8260aa5d-8af8-4cff-999e-6e81b217f0ba')
      .then(response => {
        dispatch(setClients(response.data))
      })
      .catch(error => {
        alert(error)
      })
  };


  useEffect(() => {
    FetchClients();
  }, [])

  return (

    <>
      <Navigation />
      <TableHeader />
      <ClientsTable />
    </>
  );
}

export default App;
