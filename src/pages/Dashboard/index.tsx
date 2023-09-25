import GroupsIcon from "@mui/icons-material/Groups";
import HomeIcon from "@mui/icons-material/Home";
import QuizIcon from "@mui/icons-material/Quiz";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Logoreact from "../../assets/images/logo-react.svg";
import { RotasEnum } from "../../common/utils/rotas";
import {
  BodyContent,
  BottomContainer,
  Container,
  LeftContainer,
  NavbarButton,
} from "./styles";

export const DashboardPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const buttonList = (
    <div>
      <NavbarButton
        onClick={() => navigate(RotasEnum.home)}
        activePath={location.pathname === RotasEnum.home}
        type="button"
      >
        <HomeIcon />
      </NavbarButton>
      <NavbarButton
        onClick={() => navigate(RotasEnum.quiz)}
        activePath={location.pathname === RotasEnum.quiz}
        type="button"
      >
        <QuizIcon />
      </NavbarButton>
      <NavbarButton
        onClick={() => navigate(RotasEnum.virtualRooms)}
        activePath={location.pathname === RotasEnum.virtualRooms}
        type="button"
      >
        <GroupsIcon />
      </NavbarButton>
    </div>
  );

  return (
    <Container>
      <LeftContainer>
        <div>
          <img src={Logoreact} alt="reactjs" />
        </div>
        {buttonList}
        <div></div>
      </LeftContainer>
      <BodyContent>
        <Outlet></Outlet>
      </BodyContent>
      <BottomContainer>{buttonList}</BottomContainer>
    </Container>
  );
};
