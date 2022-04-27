// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import Image1 from "../Data/images/image1.jpeg"
// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

// export default function CardImg() {
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <Card sx={{ maxWidth: 345,maxHeight:345 }}>
//       <CardHeader

//         action={
//           <IconButton aria-label="settings">
//             <MoreVertIcon />
//           </IconButton>
//         }
//         subheader="September 14, 2016"
//       />
//       <CardMedia
//         component="img"
//         height="194"
//         image={Image1}
//       />
//       <CardContent>
//         <Typography variant="body2" color="text.secondary">
//           This impressive paella is a perfect party dish and a fun meal to cook
//           together with your guests. Add 1 cup of frozen peas along with the mussels,
//           if you like.
//         </Typography>
//       </CardContent>
//       <CardActions disableSpacing>
//         <IconButton aria-label="add to favorites">
//           <FavoriteIcon />
//         </IconButton>
//         <IconButton aria-label="share">
//           <ShareIcon />
//         </IconButton>
//         <ExpandMore
//           expand={expanded}
//           onClick={handleExpandClick}
//           aria-expanded={expanded}
//           aria-label="show more"
//         >
//           <ExpandMoreIcon />
//         </ExpandMore>
//       </CardActions>
//       <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <CardContent>
//           <Typography paragraph>Method:</Typography>
//           <Typography paragraph>
//             Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
//             aside for 10 minutes.
//           </Typography>
//           <Typography paragraph>
//             Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
//             medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
//             occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
//             large plate and set aside, leaving chicken and chorizo in the pan. Add
//             pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
//             stirring often until thickened and fragrant, about 10 minutes. Add
//             saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
//           </Typography>
//           <Typography paragraph>
//             Add rice and stir very gently to distribute. Top with artichokes and
//             peppers, and cook without stirring, until most of the liquid is absorbed,
//             15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
//             mussels, tucking them down into the rice, and cook again without
//             stirring, until mussels have opened and rice is just tender, 5 to 7
//             minutes more. (Discard any mussels that don&apos;t open.)
//           </Typography>
//           <Typography>
//             Set aside off of the heat to let rest for 10 minutes, and then serve.
//           </Typography>
//         </CardContent>
//       </Collapse>
//     </Card>
//   );
// }
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Image1 from '../Data/images/image1.jpeg'
import Image2 from '../Data/images/image2.jpeg'
import Image3 from '../Data/images/image3.jpeg'
import Image4 from '../Data/images/image4.jpeg'
import Image5 from '../Data/images/image5.jpeg'
import Image6 from '../Data/images/image6.jpeg'
import Image7 from '../Data/images/image7.jpeg'
export default function CardImg() {
  return (
    <ImageList sx={{ width: "95vw", height: "80vh"}}cols={4}>

      {itemData.map((item,index) => (
        <ImageListItem key={item.img} >
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
            style={{maxHeight:"40vh"}}
            
          />
          <ImageListItemBar
            title={`station ${index}`}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: Image1,
    title: 'Station 1',
    author: 'Warren County',
    featured: true,
  },
  {
    img:Image2,
    title: 'Station 1',
    author: 'Warren County',
  },
  {
    img: Image3,
    title: 'Station 1',
    author: 'Warren County',
  },
  {
    img: Image4,
    title: 'Station 1',
    author: 'Warren County',
    cols: 2,
  },
  {
    img: Image5,
    title: 'Station 1',
    author: 'Warren County',
    cols: 2,
  },
  {
    img: Image6,
    title: 'Station 1',
    author: 'Warren County',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: Image7,
    title: 'Station 1',
    author: 'Warren County',
  },
  {
    img: Image1,
    title: 'Station 1',
    author: 'Warren County',
    featured: true,
  },
  {
    img:Image2,
    title: 'Station 1',
    author: 'Warren County',
  },
  {
    img: Image3,
    title: 'Station 1',
    author: 'Warren County',
  },
  {
    img: Image4,
    title: 'Station 1',
    author: 'Warren County',
    cols: 2,
  },
  {
    img: Image5,
    title: 'Station 1',
    author: 'Warren County',
    cols: 2,
  },
  {
    img: Image6,
    title: 'Station 1',
    author: 'Warren County',
    rows: 2,
    cols: 2,
    featured: true,
  },
];