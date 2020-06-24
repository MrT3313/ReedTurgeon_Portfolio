# Reed Turgeon's Portfolio
Welcome to my portfolio!

🌎[Hosted Netlify Project](https://turgeonportfolio.netlify.app)  🌎

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

<div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

| title     | credit / author   | icon link     | artist link       | 
| ---       | ---               | ---           | ---               |
| LinkedIn  |                   |               |                   | 
| Github    |                   |               |                   | 
| AtSymbol  |                   |               |                   | 
| Phone     |                   |               |                   |    