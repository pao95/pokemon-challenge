import { Container, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import { ReactNode } from "react";
interface Props {
  children: ReactNode;
}
export const Content = ({ children }: Props) => {
  return (
    <Box component="main" sx={{ p: 3 }}>
      <Toolbar />
      <Container maxWidth="lg">{children}</Container>
    </Box>
  );
};
