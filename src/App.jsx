
import ProductsList from './Components/ProductsList';
import Header from './Components/Header';
import Button from './Components/Button';


const App = () => { 



  
 return (
    <div className='container'>
      <Header title= 'JEWELLERY'/>
     
     <div className='row'>
      <ProductsList />
      <Button title='Items'/>
      
     </div>
      
      
      
    </div>
  );
};

export default App;
