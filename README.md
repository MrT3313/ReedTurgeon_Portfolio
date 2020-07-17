# Reed Turgeon's Portfolio

🌎 [Hosted Netlify Project](https://turgeonportfolio.netlify.app) 🌎

## My Info
| title     | link                                                          | 
| ---       | ---                                                           |
| LinkedIn  | [/in/reedturgeon/](https://www.linkedin.com/in/reedturgeon/)  |
| Github    | [/MrT3313](https://github.com/MrT3313)                        |
| Email     | turgeon.dev@gmail.com                                         |
| Phone     | 508 - 446 - 6633                                              | 

## Stack

| name                  | description                           | 
| ---                   | ---                                   | 
| React                 | UI Component Library                  | 
| React Hooks           | State Management                      | 
| Styled-Components     | Component Scopped Styling Library     | 

## Versions
<details open>
<summary>1.5.0 - Favicon</summary>
</details>

<details>
<summary>1.4.1 - Font Sizing & Mouse Event Updates</summary>
- Small Updates to font sizing across the project  
- Pointer curser added to links
</details>

<details>
<summary>1.4.0 - Moved Skills to Own < HomepageSelector /> Section</summary>

- Removed  
    1. `< SkillsFooter />`
- Added  
    1. `< Skills />` section added to `< HomepageSelector />`
        - Skills separated into `General`, `Front-End`, & `Back-End` skills
    2. `< CodebaseFooter />` with link to Portfolio Repo replaced `< SkillsFooter />` on `< HomepageMobile />` & `< HomepageRight />` in `< HomepageTabletDesktop />`
    3. `< SelectedTitle />` subtitle removed when the `Active_Title` is not the default `Welcome!` 
    4. Initial IMGs added for to `< ProjectItem />`
    5. Google Font `Cinzel` added for name in header `< Header />`

- Screenshots:   
<img src="client/src/assets/readMe/1.4.0_Homepage_Skills.png" height='300'> 

</details>

<details>
<summary>1.3.0 - Skills Footer w/ Icons</summary>

- Added an additional footer with icons of some development skills

Screenshots:   
<img src="client/src/assets/readMe/1.3.0_Mobile_SkillsFooter.png" height='300'> 
<img src="client/src/assets/readMe/1.3.0_Desktop_SkillsFooter.png" height='300'> 


</details>
<details>
<summary>1.2.0 - Switched to Mobile First Styling</summary>

- Media Queries were getting out of hand while not really hitting the functionality that was needed 
- Mobile Version == `window.innderWidth <= 500`
- Desktop Version == `window.innerWidth > 500`
- Reogranized repo to match with mobile first

Screenshots:   
<img src="client/src/assets/readMe/1.2.0_MobileFirstDesktop_ClosedItems.png" height='300'> 
<img src="client/src/assets/readMe/1.2.0_MobileFirstDesktop_ExpandedItem.png" height='300'>

<img src="client/src/assets/readMe/1.2.0_MobileFirstMobile_ClosedItems.png" height='300'>
<img src="client/src/assets/readMe/1.2.0_MobileFirstMobile_ExpandedItem.png" height='300'> 
    
     
- Updated Repo Structure
    ```
    │   └── src
    │       ├── App.js
    │       ├── index.js
    │       ├── assets
    │       │   ├── icons
    │       │   │   ├── ...
    │       │   └── readMe
    │       │       ├── ...
    │       ├── components
    │       │   ├── HomepageLine.js
    │       │   ├── ProjectItem.js
    │       │   ├── SelectedTitle.js
    │       │   ├── desktopHomepage
    │       │   │   ├── HomepageLeft.js
    │       │   │   └── HomepageRight.js
    │       │   ├── footer
    │       │   │   └── Footer.js
    │       │   ├── header
    │       │   │   ├── ContactItem.js
    │       │   │   ├── Header.js
    │       │   │   └── SocialItem.js
    │       │   └── selector
    │       │       ├── HomepageSelector.js
    │       │       ├── itemFactory
    │       │       │   ├── Education.js
    │       │       │   ├── Experience.js
    │       │       │   └── Projects.js
    │       │       └── items
    │       │           ├── EducationItem.js
    │       │           ├── ExperienceItem.js
    │       │           └── ProjectItem.js
    │       ├── styles
    │       │   ├── index.css
    │       │   ├── responsiveSizes.js
    │       │   └── theme.js
    │       └── views
    │           ├── Resume.js
    │           └── homepage
    │               ├── HomepageMobile.js
    │               └── HomepageTabletDesktop.js
    ```

</details>


<details>
<summary>1.1.3 - Education Category Update</summary>

1. font-size / font-weight / font-style => used to emphasize items in `<Education />` & `<EducationItem />`
2. `src > components > homepage > RIGHT` directory reorg to better organize components and logic

- Updated Repo Structure
    ```
    │   └── src
    │       ├── App.js
    │       ├── assets
    │       ├── components
    │       │   ├── HomepageLine.js
    │       │   └── homepage
    │       │       ├── LEFT
    │       │       │   ├── HomepageLeft.js
    │       │       │   └── SelectedTitle.js
    │       │       └── RIGHT
    │       │           ├── HomepageRight.js
    │       │           ├── header
    │       │           │   ├── ContactItem.js
    │       │           │   ├── Header.js
    │       │           │   └── SocialItem.js
    │       │           └── selector
    │       │               ├── HomepageSelector.js
    │       │               ├── itemFactory
    │       │               │   ├── Education.js
    │       │               │   ├── Experience.js
    │       │               │   └── Projects.js
    │       │               └── items
    │       │                   ├── EducationItem.js
    │       │                   ├── ExperienceItem.js
    │       │                   └── ProjectItem.js
    │       ├── index.js
    │       ├── styles
    │       │   ├── index.css
    │       │   └── theme.js
    │       └── views
    │           ├── Homepage.js
    │           └── Resume.js
    ```

Screenshot:   
    <img src="client/src/assets/readMe/1.1.3_Education_Category_Update&Directory_Reorg.png" height='300'> 
</details>


<details>
<summary>1.1.2 - Projects Category Update</summary>

1. font-size / font-weight / font-style => used to emphasize items in `<Projects />` & `<ProjectItem />`

Screenshot:   
    <img src="client/src/assets/readMe/1.1.2_Projects_Category_Update.png" height='300'> 

</details>

<details>
<summary>1.1.1 - Education Category Update</summary>

1. font-size / font-weight / font-style => used to emphasize items in `<Exprience />` & `<ExperienceItem />`
2. Passed experience title moved from `TOP` to newly created `MIDDLE` div
3. `BOTTOM` div default `display: none` & `:hover` pseudo selector rendering descriptive bullets as user scrolls over an individual `<ExperienceItem />` 
4. Cleaned up class naming across app

Screenshot:   
    <img src="client/src/assets/readMe/1.1.1_Education_Category_Update.png" height='300'> 
</details>

<details>
<summary>1.1.0 - Homepage Styling Update & Initial Category Content</summary>

1. Font-Sizes changed from `px` to `rem` based on `body { font-size: 62.5% }` in `src > styles > index.css`
2. `<Header />` Social & Contact links 
    - `onMouseEnter()` => updating displayed path
    - `onClick()` => forwarding correctly
        - Linkedin & Github => opening a new tab w/ `target=_blank`
        - Email => Opening client's default email provider with `mailto:{email}` 
            - if client does not have a default email provider `onClick()` will have no affect
        - Phone => no `onClick()` logic
3. Initial content & rendering for: 
    - `<Experience />` & `<ExperienceItem />`
    - `<Projects />` & `<ProjectItem />` 
    - `<Education />` & `<EducationItem />`

Screenshot:   
    <img src="client/src/assets/readMe/1.1.0_HomepageStyling_InitialCategoryContent.png" height='300'> 
</details>

<details>
<summary>1.0.0 - Initial Outline & Hosting</summary>

[Hosted Netlify Project](https://turgeonportfolio.netlify.app)

1. Initial Homepage Outline & Content
2. Active Title Updating
    - `<li onMouseEnter()>` => Updates `<SelectedTitle>` value
    - `<StyledHomepageSelector onMouseLeave() => Resets `SelectedTitle>` to 'Welcome!'/>`
3. Netlify Hosting

Screenshot:   
    <img src="client/src/assets/readMe/1.0.0_InitialOutline_Hosting.png" height='300'> 
</details>

<details>
<summary>0.1.0 - Initial Commit</summary>

1. Create React App (CRA) refactored
2. Initial `<ThemeProvider>` 
    - wrapping main `<App />` component 
    - `index.js` importing `AppTheme` object from `theme.js` and passing it into `theme` prop
    ```javascript
        <ThemeProvider theme={AppTheme}>
    ```

</details>

## Assets
### Fonts
| name   | link                                                                                                                                                         | 
| ---    | ---                                                                                                                                                          | 
| Cinzel | [link](https://fonts.google.com/specimen/Cinzel?preview.text_type=custom&preview.text=Reed+Turgeon&sidebar.open&selection.family=Cinzel:wght@700#glyphs)     |

### Header Icons
| title                       | credit / author                        | icon link                                                                                      | 
| ---                         | ---                                    | ---                                                                                            |
| LinkedIn                    | Freepick on flaticon.com               | [link](https://www.flaticon.com/free-icon/linkedin_1384014?term=linkedin&page=1&position=1)    |
| Github                      | Pixel Perfect on flaticon.com          | [link](https://www.flaticon.com/free-icon/github_2111432)                                      |
| AtSymbol                    | Freepick on flaticon.com               | [link](https://www.flaticon.com/free-icon/at_2658139)                                          |
| Phone                       | Creaticca Creative Agency flaticon.com | [link](https://www.flaticon.com/free-icon/phone-call_455705)                                   |

### Skills Icons
| title                       | credit / author                             | icon link                                                                                      | 
| ---                         | ---                                         | ---                                                                                            |
| Agile Development           | Freepick on Flaticon.com                    | [link](https://www.flaticon.com/free-icon/agile_2784037?term=Agile&page=1&position=3)          | 
| Git                         | Icons8.com                                  | [link](https://icons8.com/icon/38389/git)                                                      | 
| HTML5                       | Dave Grandy on Flaticon.com                 | [link](https://www.flaticon.com/free-icon/html-5-logo_25252)                                   | 
| CSS3                        | Pixel perfect on Flaticon.com               | [link](https://www.flaticon.com/free-icon/css-3_732007?term=css&page=1&position=30)            | 
| JS                          | Icons8.com                                  | [link](https://icons8.com/icons/set/javascript)                                                |
| React                       | unicons on Iconscout.com                    | [link](https://iconscout.com/icon/react-1543566)                                               | 
| Gatsby                      | icon-icons.com                              | [link](https://icon-icons.com/icon/gatsby-logo/145262)                                         | 
| Redux                       | icon-mafia on Iconscout.com                 | [link](https://iconscout.com/icon/redux)                                                       |
| LESS                        | Icons8.com                                  | [link](https://icons8.com/icon/Jv4b1C1B-9Q4/less-logo)                                         |
| SASS/SCSS                   | Icons8.com                                  | [link](https://icons8.com/icon/PrTcjq3n0VMb/sass)                                              |
| Styled Components           | Simpleicons.org                             | [link](https://simpleicons.org/icons/styled-components.svg)                                    |
| MaterialUI                  | Clipart.email                               | [link](https://www.clipart.email/make-a-clipart/?image=11416323)                               | 
| Axios                       | Richik Choudhury in Axios Community Contest | [contest](https://github.com/axios/axios/issues/2130) / [icon](https://drive.google.com/file/d/1SjKizrEIozluCIynXY12aCPSaYDhA1l5/view?usp=sharing)     | 
| Netlify                     | Vectorlogo.zone                             | [link](https://www.vectorlogo.zone/logos/netlify/index.html)                                   | 
| NodeJS                      | Vectorlogo.zone                             | [link](https://www.vectorlogo.zone/logos/nodejs/index.html)                                    |
| Python                      | Icons8.com                                  | [link](https://icons8.com/icon/1909/python)                                                    |
| REST                        | icon-icons.com                              | [link](https://icon-icons.com/icon/Swagger/131958)                                             | 
| SQL                         | Smartline on flaticon.com                   | [link](https://www.flaticon.com/free-icon/files_569809?term=sql&page=1&position=5)             |
| PostgreSQL                  | Icons8.com                                  | [link](https://icons8.com/icon/36440/postgresql)                                               |
| ExpressJS                   | Vectorlogo.zone                             | [link](https://www.vectorlogo.zone/logos/expressjs/index.html)                                 |
| Knex                        | Iconify.design                              | [link](https://iconify.design/icon-sets/logos/knex.html)                                       | 
| Django                      | Icons8.com                                  | [link](https://icons8.com/icon/d-ecRvTZMFpE/django)                                            |
| Heroku                      | Icons8.com                                  | [link](https://icons8.com/icon/32343/heroku)                                                   | 
| Jest                        | Seeklogo.com                                | [link](https://seeklogo.com/vector-logo/273561/jest)                                           | 

### Hobbies Footer
| title                       | credit / author                        | icon link                                                                                      | 
| ---                         | ---                                    | ---                                                                                            |
| Runner                      | Freepick on flaticon.com               | [link](https://www.flaticon.com/free-icon/running_763965?term=running&page=1&position=10)      |
| Swimmer                     | Freepick on flaticon.com               | [link](https://www.flaticon.com/free-icon/swimmer_2932366?term=swimmer&page=1&position=3)      | 
| Biker                       | Freepick on flaticon.com               | [link](https://www.flaticon.com/free-icon/bicycle-rider_71422)                                 | 



<!-- | Fishing Hooks (React Hooks) | Freepik on flaticon.com                | [link](https://www.flaticon.com/free-icon/hook_120183)                                         |  -->