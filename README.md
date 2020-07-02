# Reed Turgeon's Portfolio
Welcome to my portfolio!

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
| Styled-Components     | Component Scopped Styling Library     | 

## Versions
<details open>
<summary>1.2.0 - Switched to Mobile First Styling</summary>

- Media Queries were getting out of hand while not really hitting the functionality that was needed 
- Mobile Version == `window.innderWidth <= 500`
- Desktop Version == `window.innerWidth > 500`
- Reogranized repo to match with mobile first

Screenshot:   
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

| title     | credit / author                        | icon link                                                                                      | 
| ---       | ---                                    | ---                                                                                            |
| LinkedIn  | Freepick on flaticon.com               | [link](https://www.flaticon.com/free-icon/linkedin_1384014?term=linkedin&page=1&position=1)    |
| Github    | Pixel Perfect on flaticon.com          | [link](https://www.flaticon.com/free-icon/github_2111432)                                      |
| AtSymbol  | Freepick on flaticon.com               | [link](https://www.flaticon.com/free-icon/at_2658139)                                          |
| Phone     | Creaticca Creative Agency flaticon.com | [link](https://www.flaticon.com/free-icon/phone-call_455705)                                   |


