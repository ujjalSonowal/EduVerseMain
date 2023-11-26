import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Course = (props) => {
  const { name, setShowClasses } = props;

  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  return (
    <div>
      <div style={{ marginTop: "20px" }} onClick={() => setShowClasses()}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            ></Typography>
            <Typography variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2">
              information about course
              <br />
              Teacher name..
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">More</Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

export default Course;
