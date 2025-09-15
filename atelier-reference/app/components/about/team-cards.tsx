

"use client";

import Image from 'next/image';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  skills: string[];
  social: {
    linkedin?: string;
    github?: string;
    twitter?: string;
    dribbble?: string;
  };
}

interface TeamCardsProps {
  members: TeamMember[];
}

const TeamCards = ({ members }: TeamCardsProps) => {
  return (
    <div className="team-cards">
      {members.map((member) => (
        <div key={member.id} className="team-card">
          <div className="team-card__image">
            <Image
              src={member.image}
              alt={member.name}
              fill
              style={{ objectFit: 'cover' }}
              className="member-photo"
            />
          </div>
          <div className="team-card__content">
            <h3 className="team-card__name">{member.name}</h3>
            <p className="team-card__role">{member.role}</p>
            <p className="team-card__bio">{member.bio}</p>
            
            <div className="team-card__skills">
              {member.skills.map((skill) => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
            
            <div className="team-card__social">
              {member.social.linkedin && (
                <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
                  <span>LI</span>
                </a>
              )}
              {member.social.github && (
                <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="social-link">
                  <span>GH</span>
                </a>
              )}
              {member.social.twitter && (
                <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="social-link">
                  <span>TW</span>
                </a>
              )}
              {member.social.dribbble && (
                <a href={member.social.dribbble} target="_blank" rel="noopener noreferrer" className="social-link">
                  <span>DR</span>
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamCards;
