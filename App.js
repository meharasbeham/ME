import { RiDeleteBin6Line } from "react-icons/ri";
import { GrEdit } from "react-icons/gr";
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineTextFields } from "react-icons/md";
import { RiPaintFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { ImParagraphLeft } from "react-icons/im";
import { MdOutlineSubdirectoryArrowLeft } from "react-icons/md";
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";
import { TiHome } from "react-icons/ti";
import { FaSearch } from "react-icons/fa";
import { GrDocumentNotes } from "react-icons/gr";





function App() {
       
  return (
        
    <div className="container">
    
        <div className="col-md-3">
        <div className="box">
                <div>Add a Note</div>
        <p className="title">title Take a Note...|
        <p className="icon">
        <MdOutlineTextFields />  &nbsp;&nbsp;&nbsp;
        <RiPaintFill />  &nbsp;&nbsp;&nbsp;
        <GiHamburgerMenu />  &nbsp;&nbsp;&nbsp;
        <HiMiniSpeakerWave />  &nbsp;&nbsp;&nbsp;
        <ImParagraphLeft />  &nbsp;&nbsp;&nbsp;
        <MdOutlineSubdirectoryArrowLeft />  &nbsp;&nbsp;&nbsp;
        <MdOutlineSubdirectoryArrowRight />
        </p>
</p>      
                </div>
        <h5 className="H"><FaRegFileAlt />MY NOTES</h5>
        <p className="p">Resendly viewed</p>
        <div className="sbox">
        <div className="box-1"> <b>Feedbacks  <GrEdit /><RiDeleteBin6Line /></b>  
             &nbsp; Lorem, ipsum consectetur adipisicing elit. dolor sit amet consectetur adipisicing elit. </div>

        <div className="box-2"><b>WeeklyTask <GrEdit /><RiDeleteBin6Line /></b> Lorem,consectetur adipisicing elit.  ipsum dolor sit amet consectetur adipisicing elit.</div>
        <div className="box-3"><b>Lyrics <GrEdit /> <RiDeleteBin6Line /></b>   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem, consectetur adipisicing elit. ipsum dolor sit amet consectetur elit.</div>
        </div>
        </div>
         <div className="sidebor"></div>
         <butten className="bn">
         <span>meha</span>
         </butten>
         <p>
         <TiHome /> Home</p>
         <p>
         <FaSearch />Search
         </p>
         <p>
         <GrDocumentNotes />Notes
         </p>
         <p>
         <RiDeleteBin6Line />Bin
         </p>
      </div>
      
         

          
    
         
        );
}

export default App;
