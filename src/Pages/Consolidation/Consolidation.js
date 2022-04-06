import React from "react";
import Nav from '../../Navigation/nav';
import { 
    Button,
    Typography,
    Grid,
    Container 
} from '@material-ui/core';
import Footer from '../../Footer/footer';
import consol1 from '../../img/consol1.png';
import consol2 from '../../img/consol2.png';
import conimage1 from '../../img/conimage1.png';
import conimage2 from '../../img/conimage2.png';
import './Consolidation.css'


const Consolidation=() => {

    return(
        <>
        <Nav/>
        <div className="Consolidate-con">
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
            <div className="consol">
                <Container>
                <Typography 
                    variant="h2"
                    className="consolTypo"
                    >
                    Consolidation
                </Typography>
                <div className="consol-content">
                    <div className="content-Img">
                        <img
                            src={consol1}
                            alt='consol1IMG'
                            className='consol1Img'
                        />
                           <img
                            src={consol2}
                            alt='consol2IMG'
                            className='consol2Img'
                        />

                    </div>
                    <div className="content-paragraph">
                        <p>
                        Consolidating systems in your business eliminates information
                         silo's,  such as integrating across legacy systems, whilst
                        providing operational efficiencies. 
                        </p>
                        <p>
                        Automation of repetitive tasks, streamlining business processes to
                        eliminate superfluous tasks, reducing costs and allowing for
                        better decision making.
                        </p> 
                        <p>
                        Param Solutions assists customers gain further insight into their
                        business so they are able to adapt to ever changing market trends.
                        </p>
                    </div>
                </div>
                <div className="consolidate-images">
                <img
                    src={conimage1}
                    alt='conimage1IMG'
                    className='conimage1'
                />
                   <img
                    src={conimage2}
                    alt='conimage2IMG'
                    className='conimage2'
                />

                </div>
                </Container>
            </div>
            
        </div>
        </>
    )
}

export default Consolidation