import styled from "styled-components";
import { BrowserRouter as Router, Link } from "react-router-dom";

function EventInvite() {
  return (
    <Router>
      <AnserSection>
        <List as="a" href="#">
          Q. 나눔의 날이 궁금해요~
        </List>
        <List as="a" href="#">
          Q. 나눔의 날이 궁금해요~
        </List>
        <List as="a" href="#">
          Q. 나눔의 날이 궁금해요~
        </List>
        <List as="a" href="#">
          Q. 나눔의 날이 궁금해요~
        </List>
        <List as="a" href="#">
          Q. 나눔의 날이 궁금해요~
        </List>
      </AnserSection>
    </Router>
  );
}
export default EventInvite;
const AnserSection = styled.div`
  margin: 0 auto;
  display: block;
`;
const List = styled(Link)`
  display: block;
  padding: 18px 30px;
  text-align: left;
  border-bottom: 1px solid #c4c4c4;
`;
