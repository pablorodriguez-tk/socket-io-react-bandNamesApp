import HomaPage from "./pages/HomePage";
import { SocketProvider } from "./context/SocketContext";

export const BandNamesApp = () => {
  return (
    <SocketProvider>
      <HomaPage />
    </SocketProvider>
  );
};
