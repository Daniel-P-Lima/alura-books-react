import "./estilo.css"
import Logo from "../Logo"
import OpcoesHeader from "../OpcoesHeader";
import IconesHeader from "../IconesHeader";

export default function Header() {
  return (
    <header className="app-header">
      <Logo/>
      <OpcoesHeader />
      <IconesHeader />
    </header>
  );
}


