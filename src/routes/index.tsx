import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import { RotasEnum } from "../common/utils/rotas";
import { DashboardPage } from "../pages/Dashboard";
import HomePage from "../pages/Home";
import QuizPage from "../pages/Quiz";
import RankingPage from "../pages/Ranking";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route element={<DashboardPage />}>
          <Route path={RotasEnum.home} element={<HomePage />} />
          <Route path={RotasEnum.quiz} element={<QuizPage />} />
          <Route path={RotasEnum.ranking} element={<RankingPage />} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
