import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const NoticeItem = ({ keyword, roomName, roomId, chatId }) => {
  const navigate = useNavigate();
  return (
    <Layout
      onClick={() => navigate(`/chatdetail/${roomId}`, { state: { chatId } })}
    >
      <TextContainer>
        <Title>{roomName}</Title>
        <Message>
          회원님이 설정하신
          <span style={{ color: "var(--red-pri)" }}>{keyword}</span>에 대한
          채팅이 왔어요!
        </Message>
      </TextContainer>
    </Layout>
  );
};

export default NoticeItem;

const Layout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  width: 375px;
  height: 63px;
  background-color: var(--white);
  border-radius: 10px;
  background-color: var(--white);
  cursor: pointer;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const Title = styled.span`
  font-size: 13px;
  font-weight: 600;
`;
const Message = styled.span`
  font-size: 12px;
  color: var(--black);
`;
