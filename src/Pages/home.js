import React from 'react';
import Nav from '../Navigation/nav';
import { 
    Button,
    Typography,
    Grid, 
    Card 
} from '@material-ui/core';
import Rectange from '../img/Rectangle-13.png';
import link from '../img/link.png';
import handshake from '../img/handshake.png';
import money from '../img/money.png';
import  microsoft from '../img/microsoft.png'
import liferay from '../img/Liferay.png'
import ibm from '../img/ibm.png'


function Home() {
    return(
    <>   
        <div className='home-con'>
        <Nav/>
            <h2>Connecting great Ideas with great teans through collaboration</h2>
            <div className='homeBTN'>
   <            Button 
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
    <div className='tp'>
        <img
            src={Rectange}
            alt='tpimage'
            className='tpimage'
            width={800}
            height={400}
            />
        <div className='typo'>
            <Typography variant="h3" className='tptypo'>
                A    team   built     to enable collobaration between     business and 
                technology.
            </Typography>
            <Typography>
                We    form   partnerships   with     founders    and 
                businesses to become their development partner. 
                Making us responsible   for   developing solutions 
                that   bring   positive  outcomes   and   allow   for 
                disruption to take.
            </Typography>
        </div>  
    </div>
    <div className='business'>
        <div className='bizTypo'>
        <Typography variant='h2'fontWeight="fontWeightRegular">Our</Typography>
        <Typography variant='h2' fontWeight="fontWeightBold"ght>Business</Typography>
        </div>
        <Grid container spacing={2}>
            <Grid item xs={12} sm ={12} md={4} lg={4}>
                <img
                src={handshake}
                alt='handIMG'
                className='handImg'
                />
                <Typography className="model" variant='h3'>Our Model</Typography>
                <Typography>
                    We form strategic partnerships with our customers and technology 
                    solution providers. An integral part of an ecosystem built on mutual 
                    trust and collaboration, to deliver a full spectrum of innovative and 
                    adaptable solutions.
                </Typography>
            </Grid>
            <Grid item xs={12} sm ={12} md={4} lg={4}>
            <img
                src={money}
                alt='moneyIMG'
                className='moneyImg'
                
                />
                <Typography variant='h3'>Our Value Offering</Typography>
                <Typography>
                    The key to unlocking business value is working in synergy with our 
                    customers to adopt leading technologies, co-creating and speeding 
                    up product development, measuring and auditing strategic digital solutions.
                </Typography>
            </Grid>
            <Grid item xs={12} sm ={12} md={4} lg={4}>
                <img
                    src={link}
                    alt='linkIMG'
                    className='linkImg'
                    />
                <Typography variant='h3'>Our Team</Typography>
                <Typography>
                    Constructors, Delegators and Indexers, our Team are a blend of 
                    entrepreneurial self-starters with an innate curiosity about technology. 
                    A synchronized, high-performing team with more than 15 years collective 
                    experience. This ensures that each customers journey is successfully architected, 
                    managed and implemented
                </Typography> 
            </Grid>
        </Grid>
    </div>
    <div className='partner'>
        <div className='partner-typo'>
            <Typography variant='h2'>Our</Typography>
            <Typography variant='h2'>Technology Partners</Typography>
        </div>
        <div className='partner-logo'>
            <img
                src={microsoft}
                alt='microIMG'
                className='microImg'
            />
            <img
                src={liferay}
                alt='lifeIMG'
                className='lifeImg'
            />
            <img
                src={ibm}
                alt='ibmIMG'
                className='ibmImg'
            />
        </div>
        <div className='partner-sen'>
            <Typography variant='h5'>
                A combination of best of breed solutions and industry practices including 
                Design Thinking, Agile development and continuous delivery to deliver 
                innovative solutions. 
            </Typography>
        </div>
    </div>
    <div className='mantra'>
        <div className='mantra-typo'>
        <Typography variant='h3'>Our</Typography>
        <Typography variant='h3'>Mantra</Typography>
        </div>
    </div>
    </>
    )
}
export default Home;