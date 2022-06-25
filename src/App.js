import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


export default function BasicCard() {
  return (

    <div className='section'>
      <div className='free'>
      <Card  style = {{borderRadius: "10px"}} sx={{ maxWidth: 600 }}>
      <CardContent>
        <div className='name'>
        <h6 className='text-muted text-uppercase'>free</h6>
        <p><span>$0</span>/month</p>
        </div>
        
        <hr></hr>
        <p><CheckIcon/>&nbsp;Single User</p>
         <p> <CheckIcon/>&nbsp;  5GB Storage</p>
          <p> <CheckIcon/>&nbsp; Unlimited Public Projects</p>
           <p><CheckIcon/> &nbsp; Community Access</p>
           <div className='disable'>
           <p ><ClearIcon/>Unlimited Private Projects</p>
             <p> <ClearIcon/> Dedicated Phone Support</p>
              <p><ClearIcon/>  Free Subdomain</p>
               <p><ClearIcon/> Monthly Status Reports </p>
           </div>
           <div >
           <Button className='button' variant="contained">Button</Button>
           </div>
          
          
      </CardContent>
      
    </Card>
      </div>

<div className='plus'>
<Card  style = {{ borderRadius: "10px"}} sx={{ maxWidth: 375 }}>
      <CardContent>
        <div className='name'>
        <h6 className='text-muted text-uppercase'>plus</h6>
         <p><span>$9</span>/month</p>
        </div>
       
        <hr></hr>
        <p><CheckIcon/>&nbsp;Single User</p>
         <p> <CheckIcon/>&nbsp;  5GB Storage</p>
          <p> <CheckIcon/>&nbsp; Unlimited Public Projects</p>
           <p><CheckIcon/> &nbsp; Community Access</p>
          
           <p ><CheckIcon/>Unlimited Private Projects</p>
             <p> <CheckIcon/> Dedicated Phone Support</p>
              <p><CheckIcon/>  Free Subdomain</p>
              <div className='disable'>
               <p><ClearIcon/> Monthly Status Reports </p>
           </div>
           <div >
           <Button className='button' variant="contained">button</Button>
           </div>
          
          
      </CardContent>
      
    </Card>
</div>
    
    <div className='pro'>
    <Card  style = {{ borderRadius: "10px"}} sx={{ maxWidth: 375 }}>
      <CardContent>
        <div className='name'>
        <h6 className='text-muted text-uppercase'>pro</h6>
        <p><span>$49</span>/month</p>
        </div>
       
        <hr></hr>
        <p><CheckIcon/>&nbsp;Single User</p>
         <p> <CheckIcon/>&nbsp;  5GB Storage</p>
          <p> <CheckIcon/>&nbsp; Unlimited Public Projects</p>
           <p><CheckIcon/> &nbsp; Community Access</p>
          
           <p ><CheckIcon/>Unlimited Private Projects</p>
             <p> <CheckIcon/> Dedicated Phone Support</p>
              <p><CheckIcon/>  Free Subdomain</p>
               <p><CheckIcon/> Monthly Status Reports </p>
          
           <div >
           <Button className='button' variant="contained">button</Button>
           </div>
          
          
      </CardContent>
      
    </Card>
    </div>
    
    </div>
    
  );
}
