import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@mui/material/Grid";
import ezra from "../../img/SignUp_PaymentPlan.png";
import anime from "../../img/anime-banner.JPG";
import laptop from "../../img/enclair_filtered-products.JPG";
import proj2 from "./proj2.JPG";
import proj3 from "../../img/next-js-portfolio.png";
import Afo from "../../img/afoImg.png";
import Watspi from "../../img/watspi-user.png";
import ITS from "../../img/trading-its.png";
import "./productList.css";

const sessionsData = [
  {
    Name: "AFO MEDIA",
    Image: Afo,
    Applink: "https://afomedia.com/login",
  },
  {
    Name: "Next JS Protfolio",
    Image: proj3,
    Applink: "https://next-js-portfolio-henna.vercel.app/",
  },
  {
    Name: "Ezra Managment System",
    Image: ezra,
    Applink: "https://ezra-home.kbadosh.com/",
  },
  {
    Name: "Best Anime Site",
    Image: anime,
    Applink: "https://next-js-sside.vercel.app/",
  },
  {
    Name: "Laptop Web App",
    Image: laptop,
    Applink: "https://enclair.tech/",
  },
  {
    Name: "ITS Trading App",
    Image: ITS,
    Applink: "https://trading-its-app.vercel.app/login",
  },
  {
    Name: "Watspi Web App",
    Image: Watspi,
    Applink: "https://watspi-user.vercel.app/dashboard",
  },
  {
    Name: "Front End on Html| CSS | JS",
    Image: proj2,
    Applink: "https://coruscating-stroopwafel-464404.netlify.app/",
  },
];
export default function ProductList() {
  return (
    <>
      <Grid container>
        {sessionsData.map((index) => (
          <Grid
            item
            xs={12} 
            md={4}
            textAlign="center"
            key={index}
            py={3}
            px={2}
          >
            <Card sx={{ maxWidth: 500 }} className="Main_card">
              <CardMedia
                sx={{ width: "100%", height: "60vh", objectFit: "cover" }}
                component="img"
                height="120"
                image={index.Image}
                alt="green iguana"
              />
              <CardContent>
                <hr />
                <Typography gutterBottom variant="h5" component="div">
                  {index.Name}
                </Typography>
                <hr />

                <Typography variant="body2" color="text.secondary">
                  <Button size="large">
                    <a
                      href={index.Applink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {index.Applink}
                    </a>
                  </Button>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <div style={{ textAlign: "center" }}>
        <h1 className="coming-soon">
          More Projects Coming Soon!
        </h1>
        <p className="soon-p">
          Stay tuned for our latest updates and exciting new projects on my Github Account!
        </p>
        <a href="https://github.com/Huzaifa246">
          <h1>
            <b> https://github.com/Huzaifa246 </b>
          </h1>
        </a>
      </div>
      <br />
    </>
  );
}
