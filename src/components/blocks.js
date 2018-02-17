import React from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

const generateblocks = ({ block }) => {
  if (block) {
    return block.map(item => {
      return (
        <Fade key={item.id} bottom>
          <div className={`item ${item.type}`}  
          style={{
                background: `url(/images/blocks/${item.image}) no-repeat`
              }}> 
            <div className="veil" />
           
            <div className="title">
              <Link to={item.link}>{item.title}</Link>
            </div>
          </div>
        </Fade>
      );
    });
  }
};

const Blocks = props => {
  return <div className="home_blocks">{generateblocks(props)}</div>;
};

export default Blocks;
