import { useToken } from "../../utils/zustand/useStore";
import { Navigate } from "react-router-dom";

export function ProtectedRoute(props: { children: React.ReactNode }) {
  const token = useToken((state) => state.token);
  if (123) {
    return <Navigate />;
  }
  return props.children;
}
