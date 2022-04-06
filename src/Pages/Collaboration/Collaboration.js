import React from 'react';
import Nav from '../../Navigation/nav';
import { 
    Button,
    Typography,
    Grid,
    Container 
} from '@material-ui/core';
import Footer from '../../Footer/footer';
import collab1 from '../../img/collab1.png'
import collab2 from '../../img/collab2.png'
import collab3 from '../../img/collab3.png'
import './Collaboration.css'

const Collaboration =() => {

    return (
        <>
         <Nav/>
        <div className='collab-con'>     
            <div className='home-con'>
                <h2 className='home-text'>Connecting great<br/> Ideas with great <br/>teams through collaboration</h2>
                    <div className='homeBTN'>
                        <Button 
                            className='teamBTN'
                            variant='outlined'
                            >
                                Team Content
                        </Button>
                        <Button 
                            className='aboutBTN'
                            variant='outlined'
                            >
                                About Us
                        </Button>
                    </div>
            
                    <div className='home-paragraph'>
                        <p>
                            Param Solutions is a technology development studio and enterprise solutions
                            company. Our name is derived from parameters in the fundamentals of programming.  
                            Parameters are indispensable components of functions, allowing functions to 
                            perform tasks without knowing the values ahead of time and allowing programmers 
                            to divide their code into logical blocks.
                        </p>
                    </div>
            </div>
            <div className='Collab'>
                <Typography 
                    variant='h2'
                    className='collabTypo'
                    >
                        Collaboration
                </Typography>
                <div className='collab-paragraph'>
                    <Container>
                    <div className='p1'>
                        <p>
                            Facilitating collaboration improves productivity across your business,
                            reduces costs, shortens timelines and encourages shared ideas. 
                        </p>
                    </div>
                    <div className='p1'>
                    <p>
                     Param Solutions, along with our technology partners offer the right 
                     tools to improve your business agility.  
                    </p>  
                    </div>
                    <div className='p1'>
                        <p>
                            Our platforms enable real-time information exchange to improve
                            your customers experience. 
                        </p>
                    </div>
                    <div className='p1'>
                        <p>
                            Embrace self-service portals, streamline workflows,and enable
                            knowledge workers to access content, optimizing the utilization
                            of distributed resources.
                        </p>
                    </div>
                    </Container>
                </div>
            </div>
            <div className='collab-images'>
                <Container>
                <img
                    src={collab3}
                    alt='collab3IMG'
                    className='collab3Img'
                />
                  <img
                    src={collab2}
                    alt='collab2IMG'
                    className='collab2Img'
                />
                  <img
                    src={collab1}
                    alt='collab1IMG'
                    className='collab1Img'
                />
                </Container>
            </div>
 
    
        </div>
        </>
    )

}
export default Collaboration;