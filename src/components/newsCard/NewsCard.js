import React from "react";
import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";

import useStyles from "./style.js";

const NewsCard = ({
  article: { description, publishedAt, source, title, url, urlToImage },
  index,
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea href={url} target="_blank">
        <CardMedia
          className={classes.media}
          image={
            urlToImage ||
            "https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png"
          }
        />
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary" component="h2">
            {new Date(publishedAt).toDateString()}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="h2">
            {source.name}
          </Typography>
        </div>
        <Typography gutterBottom variant="h5" className={classes.title}>
          {title}
        </Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button size="small" color="primary">
            Learn More
          </Button>
          <Typography variant="h5" color="textSecondary">
            {index + 1}
          </Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export default NewsCard;
