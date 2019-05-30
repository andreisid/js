import React from "react";
import Photo from "./Photo";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function PhotoWall(props) {
  return (
    <div>
      <Link className="addIcon" to="/AddPhoto">
        Add Photos
      </Link>
      {/* <a className="addIcon" onClick={props.onNavigate} href="#AddPhoto">
        Add Photos
      </a> */}
      {/* <button className="addIcon" onClick={props.onNavigate}>
        Add
      </button> */}
      <div className="photo-grid">
        {props.posts
          .sort(function(x, y) {
            return y.id - x.id;
          })
          .map((post, index) => (
            <Photo
              post={post}
              key={index}
              onRemovePhoto={props.onRemovePhoto}
            />
          ))}
      </div>
    </div>
  );
}

PhotoWall.propTypes = {
  posts: PropTypes.array.isRequired,
  onRemovePhoto: PropTypes.func.isRequired
};

// class PhotoWall extends Component {
//   state = {};
//   render() {
//     return (
//       <div className="photo-grid">
//         {this.props.posts.map((post, index) => (
//           <Photo post={post} key={index} />
//         ))}
//       </div>
//     );
//   }
// }

export default PhotoWall;
