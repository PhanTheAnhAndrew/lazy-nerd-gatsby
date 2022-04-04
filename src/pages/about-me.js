import React, { useMemo } from 'react'
import styled from 'styled-components';
import { useSiteMetadata, useTagList } from '../hooks';
import Layout from '../components/layout'
import Info from '../components/Info';
import CustomLink from '../components/CustomLink';

const StyledName = styled.div`
    div {
        font-weight: 700;
        font-size: 18px;
    }
`;

const AboutMePage = _ => {
    const { title: siteTitle, subTitle: siteSubTitle } = useSiteMetadata();

    const renderContact = () => (
        <Info title="Software Engineer">
            <Layout.Col>
                <div className="flex flex-column">
                    <CustomLink label="Address" link='/about-me' content="Ho Chi Minh City, Viet Nam" />
                    <CustomLink label="Email" useHref link="mailto:andrew.phan.uit@gmail.com" content="andrew.phan.uit@gmail.com" />
                </div>
                <div className="flex flex-column">
                    <CustomLink label="Phone" useHref link='tel:+84783550324' content="+84783550324" />
                    <CustomLink label="Github" link="" content="Github link" />
                </div>
            </Layout.Col>
        </Info>
    );

    const renderWorkingExperience = ({ titles, description, skills }) => {
        const titleElems = titles.map((each) => `[${each}]`).join('');
        const skillElems = skills.join(', ');
        return (
            <article className="mb-1">
                <div className="color-link"><strong>{titleElems}</strong></div>
                <div>{description}</div>
                <div><strong>Skills: </strong>{skillElems}</div>
            </article>
        )
    };

    return (
        <Layout title={siteTitle} description={siteSubTitle}>
            <div>
                <Info title="Phan The Anh" isMainTitle>
                    <StyledName>
                        <div>Software Engineer LV2 / Knorex Viet Nam</div>
                        <div>Keep practicing until become a senior dev</div>
                    </StyledName>
                </Info>
                {renderContact()}
                <Info title="objective">
                    <p>As a developer, cultivating skills and knowledge is always my top goal which not only helps me have a good career path but also creates many profits for the company.</p>
                </Info>
                <Info title="working experience">
                    {renderWorkingExperience({
                        titles: ['Knorex', 'LV2 Software Engineer', '12/2019 - now'],
                        description: 'I mainly work on ReactJS project, support new features and customize code based on requirements from the manager',
                        skills: ['Javascript - ReactJS', 'HTML', 'CSS-SCSS', 'related technologies'],
                    })}
                    {renderWorkingExperience({
                        titles: ['Hinnova', 'Java Developer', '07/2019 - 12/2019'],
                        description: 'I worked as an outsource staff for Sacombank',
                        skills: ['Java - Strut 1', 'HTML', 'Javascript', 'Oracle', 'communication and partner support', 'business analysis'],
                    })}
                    {renderWorkingExperience({
                        titles: ['Fujinet Systems JSC', 'Junior Developer', '10/2018 - 05/2019'],
                        description: 'I mainly customized projects for Japanese customers',
                        skills: ['Java - Spring Framework (MVC, Security, JPA, etc.)', 'Hibernet', 'HTML', 'CSS/SCSS', 'Javascript', 'Typescript', 'Angular 6', 'Jquery', 'Jquery mobile', 'Oracle', 'MySQL', 'create test cases'],
                    })}
                </Info>
                <Info title="education">
                    <p>
                        <div className="color-link"><strong>University of Information Technology - Vietnam National University Ho Chi Minh City [09-2015 - 06/2020]</strong></div>
                        <div><strong>Major: </strong>Software Engineering</div>
                        <div><strong>GPA: </strong>8.04</div>
                    </p>
                </Info>
                <Info title="certificate">
                    Updating :)
                </Info>
            </div>
        </Layout>
    );
};

export default React.memo(AboutMePage);
