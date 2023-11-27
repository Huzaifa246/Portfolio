import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@mui/material/Grid";
import proj1 from "./proj1.jpg";
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
    Name: "Quiz App in React",
    Image: proj1,
    Applink: "https://gleaming-creponne-4938a2.netlify.app/",
  },
  {
    Name: "Front End Project on Html| CSS | JS",
    Image: proj2,
    Applink: "https://coruscating-stroopwafel-464404.netlify.app/",
  },
  {
    Name: "Next JS Protfolio",
    Image: proj3,
    Applink: "https://next-js-portfolio-henna.vercel.app/",
  },
];
export default function ProductList() {
  return (
    <>
      <Grid container>
        {/* {Array.from(Array(12)).map((_, index) => ( */}
        {sessionsData.map((index) => (
          <Grid
            item
            xs={12} // occupy full width on small screens
            md={4} // occupy 4 columns on medium and large screens
            textAlign="center" // align the content to the center
            key={index}
            py={3} // use shorthand prop for vertical padding
            px={2} // use shorthand prop for horizontal padding
          >
            <Card sx={{ maxWidth: 500 }} className="Main_card">
              <CardMedia
                sx={{ width: "100%", height: "60vh" }} // set the image width to 100% of the card
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
        <h1
          style={{
            fontSize: "36px",
            color: "#4a4a4a",
            fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
            fontWeight: "bold",
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}
        >
          More Projects Coming Soon!
        </h1>
        <p
          style={{
            fontSize: "20px",
            color: "#4a4a4a",
            fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
            fontWeight: "bold",
            letterSpacing: "1px",
          }}
        >
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
