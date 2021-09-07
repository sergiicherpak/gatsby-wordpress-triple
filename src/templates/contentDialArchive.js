import React from "react";
import { graphql } from "gatsby";
import { useFuzzy } from "react-use-fuzzy";
import slugify from "slugify";

import Layout from "../components/layout";
import Seo from "../components/seo";

import Header from "../components/content-dial-archive/Header";
import Search from "../components/content-dial-archive/Search";
import List from "../components/content-dial-archive/List";
import { useQueryParam, ArrayParam } from "use-query-params";

const ContentDialArchive = ({ data }) => {
  const posts = data.allWpContentDial.nodes;
  const contentDialCategories = data.allWpContentDialCategory.nodes;

  const [categories, setCategories] = useQueryParam("categories", ArrayParam);

  const postsFilteredbyCategories = categories
    ? posts.filter((post) => {
        let isIncluded = false;
        post.contentDialCategories.nodes.forEach((category) => {
          if (categories.includes(slugify(category.name))) {
            isIncluded = true;
          }
        });

        return isIncluded;
      })
    : posts;

  const { result, keyword, search } = useFuzzy(postsFilteredbyCategories, {
    keys: ["title"],
  });

  const filteredResult = keyword
    ? result.map((result) => result.item)
    : postsFilteredbyCategories;

  return (
    <Layout>
      <Seo title="All Profiles" />
      <div className="main-container">
        <div className="main-container-inner">
          <div className="post-type-archive-content-dial">
            <Header />
            <Search
              search={search}
              dialCategories={contentDialCategories}
              selectedCategoires={categories}
              setCategories={setCategories}
            />
            <List posts={filteredResult} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    allWpContentDial(
      limit: $limit
      skip: $skip
      sort: { order: ASC, fields: title }
    ) {
      nodes {
        title
        uri
        slug
        contentDialCategories {
          nodes {
            name
          }
        }
        featuredImage {
          node {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 150
                  quality: 100
                  placeholder: NONE
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    }
    allWpContentDialCategory {
      nodes {
        name
        contentDials {
          nodes {
            id
            title
          }
        }
      }
    }
  }
`;

export default ContentDialArchive;
