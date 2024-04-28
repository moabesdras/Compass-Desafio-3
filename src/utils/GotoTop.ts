//Hooks
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
  
export default function GoToTop() {
  //Obter a localização atual da aplicação
  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 0);
  }
  //Rolar a página para o topo sempre que a rota mudar
  useEffect(() => {
    onTop()
  }, [routePath]);
  
  return null;
}