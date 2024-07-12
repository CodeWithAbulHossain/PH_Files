import profile from "../../assets/images/logo.jpg";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 max-w-7xl mx-auto border-b-2 border-t-0 border-r-0 border-l-0 border-gray-600 border-solid">
      <h1 className="text-4xl font-bold">knowledge Cafe</h1>
      <img className="w-12 h-12" src={profile} alt="" />
    </header>
  );
};

export default Header;
