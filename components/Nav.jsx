import { AppBar, Button, Toolbar } from "@mui/material";
import Link from "next/link";

const Nav = () => {
  return (
    <AppBar>
      <Toolbar>
        <Link href="/" passHref>
          <Button className="text-white">Home</Button>
        </Link>
        <Link href="/about" passHref>
          <Button className="text-white">About</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
