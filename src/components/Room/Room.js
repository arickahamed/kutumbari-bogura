import { Button } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import { red } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { PeopleAltOutlined } from '@material-ui/icons';
import AttachMoneySharpIcon from '@material-ui/icons/AttachMoneySharp';
import SingleBedIcon from '@material-ui/icons/SingleBed';
import React from 'react';
import { useHistory } from 'react-router-dom';

const Room = (props) => {
    console.log(props.room);
    const {title, avatar, description, imgURL, capacity, bed, price, bedType} = props.room;

    const flexStyle = {
        margin: "0 auto",
        marginBottom: "10px"
    }

    const useStyles = makeStyles((theme) => ({
        root: {
            maxWidth: 345,
        },
        media: {
            height: '40%',
            paddingTop: '56.25%', // 16:9
        },
        avatar: {
            backgroundColor: red[500],
            },
        }));

    const classes = useStyles();

    let history = useHistory();

    const handleClick = (bedType) => {
        history.push(`/book/${bedType}`)
    }

    return (
        <div style={flexStyle}>
            <Card style={{boxShadow: "3px 3px 5px lightgray"}} className={classes.root}>
                <CardHeader
                    avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        {avatar}
                    </Avatar>
                    }
                    title={title}
                />
                <CardMedia
                    className={classes.media}
                    image={imgURL}
                    title="Room Image"
                />
                <img src={`../../image/${avatar}.jpg`} alt="RoomImg" />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton>
                    <SingleBedIcon/> : {bed}
                    </IconButton>
                    <IconButton>
                    <PeopleAltOutlined/> : {capacity}
                    </IconButton>
                    <IconButton>
                    <AttachMoneySharpIcon/> : {price}
                    </IconButton>
                    <Button color="primary" 
                    onClick={()=>handleClick(bedType)}
                    variant="contained">Book</Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default Room;