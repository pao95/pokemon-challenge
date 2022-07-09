import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "../components/layout/Layout";
import { DetailPokemon } from "../moduls/pages/DetailPokemon";
import { HomePokemon } from "../moduls/pages/HomePokemon";

export const AppRouter = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePokemon />} />
        <Route path="/pokemon/:id" element={<DetailPokemon />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Layout>
  );
};
