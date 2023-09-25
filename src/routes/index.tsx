import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import { RotasEnum } from "../common/utils/rotas";
import { DashboardPage } from "../pages/Dashboard";
import HomePage from "../pages/Home";
import QuizPage from "../pages/Quiz";
import VirtualRoomsPage from "../pages/VirtualRooms";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route element={<DashboardPage />}>
          <Route path={RotasEnum.home} element={<HomePage />} />
          <Route path={RotasEnum.quiz} element={<QuizPage />} />
          <Route path={RotasEnum.virtualRooms} element={<VirtualRoomsPage />} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
