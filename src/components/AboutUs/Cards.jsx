import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AboutUsCss from "./AboutUsBox.module.css";

function WorkerCard(){
    return(
      <div className={AboutUsCss.CardContainer}>
<Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      <div className={AboutUsCss.CardLable}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Vaiatka Pupkin
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Govno-koder
        </Typography>
      </CardContent>
      </div>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
      </div>
    );
  }

  export default WorkerCard;