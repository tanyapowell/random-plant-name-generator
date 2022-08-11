# Random Plant Name Generator

During Code n Chill sessions for the Black Codher Thomas cohort we are building a small react application together to understand the fundamentals of building react.js apps

## 06/08/22

- Created `PlantNames` component
  - This component is being called in the `App.js`
  - Props added
    - `title`: this is a string. It explain the type of list the plant names is, e.g `"These are the best plants"`
    - `names`: this is an array of strings. Each string is the name of a plant
- Created a `Plant` component:
  - This component is currently not being used
  - Props added:
    - `name`: this is string and should be what the plant is called
    - `family`: this is a string and is the family the plant belongs to, e.g. [Calathea](https://www.beardsanddaisies.co.uk/products/prayer-plant?_pos=3&_sid=59324b17d&_ss=r)
    - `type`: this is a string and shows the care type, e.g. unkillable or easy going
