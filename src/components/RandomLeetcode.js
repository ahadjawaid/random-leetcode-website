import { ListItem, ListItemText, Link } from "@mui/material";
import blindJson from "../jsonFiles/blind75.json";

let blindList = [];
const blindObjectKeys = Object.keys(blindJson);

// Joins category lists
for (let i = 0; i < blindObjectKeys.length; i++) {
  const category = blindObjectKeys[i];
  blindList = [...blindList, ...blindJson[category]];
}

const LeetcodeList = (props) => {
  const randomIndex = Math.floor(props.randomIndex * blindList.length);
  const randomQuestion = blindList[randomIndex];

  return (
    <ListItem>
      <ListItemText>
        <Link href={randomQuestion.link} target="_blank">
          {randomQuestion.name}
        </Link>
      </ListItemText>
    </ListItem>
  );
};

export default LeetcodeList;
