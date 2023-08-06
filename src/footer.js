import logo from './logo.svg';
import './App.css';

export default function Footer() {
  return (
    <div className="container" style={{maxWidth:'100%'}}>
    <footer className="text-center text-white" style={{backgroundColor: '#f1f1f1'}}>
  
      <div className="container pt-4">
  
        <section className="mb-4">
     
          <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark"><i className="fa fa-facebook-f" /></a>
      
          <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark"><i className="fa fa-twitter" /></a>
       
          <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark"><i className="fa fa-google" /></a>
          
          <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark"><i className="fa fa-instagram" /></a>
          
          <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark"><i className="fa fa-linkedin" /></a>
     
          <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark"><i className="fa fa-github" /></a>
        </section>
   
      </div>
    
      <div className="text-center text-dark p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
        © 2020 Copyright:
        <a className="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
      </div>
    
    </footer>
  </div>
 
  );
}


