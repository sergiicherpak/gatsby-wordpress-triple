import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Members() {
  const data = useStaticQuery(graphql`
    query {
      allWpTeamMember(sort: {fields: databaseId, order:ASC}) {
        nodes {
          id
          title
          databaseId
          TypeTeamMember {
            jobTitle
            biography
          }
          featuredImage {
            node {
              altText
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
      }
    }
  `)

  const allmembers = data.allWpTeamMember.nodes

  const leader = allmembers.slice(0, 3);
  const members = allmembers.slice(3);

  return (
    <div className="team-container">
      <h2>
        Scroll down to meet our leadership team.
      </h2>
      <div className="three-up">
        {leader?.map((member) => {
          const { title, id, TypeTeamMember, databaseId } = member
          const avatar = getImage(member.featuredImage?.node?.localFile)
          const avatarUrl = member.featuredImage?.node?.localFile.publicURL
          return (
            <div
              className="team-member-container"
              key={id}
            >
              <a data-micromodal-trigger={`modal-${databaseId}`} href={`#modal-${databaseId}`}>
                <div className="name-and-title">
                  <span className="name">{title}</span>
                  <span className="title">{TypeTeamMember.jobTitle}</span>
                </div>
                <div className="team-image-container">
                  {avatar && (
                    <GatsbyImage
                      className="member-image"
                      image={avatar}
                      alt={member.featuredImage?.node?.alt || ``}
                    />
                  )}
                  <img
                    alt="arrow"
                    className="arrow"
                    src="/images/orange-right-arrow-in-white-circle.svg"
                  />
                </div>
              </a>
              <div className='modal micromodal-slide' id={`modal-${databaseId}`} aria-hidden='true'>
                <div className='modal__overlay' tabIndex={-1} data-micromodal-close>
                  <div
                    className='modal__container'
                    role='dialog'
                    aria-modal='true'
                    aria-labelledby='modal-1-title'>
                    <main className='modal__content' id='modal-1-content'>
                      <div className="modal-contain">
                        <div className="team_member_details">
                          <div className="bio-inner">
                            <h5 className="position">{TypeTeamMember.jobTitle}</h5>
                            <h2 className="post-title">{title}</h2>
                            <div className="bio">
                              {TypeTeamMember.biography}</div>
                          </div>
                        </div>
                        <div className="team_member_picture">
                          <div className="team_member_image_bg_cover"></div>
                          <div className="team_member_picture_wrap">
                            <div className="team_member_image"
                              style={{
                                backgroundImage: `url(${avatarUrl})`,
                                opacity: 1
                              }}
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </main>
                    <button
                      className='modal__close'
                      aria-label='Close modal'
                      data-micromodal-close
                    />
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="rest-of-the-team">
        {members?.map((member) => {
          const { title, id, TypeTeamMember, databaseId } = member
          const avatar = getImage(member.featuredImage?.node?.localFile)
          const avatarUrl = member.featuredImage?.node?.localFile.publicURL
          return (
            <div
              className="team-member-container"
              key={id}
            >
              <a data-micromodal-trigger={`modal-${databaseId}`} href={`#modal-${databaseId}`}>
                <div className="name-and-title">
                  <span className="name">{title}</span>
                  <span className="title">{TypeTeamMember.jobTitle}</span>
                </div>
                <div className="team-image-container">
                  {avatar && (
                    <GatsbyImage
                      className="member-image"
                      image={avatar}
                      alt={member.featuredImage?.node?.alt || ``}
                    />
                  )}
                  <img
                    alt="arrow"
                    className="arrow"
                    src="/images/orange-right-arrow-in-white-circle.svg"
                  />
                </div>
              </a>
              <div className='modal micromodal-slide' id={`modal-${databaseId}`} aria-hidden='true'>
                <div className='modal__overlay' tabIndex={-1} data-micromodal-close>
                  <div
                    className='modal__container'
                    role='dialog'
                    aria-modal='true'
                    aria-labelledby='modal-1-title'>
                    <main className='modal__content' id='modal-1-content'>
                      <div className="modal-contain">
                        <div className="team_member_details">
                          <div className="bio-inner">
                            <h5 className="position">{TypeTeamMember.jobTitle}</h5>
                            <h2 className="post-title">{title}</h2>
                            <div className="bio">
                              {TypeTeamMember.biography}</div>
                          </div>
                        </div>
                        <div className="team_member_picture">
                          <div className="team_member_image_bg_cover"></div>
                          <div className="team_member_picture_wrap">
                            <div className="team_member_image"
                              style={{
                                backgroundImage: `url(${avatarUrl})`,
                                opacity: 1
                              }}
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </main>
                    <button
                      className='modal__close'
                      aria-label='Close modal'
                      data-micromodal-close
                    />
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}
