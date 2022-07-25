import { useState } from "react";
import { Container, Typography, Paper, List, Button, Box } from "@mui/material";
import LeetcodeList from "./LeetcodeList";
import RandomLeetcode from "./RandomLeetcode";

const randomQuestionIndex = (setDisplayList, setRandomIndex) => {
  setDisplayList(false);
  setRandomIndex(() => Math.random());
};

const Landing = () => {
  const [displayList, setDisplayList] = useState(true);
  const [randomIndex, setRandomIndex] = useState(Math.random());

  return (
    <Container maxWidth="md" sx={{ marginTop: 10, textAlign: "center" }}>
      <Typography fontFamily="Ubuntu" fontSize={50}>
        Random <span className="text-color-gradient">Leetcode</span> Problems
      </Typography>
      <Box sx={{ marginTop: 7 }}>
        <Button
          className="button-color-gradient"
          variant="contained"
          onClick={() => randomQuestionIndex(setDisplayList, setRandomIndex)}
          sx={{
            padding: "0.75rem 1rem",
            borderRadius: 13,
            fontSize: 20,
            textTransform: "capitalize",
          }}
        >
          Random Question
        </Button>
      </Box>

      <Paper
        elevation={8}
        sx={{
          backgroundColor: "#fff",
          padding: "2rem",
          marginTop: 7,
        }}
      >
        <List>
          {displayList ? (
            <LeetcodeList />
          ) : (
            <RandomLeetcode randomIndex={randomIndex} />
          )}
        </List>
      </Paper>
    </Container>
  );
};

export default Landing;
