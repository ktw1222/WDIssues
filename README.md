# WDIssues- Group 7 (GA WDI Project 3)

Project description:
WDIssues – An application designed to help students & instructors of the WDI Program.

Reason: As past and present users of Git issues we feel there is an opportunity to build an in-house WDI specific issue application. This would make it easier for both students and instructors going forward as the number of students joining GA increases.

Features:
(a). Issue system specific to WDI
(b). Better time management for students & instructors
(c).Students can view archived issues from previous cohorts
(d).Easier for Instructors to divide issues up.

General approach you took:
Friday(Planning):  Team brainstormed on potential ideas, we researched on projects individually and ended the day by discussing these with the team. Setup a Slack group and Trello project planning folder.(Trello:  https://trello.com/b/kjnoNi94/)
Saturday(Planning): We continued our discussion from Friday and then decided to go with an application that would handle WDI specific issues, as this was what the team felt most passionate about.
Monday(Code day!): started to code. Setup the initial express app, with models and views.
Tuesday: Deployed!
Wednesday: Worked on front end models and views. Really felt a frontend framework would have made it easier! Implemented handlebars.
Thursday: Worked on User model, third party login through GitHub .
Friday: Bootstrap templating.Redeployed, changed URL address. Debugged and cleaned code.  Passed HTML & CSS validators.

Installation instructions for any dependencies:
At the Terminal: Fork and clone project from https://github.com/nolds9/wdi_project_3
Change directory to the cloned repo
Install dependencies : npm install
Create database: created wdissues_db
Migrate and load seeds to the database:
node config/schema.js
node config/seeds.js
Create an env.js file, make sure to export your github client ID and callback URL
Open application locally: nodemon

Descriptions of any unsolved problems or major hurdles your team had to overcome
a. Timeboxing, trying to stay true to accomplish scope.

# WDIssues
>WDI issue system

## GA WDI Project 3
> Building our own API

### Technical Requirements

#### Back-end

- Your API includes at least 2 models, one of which may be a user
- Your models include at least one association
- Your API has RESTful routes as appropriate

---

#### Front-end

- Your app provides a reasonable user experience
- Your view(s) includes at least one AJAX request that allows a user to somehow interact with the API
- Your code, as rendered in the browser, passes a [CSS validator](http://jigsaw.w3.org/css-validator/) and an [HTML validator](https://validator.w3.org/)

---

#### Code Quality

Your code follows the styles we've covered in class: DRY, easy to read,
well-commented.

---

#### Submission

- One person from your team should file an issue on the [pbj-project3-gallery repo](https://github.com/ga-dc/pbj-project3-gallery). The issue should contain:
  - A link to **your group's main Github repo**.
  - At least 3 specific areas of code on which you would like targeted feedback (agree on these as a team)
  - Any other comments or questions
- Your submitted Github repository includes a `planning` folder that contains:
  - Evidence of planning (e.g. user stories, ERDs, and wireframe)
- Your repository includes a link to the deployed version of your project in the repository `URL` field
- The repository includes a `readme.md` file containing:
  - A description of the project
  - A couple paragraphs about the general approach you took
  - Installation instructions for any dependencies
  - Descriptions of any unsolved problems or major hurdles your team had to overcome

---

#### Deployment and functionality

- Your application is deployed to Heroku (hint: use `heroku rename` to give your app a nice URL)
- Cursory use of your app yields no errors that "break" your app
