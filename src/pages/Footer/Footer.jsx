import { 
    BookOpen ,
    Linkedin ,
    Github 
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-2 border-t-mycolor text-black py-2">
        <div className="flex justify-between items-center mx-10">
            <div>
                <h1 className="dark:text-white"><BookOpen size={30} /></h1>
            </div>
            <div className="flex space-x-2">
                <a href="https://www.linkedin.com/in/omar-maftouh-71212722a/" className="dark:text-white"><Linkedin /></a>
                <a href="https://github.com/MAFTOUH-Omar/" className="dark:text-white"><Github /></a>
            </div>
        </div>
    </footer>
  );
};

export default Footer;