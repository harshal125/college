import React from 'react'
import { Button, makeStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Avatar from '@material-ui/core/Avatar';
import './Profile.css';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import 'bootstrap/dist/css/bootstrap.min.css';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        width: theme.spacing(100),
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    First: {
        height: theme.spacing(25),
        direction: 'row',
        justify: 'space-around',
        alignItems: 'center',
    },
    large: {
        width: theme.spacing(15),
        height: theme.spacing(15),
    },
    Button: {
        color: 'red',
        justify: 'flex-end',
        alignItems: 'flex-end',
    },
    Second: {
        width: theme.spacing(100),
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
    },
    Second_Paper: {
        width: theme.spacing(100),
    },
    Third: {
        height: theme.spacing(25),
        direction: 'row',
        justify: 'center',
        alignItems: 'center',
        marginBottom: theme.spacing(9),
    },
    Four: {
        height: theme.spacing(25),
        direction: 'row',
        justify: 'center',
        alignItems: 'center',
        marginBottom: theme.spacing(9),
    },
    Five: {
        height: theme.spacing(25),
        direction: 'row',
        justify: 'center',
        alignItems: 'center',
    },
}));

export default function Profile() {

    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>

                {/*First Grid Element*/}
                <Grid container item xs={12} className={classes.First}>
                    <Grid item xs={2} />
                    <Grid container item xs={8}>
                        <Paper className={classes.paper} elevation={3}>
                            <div>
                                <Avatar
                                    alt="Logo"
                                    src="./Photo.jpg"
                                    className={classes.large}
                                />
                            </div>
                            <Grid
                                container
                                direction="row"
                                justify="center"
                                alignItems="baseline"
                            >
                                <h3>Yogesh Bhamare</h3>
                            </Grid>
                            <Grid
                                container
                                direction="row"
                                justify="flex-end"
                                alignItems="flex-start"
                            >
                                <Button variant='outlined' className={classes.Button}>
                                    View your public profile
                                </Button>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={2} />
                </Grid>


                {/*Second Grid Element*/}
                <Grid container item xs={12} className={classes.Second}>
                    <Grid item xs={2} />
                    <Grid item xs={8} >
                        <Paper elevation={3} >
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                indicatorColor="primary"
                                textColor="primary"
                                centered
                                className="TabSet"
                            >
                                <Tab label="Profile" />
                                <Tab label="Activity" />
                                <Tab label="Account Setting" />
                            </Tabs>
                        </Paper>
                    </Grid>
                    <Grid item xs={2} />
                </Grid>

                {/*Third Grid Element*/}
                <Grid container item xs={12} className={classes.Third}>
                    <Grid item xs={2} />
                    <Grid container item xs={8}>
                        <Paper className={classes.paper} elevation={3}>
                            <Grid
                                container
                                direction="row"
                                justify="flex-start"
                                alignItems="flex-start">
                                <Grid
                                    container
                                    item
                                    direction="row"
                                    justify="flex-start"
                                    alignItems="flex-start"
                                    className='titleBar'
                                >
                                    <h3>PERSONAL INFORMATION</h3>
                                </Grid>

                                <Grid
                                    item
                                    direction="column"
                                    justify="flex-start"
                                    alignItems="flex-start"
                                >
                                    <div style={{ width: '100%' }}>
                                        <Box display="flex" p={1} bgcolor="background.paper">
                                            <Box p={1} flexGrow={1}>
                                                <h5><PhoneIcon /> 9890248817</h5>
                                            </Box>
                                        </Box>
                                        <Box display="flex" p={1} bgcolor="background.paper">
                                            <Box p={1} flexGrow={1}>
                                                <h5><EmailIcon /> ypbhamare07@gmail.com</h5>
                                            </Box>
                                        </Box>
                                        <Box display="flex" p={1} bgcolor="background.paper">
                                            <Box p={1} flexGrow={1}>
                                                <h5><LocationOnIcon /> Shirpur, Maharashtra</h5>
                                            </Box>
                                        </Box>
                                    </div>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={2} />
                </Grid>


                {/*Four Grid Element*/}
                <Grid container item xs={12} className={classes.Four}>
                    <Grid item xs={2} />
                    <Grid container item xs={8}>
                        <Paper className={classes.paper} elevation={3}>
                            <Grid
                                container
                                direction="row"
                                justify="flex-start"
                                alignItems="flex-start">
                                <Grid
                                    container
                                    item
                                    direction="row"
                                    justify="flex-start"
                                    alignItems="flex-start"
                                    className='titleBar'
                                >
                                    <h3>EDUCATION BACKGROUND</h3>
                                </Grid>

                                <Grid
                                    item
                                    direction="column"
                                    justify="flex-start"
                                    alignItems="flex-start"
                                >
                                    <div style={{ width: '100%' }}>
                                        <Box display="flex" p={1} bgcolor="background.paper">
                                            <Box p={1} flexGrow={1}>
                                                <h5><SchoolIcon /> Bachlors Education</h5>
                                            </Box>
                                        </Box>
                                        <Box display="flex" p={1} bgcolor="background.paper">
                                            <Box p={1} flexGrow={1}>
                                                <h5><SchoolIcon /> Higher Secondary</h5>
                                            </Box>
                                        </Box>
                                        <Box display="flex" p={1} bgcolor="background.paper">
                                            <Box p={1} flexGrow={1}>
                                                <h5><SchoolIcon /> School</h5>
                                            </Box>
                                        </Box>
                                    </div>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={2} />
                </Grid>

                {/*Five Grid Element*/}
                <Grid container item xs={12} className={classes.Five}>
                    <Grid item xs={2} />
                    <Grid container item xs={8}>
                        <Paper className={classes.paper} elevation={3}>
                            <Grid
                                container
                                direction="row"
                                justify="flex-start"
                                alignItems="flex-start">
                                <Grid
                                    container
                                    item
                                    direction="row"
                                    justify="flex-start"
                                    alignItems="flex-start"
                                    className='titleBar'
                                >
                                    <h3>WORK EXPERIENCE</h3>
                                </Grid>

                                <Grid
                                    item
                                    direction="column"
                                    justify="flex-start"
                                    alignItems="flex-start"
                                >
                                    <div style={{ width: '100%' }}>
                                        <Box display="flex" p={1} bgcolor="background.paper">
                                            <Box p={1} flexGrow={1}>
                                                <h5><WorkIcon /> Internship</h5>
                                            </Box>
                                        </Box>
                                        <Box display="flex" p={1} bgcolor="background.paper">
                                            <Box p={1} flexGrow={1}>
                                                <h5><WorkIcon /> Project</h5>
                                            </Box>
                                        </Box>
                                        <Box display="flex" p={1} bgcolor="background.paper">
                                            <Box p={1} flexGrow={1}>
                                                <h5><WorkIcon /> Research Paper</h5>
                                            </Box>
                                        </Box>
                                    </div>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={2} />
                </Grid>


            </Grid>
        </div >


    );
}