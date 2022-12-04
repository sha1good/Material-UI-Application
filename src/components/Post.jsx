import {
    Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(5),
  },
  media:{
    height:250,
    [theme.breakpoints.down("sm")]:{
        height: 150
    }
  }
}));

const Post = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image="https://images.pexels.com/photos/7319337/pexels-photo-7319337.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        title="My Post"
      />
      <CardContent>
        <Typography gutterBottom variant="h5">My First Post</Typography>
        <Typography variant="body2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          consectetur earum est.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          consectetur earum est.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          consectetur earum est.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
