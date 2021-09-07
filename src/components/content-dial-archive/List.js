import React,{useState} from 'react';
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const List = ({ posts }) => {
    const [postLimit, setPostLimit] = useState(12);
    const slicedPosts = posts?.slice(0, postLimit);

    const handleLoadMore = () => {
      setPostLimit(postLimit + 12);
    };
    return (
      <>
        <div className="content-dial">
          {slicedPosts?.map((post, index) => {
            const { slug, featuredImage } = post;
            const image =
              featuredImage.node.localFile.childImageSharp.gatsbyImageData;
            return (
              <div class={`entry one-fourth ${index === 0 ? "first" : ""}`}>
                <div className="post-wrap">
                  <Link
                    to={`/contentdial/publishers/${slug}`}
                    className="ct-inner"
                  >
                    <GatsbyImage image={image} className="publisher-logo" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        <div className="cd-navigation">
          <div className="facetwp-facet">
            <button
              className="facetwp-load-more"
              data-loading="Loading..."
              disabled={postLimit >= posts.length}
              onClick={handleLoadMore}
            >
              Load more
            </button>
          </div>
        </div>
      </>
    );
  };

export default List;
