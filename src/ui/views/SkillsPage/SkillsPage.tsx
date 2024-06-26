import React from 'react'
import type { NextPage } from 'next'

import * as Icons from 'ui/icons'
import ArticleTemplate from 'ui/templates/ArticleTemplate'

import * as Styled from './SkillsPage.styled'

const SkillsPage: NextPage = () => (
  <ArticleTemplate subtitle="Skills">
    <Styled.Page>
      <Styled.Heading>Skills</Styled.Heading>
      <Styled.Sections>
        <Styled.Section>
          <Styled.SubHeading>Front-End Web Applications</Styled.SubHeading>
          <Styled.Icons>
            <Icons.Javascript />
            <Icons.Typescript />
            <Icons.Node />
            <Icons.React />
            <Icons.Redux />
            <Icons.Next />
            <Icons.Gatsby />
            <Icons.Meteor />
            <Icons.Remix />
            <Icons.Preact />
            <Icons.Webpack />
            <Icons.Vite />
            <Icons.CreateReactApp />
            <Icons.Vue />
            <Icons.Nuxt />
            <Icons.Angular />
          </Styled.Icons>
          <Styled.Description>
            Javascript, Typescript, Node.js, React, Redux, React Hooks, Next.js,
            Gatsby, Meteor, Remix, Preact, Webpack, Vite, Create React App,
            Vue.js, Vuex, Nuxt, Angular, Ember, Knockout.js, Backbone.js, jQuery
          </Styled.Description>
        </Styled.Section>
        <Styled.Section>
          <Styled.SubHeading>Responsive Design and Styling</Styled.SubHeading>
          <Styled.Icons>
            <Icons.Html />
            <Icons.Css />
            <Icons.Sass />
            <Icons.CssModules />
            <Icons.StyledComponents />
            <Icons.Tailwind />
            <Icons.AntDesign />
            <Icons.MaterialDesign />
            <Icons.MaterialUi />
            <Icons.Semantic />
            <Icons.Materialize />
            <Icons.Bulma />
            <Icons.Bootstrap />
          </Styled.Icons>
          <Styled.Description>
            HTML, CSS, SCSS, Sass, Flexbox, CSS Modules, Styled Components,
            Tailwind, Ant Design, Material Design, MUI, Semantic UI,
            Materialize, Foundation, Bulma, Bootstrap
          </Styled.Description>
        </Styled.Section>
        <Styled.Section>
          <Styled.SubHeading>Back-End, Servers, and APIs</Styled.SubHeading>
          <Styled.Icons>
            <Icons.Node />
            <Icons.Serverless />
            <Icons.Express />
            <Icons.Koa />
            <Icons.SocketIo />
            <Icons.GraphQl />
            <Icons.Php />
            <Icons.Symfony />
            <Icons.Yii />
            <Icons.Zend />
            <Icons.CodeIgniter />
            <Icons.Java />
            <Icons.Spring />
            <Icons.Python />
            <Icons.Django />
            <Icons.Go />
          </Styled.Icons>
          <Styled.Description>
            Node.js, Serverless, Express, Hapi, Koa, Socket.io, REST APIs,
            GraphQL, Monoliths, MVC Architecture, OOP, PHP, Slim, Symfony, Yii,
            Zend, CodeIgniter, CakePHP, Ruby, Rails, ColdFusion, CFWheels, Java,
            Spring, Python, Django, GoLang
          </Styled.Description>
        </Styled.Section>
        <Styled.Section>
          <Styled.SubHeading>Databases and Datastores</Styled.SubHeading>
          <Styled.Icons>
            <Icons.MySql />
            <Icons.MariaDb />
            <Icons.PgSql />
            <Icons.Oracle />
            <Icons.MsSql />
            <Icons.MongoDb />
            <Icons.Firebase />
            <Icons.Couchbase />
            <Icons.CouchDb />
            <Icons.DynamoDb />
            <Icons.Redis />
          </Styled.Icons>
          <Styled.Description>
            MySQL, MariaDB, pgSQL, Oracle, MS SQL Server, RDS, CloudSQL,
            MongoDB, Firebase, Couchbase, CouchDB, Dynamo, Redis
          </Styled.Description>
        </Styled.Section>
        <Styled.Section>
          <Styled.SubHeading>Isolation, Testing, and QA</Styled.SubHeading>
          <Styled.Icons>
            <Icons.Storybook />
            <Icons.Chromatic />
            <Icons.Jest />
            <Icons.TestingLibrary />
            <Icons.Cypress />
            <Icons.Playwright />
            <Icons.Selenium />
            <Icons.Protractor />
            <Icons.Mocha />
          </Styled.Icons>
          <Styled.Description>
            Storybook, Chromatic, Jest, React Testing Library, Enzyme, Cypress,
            Playwright, Nightwatch, Selenium, Protractor, Mocha
          </Styled.Description>
        </Styled.Section>
        <Styled.Section>
          <Styled.SubHeading>Code Control and Integration</Styled.SubHeading>
          <Styled.Icons>
            <Icons.Git />
            <Icons.GitFlow />
            <Icons.GitHub />
            <Icons.GitLab />
            <Icons.BitBucket />
            <Icons.Jira />
            <Icons.Pivotal />
            <Icons.Trello />
            <Icons.Docker />
            <Icons.Aws />
            <Icons.Gcp />
            <Icons.GitHubActions />
            <Icons.CircleCi />
            <Icons.Travis />
            <Icons.Jenkins />
          </Styled.Icons>
          <Styled.Description>
            Git, Git Flow, GitHub, GitLab, BitBucket, Jira, GitHub Issues,
            Pivotal, Trello, Docker, AWS, GCP, GitHub Actions, CircleCI, Travis,
            Jenkins
          </Styled.Description>
        </Styled.Section>
        <Styled.Section>
          <Styled.SubHeading>Programming Languages</Styled.SubHeading>
          <Styled.Icons>
            <Icons.Javascript />
            <Icons.Typescript />
            <Icons.Php />
            <Icons.Go />
            <Icons.Java />
            <Icons.Python />
            <Icons.Ruby />
            <Icons.Bash />
            <Icons.Dos />
            <Icons.VisualBasic />
            <Icons.Cpp />
            <Icons.Perl />
          </Styled.Icons>
          <Styled.Description>
            Javascript, Typescript, PHP, Go, Java, Python, Ruby, Bash, DOS,
            QBasic, Visual Basic, C++, C, Perl
          </Styled.Description>
        </Styled.Section>
        <Styled.Section>
          <Styled.SubHeading>Markup / Notation Languages</Styled.SubHeading>
          <Styled.Icons>
            <Icons.Html />
            <Icons.Markdown />
            <Icons.Css />
            <Icons.Json />
          </Styled.Icons>
          <Styled.Description>
            HTML, Markdown, CSS, JSON, JSDoc
          </Styled.Description>
        </Styled.Section>
      </Styled.Sections>
    </Styled.Page>
  </ArticleTemplate>
)

export default SkillsPage
