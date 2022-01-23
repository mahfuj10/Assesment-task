import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation/Navigation';
import ClientsTable from './components/Table/ClientsTable/ClientsTable';
import TableHeader from './components/Table/TableHeader/TableHeader';


function App() {

  return (

    <>
      <Navigation />
      <TableHeader />
      <ClientsTable />
    </>
  );
}

export default App;
