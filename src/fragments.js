import { graphql } from "gatsby"
//Image adapted to be adapted for each case
//If it's an svg use publicURL (can be the case for logo for ex)
export const fragments = graphql`
  fragment postTemplateFragment on WpPost {
    id
    excerpt
    content
    title
    uri
    date(formatString: "MMMM DD, YYYY")
    terms {
      nodes {
        ... on WpTag {
          __typename
          id
          name
        }
        ... on WpCategory {
          __typename
          id
          name
        }
      }
    }
    featuredImage {
      node {
        altText
        localFile {
          childImageSharp {
            gatsbyImageData(
              width: 1000
              quality: 100
              placeholder: NONE
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
    PageWeGoBeyondPageOne {
      buttonText
      footerText
      headerBrief
      headerHeading
      videoCta
      stops {
        title
        subTitle
        ctaUrl {
          target
          title
          url
        }
        faintCopy
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 1000
                quality: 100
                placeholder: NONE
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
      pageLogo {
        localFile {
          publicURL
          childImageSharp {
            gatsbyImageData(
              width: 1000
              quality: 100
              placeholder: NONE
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
    PageWeGoBeyondPageTwo {
      animationDuration
      headerBrief
      headerHeading
      linkToPageOne
      qualityCards {
        headline
        highlightText
        vimeoLeft
        subHeadline
        vimeoRight
        logosImage {
          localFile {
            publicURL
            childImageSharp {
              gatsbyImageData(
                width: 1000
                quality: 100
                placeholder: NONE
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
        seeMoreList {
          title
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 1000
                  quality: 100
                  placeholder: NONE
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
          link {
            target
            title
            url
          }
        }
      }
      megaCardHeaders {
        color
        label
      }
      qualityCardColor
      qualityHeader
      resourceBody
      resourceHeadline
      resultHeader
      resultsCardColor
      scaleCardColor
      scaleHeader
      trackingCodes

      resultsCards {
        anchorName
        headline
        highlightText
        vimeoLeft
        vimeoRight
        logosImage {
          localFile {
            publicURL
            childImageSharp {
              gatsbyImageData(
                width: 1000
                quality: 100
                placeholder: NONE
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
      megaCardHeaders {
        color
        label
      }
      pageLogo {
        localFile {
          publicURL
          childImageSharp {
            gatsbyImageData(
              width: 1000
              quality: 100
              placeholder: NONE
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`
