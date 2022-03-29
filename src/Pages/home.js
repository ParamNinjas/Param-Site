import React from 'react';
import Nav from '../Navigation/nav';
import { 
    Button,
    Typography,
    Grid,
    Container 
} from '@material-ui/core';
import Rectange from '../img/Rectangle-13.png';
import link from '../img/link.png';
import handshake from '../img/handshake.png';
import money from '../img/money.png';
import  microsoft from '../img/microsoft.png'
import liferay from '../img/Liferay.png'
import ibm from '../img/ibm.png'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import con from '../img/con.png'
import collab from '../img/collab.png'
import curiosity from '../img/curiosity.png'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import Partners from '../components/partners';
import Footer from '../Footer/footer';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });


function Home() {
    const classes = useStyles();
    return(
    <>   
        <Nav/>
        <div className='home-con'>
            <h2 className='home-text'>Connecting great<br/> Ideas with great <br/>teams through collaboration</h2>
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
                <Typography variant="h4">Our <strong>Business</strong></Typography>
                </div>
                <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm ={12} md={4} lg={4}>
                        <img
                        src={handshake}
                        alt='handIMG'
                        className='handImg'
                        />
                        <div className="businessTypo">
                            <Typography  variant='h5'>Our Model</Typography>
                        </div>
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
                        <div className="businessTypo">
                        <Typography  variant='h5'>Our Value Offering</Typography>
                        </div>
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
                        <div className="businessTypo"> 
                        <Typography  variant='h5'>Our Team</Typography>
                        </div>
                        <Typography>
                            Constructors, Delegators and Indexers, our Team are a blend of 
                            entrepreneurial self-starters with an innate curiosity about technology. 
                            A synchronized, high-performing team with more than 15 years collective 
                            experience. This ensures that each customers journey is successfully architected, 
                            managed and implemented
                        </Typography> 
                    </Grid>
                </Grid>
                </Container>
            </div>
            <div className='partner'>
                <div className='partner-typo'>
                    <Typography variant='h2'>Our <strong>Technology Partners</strong></Typography>
                </div>
                
                <div className='partner-logo'>
                    <Partners/>
                        {/* <AliceCarousel autoPlay autoPlayInterval="1000">
                            <img src={microsoft} className="sliderimg"/>
                            <img src={liferay} className="sliderimg"/>
                            <img src={ibm} className="sliderimg"/>
                            <img src={microsoft} className="sliderimg"/>
                            <img src={liferay} className="sliderimg"/>
                            <img src={ibm} className="sliderimg"/>
                            <img src={microsoft} className="sliderimg"/>
                            <img src={liferay} className="sliderimg"/>
                            <img src={ibm} className="sliderimg"/>
                        </AliceCarousel> */}
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
                <Typography variant='h3'>Our <strong>Mantra</strong></Typography>
                
                </div>
                <Typography>
                    Digital Transformation does not come from comfort zones! 
                </Typography>
            </div>
            <div className='cards'>
                
                <div className='card1'>
                    <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={con}
                        title="consolidation"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Consolidation
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Consolidating systems in your business eliminates information 
                            silo's,  such as integrating across legacy systems, whilst providing 
                            operational efficiencies. 
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button variant='outlined' size="small" className='conBtn'>
                            Read More...
                        </Button>
                    </CardActions>
                    </Card>
                </div>
                <div className='card2'>
                    <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={collab}
                        title="collaboration"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Collaboration
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Facilitating collaboration improves productivity across your business,
                            reduces costs, shortens timelines and encourages shared ideas.  
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button variant='outlined' size="small" className='conBtn'>
                            Read More...
                        </Button>
                    </CardActions>
                    </Card>
                </div>
                <div className='card3'>
                    <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={curiosity}
                        title="cutiosity"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Curiosity
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Remarkable inventions throughout history, from the light bulb to electric
                        cars, are all the result of curiosity.
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button variant='outlined' size="small" className='conBtn'>
                            Read More...
                        </Button>
                    </CardActions>
                    </Card>
                </div>
              
            </div>
            <div className='stats'>
                
                <div className='quote'>
                    <Typography>
                    " We are better working together on<br/> delivering one big solution, 
                        then working as individuals<br/> on smaller outcomes "
                    </Typography>
                </div>
                <div className='clients'>
                    <Typography>
                        Global provider of technology
                    </Typography>
                    <Typography variant='h3'>
                        30 + Clients
                    </Typography>
                </div>
                <div className='techpart'>
                    <Typography>
                        Technology that is African
                    </Typography>
                    <Typography variant='h3'>
                        Growing to<br/>
                        10 + Partners
                    </Typography>
                </div>
                
            </div>
            <br/>
            <br/>
            <br/>
    <Footer/>
    
    </>
    )
}
export default Home;