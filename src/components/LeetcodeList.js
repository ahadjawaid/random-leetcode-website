import { ListItem, Divider, ListItemText, Link } from "@mui/material";
import blindJson from "../jsonFiles/blind75.json";

const LeetcodeList = () => {
  return Object.keys(blindJson).map((category) => {
    const categoryList = blindJson[category];

    return categoryList.map((questionObject, key) => {
      const name = questionObject.name;
      const link = questionObject.link;

      return (
        <div key={key}>
          <ListItem>
            <ListItemText>
              <Link href={link}>{name}</Link>
            </ListItemText>
          </ListItem>
          <Divider />
        </div>
      );
    });
  });
};

export default LeetcodeList;
