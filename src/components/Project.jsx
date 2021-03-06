import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className="card"
     sx={{ maxWidth: 645 }}>
      <CardHeader style={{backgroundColor: "#dcdddd"}} title={props.label} subheader={props.date} />
      <CardContent className="cardContent">
      <CardMedia className="projectItemImg"
        component="img"
        height="194"
        image={props.src}
        alt={props.alt}
      />
        <Typography  color="text.secondary" pl="2vw" >
          {props.text}
        </Typography>
      </CardContent>
      <CardActions style={{background: "#949595"}}
      disableSpacing>
      <Typography style={{paddingLeft:"33.5vw"}}>Read More</Typography>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
        >
          <ExpandMoreIcon/>
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus non ab tempora, dolores vero nostrum soluta. Ad consectetur natus, vitae magnam, corporis aperiam voluptatibus unde deserunt perferendis odio eveniet!
          </Typography>
          <Typography paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure facere reprehenderit commodi, ea a facilis rem accusamus delectus ab dolorum quam est vero modi dicta, et sequi praesentium. Earum, possimus.
          </Typography>
          <CardActions>
            <Button  
            href={props.buttonUrl}
            target="_blank"
            size="small">
              Github
            </Button>
            <Button 
            href={props.buttonDeploy}
            target="_blank"
            size="small">
              Deployed Site
            </Button>
          </CardActions>
        </CardContent>
      </Collapse>
    </Card>
  );
}

