import React from "react";
import Photo from "./Photo";

function PhotoWall(props) {
  return (
    <div className="photo-grid">
      {props.posts.map((post, index) => (
        <Photo post={post} key={index} onRemovePhoto={props.onRemovePhoto} />
      ))}
    </div>
  );
}

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
