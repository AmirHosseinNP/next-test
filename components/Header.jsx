import { Box } from "@mui/material";

const Header = () => {
  return (
    <div className="space-y-2 py-10">
      <h1 className="text-4xl font-bold text-center">
        <span className="text-primary-main">WebDev</span> News
      </h1>
      <p className="text-center">
        Keep up to date with the latest web dev news
      </p>
    </div>
  );
};

export default Header;
